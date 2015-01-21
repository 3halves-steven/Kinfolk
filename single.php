<?php
/**
 * The default template for displaying Single posts
 *
 * @package WordPress
 * @subpackage Charitas
 * @since Charitas 1.0
 */
?>

<?php get_header(); ?>
<?php $parallax_image = get_post_meta(get_the_ID(), 'wpl_parallax_image', true); ?>

<?php while ( have_posts() ) : the_post(); // start of the loop.?>
	
	<?php if( $parallax_image ) { ?>
		<div class="item teaser-page" style="background: transparent url(<?php echo $parallax_image ?>) 0px -100px fixed no-repeat; ">
	<?php } else {?>
		<div class="item teaser-page-list">
	<?php } ?>
	
		<div class="container_16">
			<aside class="grid_10">
				<h1 class="page-title"><?php the_title() ?></h1>
			</aside>
			<div class="clear"></div>
		</div>
	</div>
	<div class="up-arrow"></div>

<?php endwhile; // end of the loop. ?>

<div id="main" class="site-main container_16">
	<?php if ( ot_get_option('wpl_breadcrumbs') != "off") { ?>
		<div class="grid_14 back-bread">
			<?php wplook_breadcrumbs(); ?>	
		</div>
	<?php } ?>
	<div class="inner">
		<div id="primary" class="grid_11 suffix_1">
			<?php get_template_part( 'content', get_post_format() ); ?>
		</div><!-- #content -->

		<?php get_sidebar(); ?>
		<div class="clear"></div>
	</div><!-- #primary -->
</div>	

<?php get_footer(); ?>