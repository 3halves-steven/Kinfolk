<?php
/**
 * Template Name: Press/Blog Page
 *
 * @package WordPress
 * @subpackage Charitas
 * @since Charitas 1.0
 */
?>

<?php get_header(); ?>
	<div class="item teaser-page-list">
		<div class="container_16">
			<aside class="grid_10">
				<h1 class="page-title">ten <?php the_title(); ?></h1>
			</aside>
			<div class="clear"></div>
		</div>
	</div>
	<div class="up-arrow"></div>
	
	<div id="main" class="site-main container_16">
		<?php if ( ot_get_option('wpl_breadcrumbs') != "off") { ?>
			<div class="grid_14 back-bread">
				<?php wplook_breadcrumbs(); ?>	
			</div>
		<?php } ?>
		<div class="inner">
			<div id="primary" class="grid_11 suffix_1">
				<?php get_template_part('loop', 'blog' ) ; ?>
			</div>
	
			<?php get_sidebar(); ?>
			<div class="clear"></div>
		</div>
	</div>
<?php get_footer(); ?>