<?php
add_filter( 'protected_title_format', 'remove_protected_text' ); /* Remove "Protected:" from page titles --SM20141212 */function remove_protected_text() {	return __('%s');}
add_action( 'wp_enqueue_scripts', 'enqueue_parent_theme_style' );
function enqueue_parent_theme_style() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri().'/style.css' );
}


/* 
	Allows PHP in Text Widgets
	From http://redstarwebdevelopment.com/2013/04/09/quick-tip-allow-php-in-wordpress-widgets/ --SM20141117 
*/

add_filter('widget_text', 'php_text', 99);

function php_text($text) {
	if (strpos($text, '<' . '?') !== false) {
		ob_start();
		eval('?' . '>' . $text);
		$text = ob_get_contents();
		ob_end_clean();
	}
	return $text;
}

/* 
	Change name of user roles 
	From http://wordpress.stackexchange.com/questions/23026/is-there-way-to-rename-user-role-name-without-plugin --SM20141127 
*/

function change_role_name() {
    global $wp_roles;

    if ( ! isset( $wp_roles ) )
        $wp_roles = new WP_Roles();
		
    $wp_roles->roles['kinfolk_staff']['name'] = 'Stories';
    $wp_roles->role_names['kinfolk_staff'] = 'Stories';           
}
add_action('init', 'change_role_name');

add_filter('widget_text', 'do_shortcode');/* Opening Hours */function is_kinfolk_holiday($check_this_date) {	date_default_timezone_set('Australia/Melbourne');		global $wpdb;	$today = strtotime($check_this_date);			$holidays = json_decode($wpdb->get_var("SELECT option_value FROM wp_options WHERE option_name = 'wp_opening_hours_holidays'"),true);		foreach ($holidays as $holiday) {		if(($today >= strtotime($holiday['start'])) && ($today <= strtotime($holiday['end']))){			$holiday_time = true;			$open_detail = $holiday['name'];			$holiday_end = strtotime($holiday['end']);			break;		}else{			$holiday_time = false;		}			}			return array($holiday_time,$open_detail,$holiday_end);}function kinfolk_opening_hours_label() {	date_default_timezone_set('Australia/Melbourne');		$today = "today";	list($holiday_time,$open_detail,$holiday_end) = is_kinfolk_holiday($today);		if ( $holiday_time === true ){				$open_title = "Closed today";		} else {			/* Default hours and message				00:01 06:00 -- CLOSED -- opening at 7am		06:00 06:59 -- OPENING SOON -- from 7am today		07:00 13:59 -- OPEN TODAY -- now - 3pm		14:00 15:00 -- CLOSING SOON -- at 3pm today		15:01 23:59 -- NOW CLOSED open Tuesday* 7am				*/		$right_now=date('H');		$current_day=date('N');					if($current_day >= 5){				$next_day="Monday";		}else{				$next_day="tomorrow";		}						list($next_day_holiday,$next_day_holiday_detail,$next_day_holiday_end) = is_kinfolk_holiday($next_day);				if($next_day_holiday===true){			while ($next_day_holiday !== false){				$next_working_day=$next_day_holiday_end+86400;					list($next_day_holiday,$next_day_holiday_detail,$next_day_holiday_end) = is_kinfolk_holiday(date("Y-m-d H:i:s",$next_working_day));			}						if (date('N',$next_working_day) < 6){				$next_day=date('l',$next_working_day);			}else{				$next_day="Monday";			}		}				if($current_day > 5){ /* Saturday + Sunday, 00:00 (Sat) - 23:59 (Sun) */			$open_title="Closed Today";			$open_detail="open ".$next_day." at 7am";		}elseif($right_now >= 0 && $right_now < 6 && $current_day <= 5){ /* Monday - Friday, 00:00 - 05:59 */			$open_title="Closed";			$open_detail="opening at 7am";		}elseif($right_now >= 6 && $right_now < 7 && $current_day <= 5){ /* Monday - Friday, 06:00 - 06:59 */			$open_title="Opening Soon";			$open_detail="from 7am today";		}elseif($right_now >= 7 && $right_now < 14 && $current_day <= 5){ /* Monday - Friday, 07:00 - 13:59 */			$open_title="Open Today";			$open_detail="now - 3pm";		}elseif($right_now >= 14 && $right_now < 15 && $current_day <= 5){ /* Monday - Friday, 14:00 - 14:59 */			$open_title="Closing Soon";			$open_detail="at 3pm today";		}elseif($right_now >= 15 && $right_now <= 23 && $current_day <= 5){ /* Monday - Friday, 15:00 - 23:59 */			$open_title="Now Closed";			$open_detail="open ".$next_day." at 7am";		}			}			return array($open_title,$open_detail);}/* Food Menus */function get_menu_image($atts) {	extract(shortcode_atts(array('image' => 'default image','menu' => 'default menu','named' => 'default named'), $atts));		return '<div class="menu-image-link-container" style="background:url('.$image.') no-repeat;background-size:cover">				<div class="menu-image-link">					<p class="download-named">'.$named.'</p>					<p class="pdf-scroll-up"><img src="/wp-content/themes/charitas-child/images/pdf.svg" alt="download pdf menu" /> Download pdf</p>					<a href="'.$menu.'" class="divLink" target="_blank">PDF menu</a>				</div>			</div>';}add_shortcode('menu-image', 'get_menu_image');/* Child pages */function wpb_list_child_pages() { global $post; if ( is_page() && $post->post_parent )	$childpages = wp_list_pages( 'sort_column=menu_order&title_li=&child_of=' . $post->post_parent . '&echo=0' );else	$childpages = wp_list_pages( 'sort_column=menu_order&title_li=&child_of=' . $post->ID . '&echo=0' );if ( $childpages ) {		$string = '<aside>					<div id="child-page-list">						<h2 class="widget-title">'.get_the_title($post->post_parent).'</h2>						<ul>' . $childpages . '</ul>					</div>				</aside>';}return $string;}add_shortcode('wpb_childpages', 'wpb_list_child_pages');
?>