<?php

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

add_filter('widget_text', 'do_shortcode');
?>