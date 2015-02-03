<?php
/**
 * The header template file
 *
 * @package WordPress
 * @subpackage Charitas
 * @since Charitas 1.0
 */
?>

<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	
	<!--  Basic Page Needs -->
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<title><?php global $page, $paged;
		wp_title( '', true, 'right' );
		?></title>
	<meta name="description" content="">
	<meta name="author" content="">
	
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
	<script src="/wp-content/themes/charitas-child/js/kinfolk.min.js"></script>
	
	<?php list($open_title,$open_detail) = kinfolk_opening_hours_label(); ?>
	
	<script>
		var open_title = "<?php echo $open_title; ?>";
		var open_detail = "<?php echo $open_detail; ?>";
	</script>
	
	<!-- Favicon -->
	<?php if ( ot_get_option('wpl_favicon') ) { ?>
		<link rel="shortcut icon" href="<?php echo ot_get_option('wpl_favicon');  ?>">
		<link rel="apple-touch-icon" href="<?php echo ot_get_option('wpl_favicon');  ?>" />
	<?php } ?>

	<!-- Mobile Specific Meta -->
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

	<!-- CSS -->
	<?php if ( is_singular() ) wp_enqueue_script( "comment-reply" ); ?>
	<?php wp_head(); ?>
	<link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo('stylesheet_url'); echo '?' . filemtime( get_stylesheet_directory() . '/style.css'); ?>" />
	
	<!-- Fonts -->
	<link href='http://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:400,300,700' rel='stylesheet' type='text/css'>
	
</head>
<body <?php body_class(); ?>>
	<div id="page">
		<header id="branding" class="site-header" role="banner">
			<div id="sticky_navigation">
				<!-- Dropdown -->
				<div id="ddw" class="dropdownwrap">
					<div class="container_16">
						<div id="dd_hours-address" class="grid_2">
							<h3>HOURS</h3>
							<p>Monday - Friday<br /><strong>7.00am - 3.00pm</strong><br />Saturday - Sunday <br /><strong>closed</strong></p>
							<h3>ADDRESS</h3>
							<p>673 Bourke Street<br />Melbourne, VIC</p>
						</div>
						<div id="dd_contact-emails" class="grid_3">
							<h3>GENERAL</h3>
							<p><a href="mailto:info@kinfolk.org.au">info@kinfolk.org.au</a></p>
							<h3>CATERING</h3>
							<p><a href="mailto:catering@kinfolk.org.au">catering@kinfolk.org.au</a></p>
							<h3>VOLUNTEER</h3>
							<p><a href="mailto:volunteer@kinfolk.org.au">volunteer@kinfolk.org.au</a></p>
						</div>
						<div id="dd_map" class="grid_6">
							<div id="map-canvas" style="width:360px;height:185px;margin-top:20px;min-height:185px;"></div>
						</div>
						<div id="dd_mailing-list" class="grid_4 push_1">
							<h3>Kinfolk Newsletter</h3>
							<?php echo do_shortcode('[mc4wp_form]'); ?>
						</div>
						<div class="clear"></div>
					</div>
				</div>
				<!-- /Dropdown -->
				<div id="sup-nav">
					<div class="container_16">
						<div class="grid_6 alpha" id="sup-time">
							<div class="sup-text">
								<?php echo '<p class="sup-title">'.$open_title.'</p><p class="sup-detail">'.$open_detail.'</p>'; ?>
							</div>
						</div>
						<div class="grid_3">
							<a id="sup-logo" href="/" alt="Kinfolk - We Give A Fork" title="Kinfolk - We Give A Fork">Kinfolk Logo</a>
						</div>
						<div class="grid_6 omega" id="sup-contact">
							<div class="sup-text" id="dropdown">
								<p class="sup-title">CONTACT US</p>
								<p class="sup-detail">hours &amp; location</p>
							</div>
						</div>
						<div class="clear"></div>
					</div>
				</div>
				<div class="container_16" id="give-a-fork"></div>
				<div class="container_16" id="nav-container">
					<?php /*<hgroup class="fleft grid_5">
							<h1 id="site-title">
								<a href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?> - <?php bloginfo('description'); ?>" rel="home">
							<?php
							if ( ot_get_option('wpl_logo') != ''){?>
									<img src="<?php echo ot_get_option('wpl_logo'); ?>">
								<?php } else {
									bloginfo('name');
								}?>
							</a></h1>
								<h2 id="site-description"><?php bloginfo('description'); ?></h2>
					</hgroup>*/ ?>

					<nav role="navigation" class="site-navigation main-navigation grid_16" id="site-navigation">
						<?php wp_nav_menu( array('menu_class' => 'nav-menu',  'theme_location' => 'primary' )); ?>
					</nav>
					
					<!-- Mobile navigation -->
					
					<div class="grid_16 mob-nav"></div>

					<!-- .site-navigation .main-navigation -->
					<div class="clear"></div>
				</div>
				<div id="ba-container"><div id="the-ba"></div></div>
			</div>
		</header>
		<!-- #masthead .site-header -->