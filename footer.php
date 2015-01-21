<?php
/**
 * The footer template
 *
 * @package WordPress
 * @subpackage Charitas
 * @since Charitas 1.0
 */
?>
	
	<div id="footer-widget-area">
		
	<!-- Footer -->
		<footer id="colophon" class="site-footer" role="contentinfo">
			<div class="down-arrow"></div>			
			<div id="tertiary" class="sidebar-container" role="complementary">
				<?php if (is_active_sidebar( 'f1-widgets' ) || is_active_sidebar( 'f2-widgets' ) || is_active_sidebar( 'f3-widgets' ) || is_active_sidebar( 'f4-widgets' ) ) { ?>
					<div class="container_16">
						
						<?php if ( is_active_sidebar( 'f1-widgets' ) ) : ?>					
							<!-- First Widget Area -->
							<div class="grid_4">
								<?php dynamic_sidebar( 'f1-widgets' ); ?>
							</div>
						<?php endif; ?>

						<?php if ( is_active_sidebar( 'f2-widgets' ) ) : ?>					
							<!-- Second Widget Area -->
							<div class="grid_3">
								<?php dynamic_sidebar( 'f2-widgets' ); ?>
							</div>
						<?php endif; ?>

						<?php if ( is_active_sidebar( 'f3-widgets' ) ) : ?>					
							<!-- Third Widget Area -->
							<div class="grid_4">
								<?php dynamic_sidebar( 'f3-widgets' ); ?>
							</div>
						<?php endif; ?>

						<?php if ( is_active_sidebar( 'f4-widgets' ) ) : ?>					
							<!-- Forth Widget Area -->
							<div class="grid_4 prefix_1">
								<?php dynamic_sidebar( 'f4-widgets' ); ?>
							</div>
						<?php endif; ?>

						<div class="clear"></div>
					</div>
				<?php }	?>

			</div>

			<div class="footer-img"><img src="/wp-content/uploads/2014/11/footer-characters.png" id="footer-characters" class="container_16" alt="Thanks for giving a fork" /></div>
		</footer><!-- #colophon .site-footer -->

	</div>
	<!-- /#page -->

	<?php if ( ot_get_option('wpl_google_analytics_tracking_code') ) {
		// Google Analytics Tracking Code
		echo ot_get_option('wpl_google_analytics_tracking_code');
	} ?>

	<?php wp_footer(); ?>
</body>
</html>