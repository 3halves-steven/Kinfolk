<?php
/**
 * The default Sidebar. It will appear on all pages
 *
 * @package WordPress
 * @subpackage Charitas
 * @since Charitas 1.0
 */
?>
<?php if ( is_active_sidebar( 'page-1' ) ) : ?>
	<div id="secondary" class="grid_4 widget-area" role="complementary">
		<?php echo do_shortcode("[wpb_childpages]"); ?>
		<?php if ( ! MS_dynamic_sidebar( 'page-1' ) ) :  /* added MS_ for sidebar plugin --SM20141201 */ ?>
		<?php endif; // end sidebar widget area ?>
	</div>
<?php endif; ?>