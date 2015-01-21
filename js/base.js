jQuery(document).ready(function(){
	"use strict";

	/* Mobile Menu */
	jQuery(document).ready(function () {
		jQuery('header nav.site-navigation').meanmenu();
	});

	/* Flex Slider Teaser */
	jQuery(window).load(function() {
		jQuery('.flexslider').flexslider({
			animation: "fade",
			animationLoop: true,
			controlNav: "thumbnails",
			start: function(slider) {
				jQuery( '.flexslider' ).removeClass('loading');
			}
		});
	});

	/* Featured News Slider */
	jQuery(window).ready(function() {
		jQuery('.flexslider-news').flexslider({
		controlNav: false,
		directionNav:true,
		animationLoop: true,
		animation: "fade",
		useCSS: true,
		smoothHeight: true,
		slideshow: false,
		slideshowSpeed:3000,		
		pauseOnAction: true,
		touch: true,
		animationSpeed: 900,
		start: function(slider) {
				jQuery( '.flexslider-news' ).removeClass('loading');
			}
		});
	});

	/* Gallery Posts Slider */
	jQuery(window).ready(function() {
		
		jQuery('#flexslider-gallery-carousel').flexslider({
			animation: "slide",
			controlNav: false,
			animationLoop: false,
			slideshow: true,
			itemWidth: 150,
			asNavFor: '.flexslider-gallery'
		});

		jQuery('.flexslider-gallery').flexslider({
			animation: "fade",
			controlNav: false,
			animationLoop: false,
			slideshow: false,
			sync: "#flexslider-gallery-carousel",
			start: function(slider) {
				jQuery( '.flexslider-gallery' ).removeClass('loading');
			}
		});

	});

	/* Setting the equal height width  */
	jQuery('#main .staff-body .candidate').equalHeights(360,600);

	/* Toggle for Causes */
	jQuery(".donate_now").click(function () {
		jQuery(".paymend_detailes").toggle();
	});

	/* Toggle donate*/
	jQuery(".toggle-content-donation .expand-button").click(function() {
		jQuery(this).toggleClass('close').parent('div').find('.expand').slideToggle(250);
	});

	/* Toggle for Events */
	jQuery(".event-address").click(function () {
		jQuery(".event-map").toggle( function() {
			initialize();
		});
	});

	/* Toggle for Share buttons */
	jQuery(".share-buttons").click(function () {
		jQuery(".share-items").toggle();
	});


	jQuery(".bookplace").click(function () {
		jQuery(".book-your-place").toggle('slow');
	});

	
	/* Disables scroll until animation completes. Helps with sticky nav hiding homepage content depending on speed of scroll. */
	/* See http://stackoverflow.com/questions/11649456/how-to-disable-scrolling-until-animation-is-complete */
	
	// left: 37, up: 38, right: 39, down: 40,
	// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
	var keys = [37, 38, 39, 40];

	function preventDefault(e) {
	  e = e || window.event;
	  if (e.preventDefault)
		  e.preventDefault();
	  e.returnValue = false;  
	}

	function keydown(e) {
		for (var i = keys.length; i--;) {
			if (e.keyCode === keys[i]) {
				preventDefault(e);
				return;
			}
		}
	}

	function wheel(e) {
	  preventDefault(e);
	}

	function disable_scroll() {
	  if (window.addEventListener) {
		  window.addEventListener('DOMMouseScroll', wheel, false);
	  }
	  window.onmousewheel = document.onmousewheel = wheel;
	  document.onkeydown = keydown;
	}

	function enable_scroll() {
		if (window.removeEventListener) {
			window.removeEventListener('DOMMouseScroll', wheel, false);
		}
		window.onmousewheel = document.onmousewheel = document.onkeydown = null;  
	}
	
	/*--------------------------------------------------------*/
	
	
	/* Stick the menu */   
	jQuery(function() {
		// grab the initial top offset of the navigation 
		var sticky_navigation_offset_top = jQuery('#sticky_navigation').offset().top;
		
		// our function that decides weather the navigation bar should have "fixed" css position or not.
		var sticky_navigation = function(){
			var scroll_top = jQuery(window).scrollTop(); // our current vertical position from the top
			
			// if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
			if (scroll_top > sticky_navigation_offset_top) { 
				if($(".page-template-template-home-page-php").is(':visible')){
					disable_scroll();
				}
				jQuery('#sticky_navigation').stop(true).animate({'min-height':'150px'}, 500);
				jQuery('#sticky_navigation').css({'position': 'fixed', 'top':0, 'left':0});
				jQuery('.page-template-template-home-page-php #sup-logo').css({'background':'url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjEyOXB4IiBoZWlnaHQ9IjQwcHgiIHZpZXdCb3g9IjAgMCAxMjkgNDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIwIDciIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Ik02NCA4LjZjMC01LjIgMS4xLTcuMSAzLjQtNy4xQzcwLjMgMS41IDY5IDUgNzEuMyA1YzEgMCAxLjUtLjcgMS41LTEuNiAwLTEuNS0xLjYtMy40LTQuNi0zLjQtMy43IDAtNy41IDIuNC03LjUgOC42VjEzSDU3djEuNmgzLjd2Ny4zYzAgNC42LS42IDUuMy0zLjYgNS4zdjFoMTAuNHYtMWMtMy4xIDAtMy42LS44LTMuNi01LjN2LTcuM2g0LjZWMTNINjRWOC42ek03OCAxMi4yYy01LjEgMC05LjIgMy43LTkuMiA4LjMgMCA0LjYgNC4xIDguNCA5LjIgOC40czkuMi0zLjggOS4yLTguNGMuMS00LjYtNC4xLTguMy05LjItOC4zem0wIDE0LjljLTMuNyAwLTUuNS0zLTUuNS02LjYgMC0zLjYgMS44LTYuNiA1LjUtNi42IDMuOCAwIDUuNSAzIDUuNSA2LjYuMSAzLjctMS43IDYuNi01LjUgNi42ek05My42IDIxLjhWMGwtNi44IDEuMXYxYzMuMSAwIDMuNi44IDMuNiA1LjN2MTQuNGMwIDQuNi0uNSA1LjMtMy42IDUuM3YxaDEwLjR2LTFjLTMgLjEtMy42LS43LTMuNi01LjN6TTExNS44IDI2LjFsLTcuNi03LjdjMS4zLTEuMiAyLjItMS45IDMuMi0yLjUgMi4zLTEuNiAzLjkgMS41IDUuNi4xLjgtLjYuNy0xLjUuMi0yLjItLjktMS4yLTMuMy0xLjYtNS44LjEtMS44IDEuMi0zLjIgMi4zLTUuOSA0LjlWMGwtNi44IDEuMXYxYzMuMSAwIDMuNi44IDMuNiA1LjN2MTQuNGMwIDQuNi0uNSA1LjMtMy42IDUuM3YxaDEwLjR2LTFjLTMgMC0zLjYtLjgtMy42LTUuM1YyMWMuMS0uMS4xLS4yLjItLjJsLjItLjIgNy41IDcuNGg1LjF2LTFjLS42LjItMS45LS4yLTIuNy0uOXpNOS41IDE4LjRjMS4zLTEuMiAyLjItMS45IDMuMi0yLjUgMi4zLTEuNiAzLjkgMS41IDUuNi4xLjgtLjYuNy0xLjUuMi0yLjItLjktMS4yLTMuMy0xLjYtNS44LjEtMS44IDEuMi0zLjIgMi4zLTUuOSA0LjlWMEwwIDEuMXYxYzMuMSAwIDMuNi44IDMuNiA1LjN2MTQuNGMwIDQuNi0uNSA1LjMtMy42IDUuM3YxaDEwLjR2LTFjLTMgMC0zLjYtLjgtMy42LTUuM1YyMWMuMSAwIC4yLS4xLjItLjJsLjItLjIgNy41IDcuNGg1LjF2LTFjLS42IDAtMS45LS4zLTIuNy0xLjFsLTcuNi03LjV6TTI4IDIxLjh2LTkuN2wtNi44IDEuMXYxYzMgMCAzLjYuNyAzLjYgNS4zdjIuM2MwIDQuNi0uNiA1LjMtMy42IDUuM3YxaDEwLjR2LTFjLTMuMS4xLTMuNi0uNy0zLjYtNS4zek01Mi4xIDIxLjhWMTljMC0zLjktMS44LTYuOC01LjktNi44LTIuOSAwLTUgMS42LTYuMiAzLjF2LTIuNGMwLTYuNS0yLjktMTAtNy41LTEwLTQuMSAwLTcuMyAyLjEtNy4zIDQgMCAxLjEgMSAxLjkgMi4xIDEuOXMxLjYtLjcgMi4xLTEuNmMuOC0xLjUgMi4xLTIuNiAzLjgtMi42IDMuNCAwIDQuNCAyLjcgNC40IDQuOSAwIDEuNy0uNSAyLjgtMi4zIDMuNGwtMi4zLjR2MWMzIDAgMy42LjcgMy42IDUuM3YyLjNjMCA0LjYtLjYgNS4zLTMuNiA1LjN2MWgxMHYtMWMtMi44IDAtMy4yLS42LTMuMi01LjN2LTNjMC0yLjUgMi43LTQuNiA1LjItNC42IDIuNyAwIDMuOCAxLjkgMy44IDQuOXYyLjZjMCA0LjYtLjYgNS4zLTMuNiA1LjN2MWgxMC40di0xYy0zIC4xLTMuNS0uNy0zLjUtNS4zek03MC41IDMxLjJjLjkgMCAxLjMuMSAxLjMuMnYuM2MwIC4xLS4xLjItLjEuNGgtLjFsLS4yLS4xcy0uMS4yLS4yLjZsLS4zIDEuNWMtLjEuNi0uMSAxLS4yIDEuMS0uMS4yLS4xLjUtLjIgMUg2OS45Yy0uMiAwLS4zIDAtLjMtLjEgMCAwIC4yIDAgLjUtLjEuMSAwIC4yIDAgLjItLjFsLS43LjFjLS4xLS4xLS4xLS4yLS4yLS40LS4xLS40LS4yLS42LS4yLS45IDAgMC0uMS0uMS0uMS0uNCAwLS4yLS4xLS41LS4yLS45IDAgMC0uMS4yLS4yLjctLjIuNy0uNCAxLjItLjUgMS40IDAgMC0uMS4xLS4yLjFsLjEuMWMwIC4xLS4xLjEtLjMuMS0uNC4xLS42LjEtLjYgMHYtLjRjMC0uNS0uMS0xLS4yLTEuNiAwLS4yLS4xLS40LS4xLS41VjMzYzAtLjcgMC0xLjEtLjEtMS4xaC0uNmMtLjEgMC0uMi0uMS0uMi0uMyAwLS4xLjEtLjIuMi0uNEg2Ny41di4xYy4xLjEuMS4zLjEuNyAwIC43LjEgMS4yLjEgMS41di44YzAgLjQgMCAuNy4xLjdzLjItLjIuMy0uN2MuMi0uNi41LTEuMi43LTEuN2wuMS0uMi0uMS0uMXMuMS0uMS4yLS4xYy4zIDAgLjUuMS41LjMgMCAuMi4xLjQuMS42LjEuOS4yIDEuNi4zIDJsLjEuMWguMWMuMSAwIC4xLS4xLjEtLjIuMS0uMS4xLS4zLjItLjcgMC0uMy4xLTEuNS4xLTMuMXptLTQuNS40aC40cy0uMS0uMS0uMi0uMS0uMiAwLS4yLjF6bS4yLjJjLS4xLjEtLjEuMSAwIDB6bS4xIDBoLjUtLjV6bS43LjV2LjFjMCAuMyAwIC40LjEuNHYtLjFjLS4xLS4xLS4xLS4yLS4xLS40em0uMSAxLjN2LjEtLjF6bS4xLS43di4xYzAgLjIgMCAuNS4xIDF2LS4xYzAtLjQgMC0uOC0uMS0xem0uMSAydi4xLS40LjN6bTAgLjRjMCAuMSAwIC4xLjEuMWwtLjEtLjF6bTAgLjV6bS4zLS4zem0uNC0uNGMuMS4xIDAgLjMtLjIuNC4yLS4xLjMtLjEuMy0uMy4xLS4zLjItLjYuMi0uOC0uMS4xLS4yLjMtLjMuN3ptLjYtMS43em0uMi0uNWMuMS4xLjEuMSAwIDB6bS40LjhjMCAuMyAwIC41LjEuNiAwLS40LS4xLS42LS4xLS42em0uMi0uN3ptLjEgMi41di4xYy4xIDAgLjIgMCAuMi0uMWgtLjFjLS4xLjEtLjEgMC0uMSAwem0uNC4yaC4xLS4xYzAtLjEgMC0uMSAwIDB6bS4yIDBjLjEuMS4xIDAgLjEtLjF2LS4xYy0uMS4xLS4xLjEtLjEuMnptLjEtLjJjLjEgMCAuMS0uMS4xLS4zIDAgMCAuMS0uMi4xLS42di0uMWMtLjEuMS0uMS4yLS4xLjUgMCAwIDAgLjItLjEuNXptMS0zLjhsLjEuMXYtLjFoLjMtLjNjMC0uMS0uMS0uMS0uMSAwem0wLS4yaC41Yy0uMy0uMS0uNS0uMS0uNSAwek03My45IDMxLjZjLjIgMCAuNS4xLjkuMy4zLjIuNC40LjQuNS4yLjUuNC44LjQuOXYuMWMtLjEuMi0uMS4zLS4xLjRINzQuNGMtLjgtLjEtMS40LS4xLTEuOC0uMWgtLjJjLS4xLjEtLjEuMi0uMS4yIDAgLjEuMS4yLjEuMyAwIC4yIDAgLjQuMS40aC0uMWwuMS4xYzAgLjEuMS4yLjIuMy4yLjMuNC42LjYuNi4yLjEuNC4xLjcuMSAwIDAgLjEgMCAuMy0uMS4xIDAgLjMtLjIuNy0uNmgtLjFjLjEtLjMuMy0uNC41LS41LjEuMS4yLjEuMy4yLjEuMi4zLjQuNS43LS4yLjItLjMuNC0uNC40IDAtLjEtLjEtLjItLjItLjIgMCAwLS4yLjEtLjQuMy0uMS4xLS40LjItLjcuMy0uNC4xLS43LjEtLjguMWwtLjUtLjJjLS4zIDAtLjUtLjItLjgtLjUtLjEtLjEtLjItLjItLjItLjQgMCAwLS4xLS4zLS4yLS43IDAtLjItLjEtLjMtLjEtLjUgMC0uOC4yLTEuNS43LTIuMS4xLS4xLjItLjMuNC0uMy4xIDAgLjMtLjEuNS0uMSAwIC4xLjEuMS40LjF6bS0yIDIuM3YuMmMwIC4xIDAgLjIuMS4zIDAtLjMgMC0uNS0uMS0uNXptLjItLjhzLS4xLjItLjEuNGMwLS4xIDAtLjIuMS0uNHptLS4xLjR2LjEtLjF6bS4xIDEuMXptMCAuMmMwIC4xIDAgLjIuMS4yIDAtLjEgMC0uMi0uMS0uMnptLjMtMS4yaC4yLS4yem0wLTEuMXptMCAuNmguMS0uMWMuMSAwIDAgMCAwIDB6bS4xLS4yYzAgLjEuNS4yIDEuNi4yaC4yYy4yLjEuNC4xLjUuMWguMWMwLS4xLjEtLjEuMS0uMVYzM2MwLS4xLS4xLS4yLS40LS41LS4xLS4xLS4zLS4yLS41LS4ybC0uMy0uMWMtLjUuMS0uOC4yLTEgLjRsLS4zLjN6bTAtLjFzLjEtLjEgMCAwYzAtLjEgMC0uMSAwIDB6bS4xIDNjMCAuMSAwIC4xLjEuMSAwLS4xLS4xLS4xLS4xLS4xem0wLTMuNGguMS0uMWMuMS0uMSAwLS4xIDAgMHptLjEgMS4yem0wLTEuNmMuMiAwIC4yIDAgLjItLjF2LS4xYy0uMSAwLS4yLjEtLjIuMnptLjIgMS41Yy4xIDAgLjQuMS45LjFoLS4ySDc0LjJzLS40LS4xLTEuMy0uMXptLjEtLjNjLjEuMS4zLjEuNi4xaC4yYy0uMy0uMS0uNi0uMS0uOC0uMXptMC0uOWMuMSAwIC4yLS4xLjQtLjFoLS4xYy0uMiAwLS4zIDAtLjMuMXptLjEtLjVjLjEgMCAuMyAwIC41LS4xaC4xYy0uMi0uMS0uNCAwLS42LjF6bS4xIDRzLjEuMS4yLjFjLS4xLS4xLS4yLS4xLS4yLS4xem0uMy0zLjhzLjEuMS40LjFjMC0uMS0uMS0uMS0uMi0uMWgtLjJ6bS4yIDMuOXptLjMuMkg3My43aC4yYy4yIDAgLjQgMCAuNi0uMSAwIDAgMC0uMS0uMS0uMS0uMi4xLS4zLjItLjQuMnptLjEtNC4yaC0uMy4zbC4xLjFjMC0uMSAwLS4xLS4xLS4xem0tLjEuMmMuMy4yLjUuMy41LjNoLjJzLS4xIDAtLjEtLjFsLS4yLS4xYy0uMS0uMS0uMi0uMi0uNC0uMSAwLS4xIDAtLjEgMCAwem0uNiAxLjN6bS0uMS4ySDc0LjhoLS4zYy4xIDAgMCAwIDAgMHptMCAyYy4xIDAgLjEgMCAwIDAgLjEgMCAwIDAgMCAwem0uMS40Yy4xIDAgLjEgMCAuMS0uMWwtLjEuMXptLjEtMy41czAgLjEgMCAwaC4xdi0uMWwtLjEuMWMwLS4xIDAgMCAwIDB6bS4xIDIuOWMuMSAwIC4xIDAgLjEtLjFsLS4xLjF6bS4xLTIuOGMwIC4yLjEuMy4xLjMgMC0uMiAwLS4zLS4xLS4zem0uMSAyLjNoLjEtLjFjLjEtLjEgMC0uMSAwIDB6bS4xLjhsLjEtLjFjLS4xIDAtLjEgMC0uMS4xem0uMS0yLjd2LjFzLjEgMCAwLS4xem0wIDIuNWMuMSAwIC4yIDAgLjItLjEtLjEtLjEtLjIgMC0uMi4xem0uMi0uMWMuMS0uMS4xLS4xIDAgMCAuMS0uMSAwLS4xIDAgMHptLjMtLjFjMCAuMSAwIC4xLjEuMWwtLjEtLjFjLjEgMCAuMSAwIDAgMHpNODEgMzEuNGguM2MuMSAwIC40LjEuNy4yLjEgMCAuMy4xLjYuMi4xIDAgLjItLjEuNC0uNCAwIDAgLjEuMS4zLjIuMSAwIC4xLjEuMi4yLS4zLjQtLjUuNi0uNS42LS4yLjUtLjMuOC0uMy45LS4xLjEtLjMuMi0uNS4zLS4zLjMtLjUuNC0uNy40aC0uM2wtLjYtLjFoLS4xcy0uMS4yLS4yLjZoLjFjLjEgMCAuMiAwIC4zLS4xSDgxLjNjLjYgMCAxIC4xIDEuNC4yLjEgMCAuMi4xLjQuMmwuMy4yYy4yLjIuNC40LjQuNS4yLjQuMy44LjMgMSAwIC4yLS4yLjUtLjUuOGwtLjUuNGMtLjMuMi0uNi4zLTEgLjNoLS4yYy0xIDAtMS44LS4yLTIuMS0uNi0uMy0uMi0uNC0uNC0uNC0uNi0uMS0uMi0uMS0uNC0uMS0uN1YzNS44YzAgLjEuMS4yLjEuMi4xLS40LjEtLjYuMi0uNy0uMi4zLS4zLjQtLjMuNXYtLjFjMC0uMS4xLS4zLjMtLjYuMi0uMi4zLS4zLjMtLjQuMS0uNS4xLS44LjEtLjktLjItLjMtLjItLjUtLjItLjdWMzNjMC0uMSAwLS4zLjEtLjUuMS0uMS4yLS4yLjQtLjUuMi0uNC40LS42LjctLjZ6bS0xLjggNXptLjEuMnMwIC4xIDAgMHptLjItLjhjLjEgMCAuMSAwIC4xLS4yIDAgMC0uMS4xLS4xLjJ6bS4xLS41Yy4yIDAgLjIgMCAuMi0uMXYtLjFsLS4yLjJ6bTAgMS44di4xLS4xYy4xLjEuMSAwIDAgMHptLjEtLjd2LjJjMCAuMSAwIC4yLjEuMnYtLjJjMC0uMSAwLS4yLS4xLS4yem0uMS0uOGMwLS4xIDAtLjEgMCAwem0wLTIuN2MwIC4xIDAgLjIuMS4zIDAtLjItLjEtLjQtLjEtLjR2LjF6bTEuNSAyLjRsLS4xLjFIODAuM2MtLjMuMi0uNC40LS40LjVsLS4xLjFjMCAuNi4xIDEgLjIgMS4xbC4zLjNzLjIuMS41LjJjLjUuMS45LjEgMS4zLjEuNC0uMS43LS4yLjktLjQuMy0uMy40LS41LjQtLjcgMC0uMS0uMS0uMy0uMy0uNiAwLS4xLS4xLS4yLS4zLS4yLS4zLS4yLS41LS4zLS44LS4zaC0uNXYtLjFoLS4xYzAtLjEtLjEtLjEtLjEtLjF6bS0xLjQgMi4xem0wLTQuOGwuMi0uMmMtLjEgMC0uMS4xLS4yLjJ6bTAgMi45aC4xLS4xem0wLTEuOWMwIC4xLjEuMi4yLjIgMC0uMS0uMS0uMi0uMi0uMnptLjEgMS41aC4xVjM1Yy0uMSAwLS4xLjEtLjEuMXptMCAyLjJjLjEgMCAwIDAgMCAwem0uMS0zLjN2LjFzMCAuMS4xLjFsLS4xLS4yem0uMS0xYzAgLjEgMCAuMi4xLjMgMC0uMiAwLS4zLS4xLS4zem0uMS43YzAgLjEgMCAuMS4xLjF2LS4xaC0uMXptMC0uOWMuMS41LjIuNy4yLjcuMS4xLjMuMi40LjIuNCAwIC44LS4xIDEtLjMuMS0uMS4zLS4zLjMtLjQgMC0uMS4xLS4xLjEtLjJ2LS4xYzAtLjEtLjEtLjItLjItLjQtLjQtLjMtLjYtLjMtLjctLjMtLjMgMC0uNS4xLS44LjQtLjIuMS0uMy4zLS4zLjR6bS4xIDIuMmguNGwtLjEtLjFoLS4xYy0uMiAwLS4yIDAtLjIuMXptMC0yLjhjLjEgMCAuMSAwIC4yLS4xaC0uMWwtLjEuMXptLjEgMS42di4xaC4xYzAtLjEtLjEtLjEtLjEtLjF6bS4xIDEuNHptMC0zLjVjLjIgMCAuMy0uMS4zLS4xLS4xLS4xLS4yIDAtLjMuMXptMS41IDYuMWMtLjcgMC0xLjEtLjEtMS4yLS4xaC0uMmMuMS4xLjIuMS4zLjFoMWMuMyAwIC40IDAgLjUtLjEuMi0uMS40LS4xLjQtLjEtLjQuMS0uNi4xLS44LjJ6bS0xLjMtMy45YzAgLjEuMS4xLjMuMWguNGMtLjMtLjEtLjQtLjEtLjctLjF6bS4xLTIuMWwuMy0uMWgtLjFsLS4yLjF6TTgxIDM4em0uMSAwYzAgLjEgMCAuMSAwIDBoLjItLjJ6bS4zLTQuM3MwIC4xLjEuMWguMWMtLjEgMC0uMS0uMS0uMi0uMXptLjEgMWgtLjJjMCAuMS4zLjEuOS4xbC4yLjFoLjRzLS4xLS4xLS4yLS4xaC0uMmwtLjItLjFoLS43em0wLTFjLjEuMS4yIDAgLjMtLjFoLS4xcy0uMSAwLS4yLjF6bS4zIDQuM2MwIC4xIDAgLjEgMCAwbC4yLjEtLjItLjF6bTAtMi44YzAgLjEuMS4xLjQuMWwuNi4zaC4xYzAtLjEtLjItLjItLjYtLjMtLjEtLjEtLjQtLjEtLjUtLjF6bS4xLTEuNnptMCAxLjRzLjEgMCAuMi4xbC0uMi0uMXptMC0xLjRjLjEgMCAuMi0uMS4yLS4xLS4xIDAtLjIgMC0uMi4xem0uMi0uM2MuMiAwIC4yLS4xLjMtLjQtLjIuMy0uMy40LS4zLjR6bS4yIDQuN2MuMSAwIC4yIDAgLjItLjFsLS4yLjF6bS4xLTUuOWMwIC4xIDAgLjIuMS4yIDAtLjEgMC0uMS0uMS0uMnptLjEgMS4yYzAgLjEgMCAwIDAgMHptMCA0LjhjLjEgMCAuMi0uMS41LS4yLS4zIDAtLjUuMS0uNS4yem0uMi0zLjF6bS4xLjFzLjEuMS4yLjFjMCAwIDAtLjEtLjItLjF6bS4xLTIuOWMuMS0uMS4yLS4xLjMtLjItLjEgMC0uMi4xLS4zLjJ6bS4xLS41czAgLjEgMCAwem0uMSAzLjlzMCAuMS4yLjRjMC0uMy0uMS0uNC0uMi0uNHptLjEtLjNsLjMuM2MtLjEtLjItLjItLjMtLjMtLjN6bS4xIDEuOWMuMiAwIC4yLS4xLjItLjJ2LS4xYy0uMi4xLS4yLjItLjIuM3ptLjQtLjl6bS4xLjN2LjFjMC0uMS4xLS4yLjEtLjMgMCAwLS4xLjEtLjEuMnptLjEtLjN6TTg0LjYgMzEuNWMuMSAwIC4xLjEuMi4xbC4xLS4xYy44IDAgMS4yIDAgMS4yLjF2LjJjLjEuMS4xLjIuMS4zdi4xYy0uMSAxLS4xIDEuNy0uMSAyLjN2LjJoLjFjLjMgMCAuNSAwIC41LjF2LjJjLjEuMS4xLjQuMS43di40aC0xLjNjLS43IDAtMS0uMS0xLS4yczAtLjEtLjEtLjJjMCAwIDAtLjEuMS0uMWguN2MtLjUgMC0uOC0uMS0uOC0uMXYtLjRjMC0uMS4yLS4xLjctLjEuMSAwIC4xLS4xLjEtLjRsLjEtMi4zaC0uMmMtLjQgMC0uNSAwLS41LS4xVjMyczAtLjEtLjEtLjFjMC0uMSAwLS4yLjEtLjR6bS4xIDMuOGMwIC4xLjIuMS41LjFoLjJjLS4zLS4xLS42LS4xLS43LS4xem0wLTMuNmguM2MtLjItLjEtLjMgMC0uMyAwem0uMi4xaC0uMmMwIC4xLjEuMS4yIDBsLjQuMWguMWMwLS4xLS4yLS4xLS41LS4xem0uNi0yaC4zYy4yIDAgLjQuMS41LjNsLjEuM2MwIC4xLS4xLjMtLjIuNC0uMS4xLS4yLjEtLjQuMS0uNCAwLS42LS4xLS43LS4yLS4xIDAtLjEtLjItLjEtLjQuMS0uMy4zLS41LjUtLjV6bS0uMi4yYy4yIDAgLjMgMCAuMy0uMS0uMi4xLS4zLjEtLjMuMXptLjEgMy4xVjM0LjN2LS4ycy4xLS4xLjEtLjR2LS4ycy4xIDAgLjEtLjF2LS4ycy4xLS4zLjEtMWMwIDAgMC0uMS0uMS0uMS0uMi4yLS4yLjUtLjIgMXptLjIgMi41aC0uMi40LS4yem0tLjEtNS4zYy4xIDAgLjIgMCAuMi0uMWwtLjIuMWMwLS4xIDAtLjEgMCAwem0wIDUuMWguMS0uMWMwLS4xIDAtLjEgMCAwem0uMS0uNnptMC0uMmMwIC4xLjEuMSAwIDBsLjEtLjFjLS4xIDAtLjEuMS0uMS4xem0uMS0yLjhjLS4xIDAgMCAuMSAwIDBsLjEuMXYuMWwuMS0uMXYtLjFoLS4yem0tLjEuNXYuMWwtLjEuMmMwIC4xIDAgLjEuMS4xdi0uMmMwLS4yIDAtLjMuMS0uM2gtLjFjLjEgMCAwIDAgMCAuMXptLjIgMS41Yy0uMS4yLS4xLjQtLjEuNSAwIDAgLjEtLjEuMS0uNHYtLjF6bS0uMS0zLjFoLjEtLjF6bS4xIDEuN3YuMS0uMWMuMSAwIDAgMCAwIDB6bS4xLTEuOWguMS0uMXptMCAxLjF6bS4yLTEuNHptLjIgNS4xaC0uMWMwIC4xLjEuMS4yLjFsLS4xLS4xYy4xLjEuMS4xLjEgMGgtLjFjLjEgMCAuMSAwIDAgMHptMC0uM3MuMS4xLjIuMWMwLS4xLS4xLS4xLS4yLS4xem0wIC42em0uMi4zek04Ny44IDMxLjZjLjQuMS43LjEuNy4ydi4ybC4xLjFjLS4xLjEtLjEuMS0uMS4yaC4xbC0uMS4xaC0uMWMtLjEgMC0uMS0uMS0uMS0uMS0uMyAwLS4zLjMtLjEuOC4yLjYuMyAxIC40IDEuMS4zLjguNiAxLjEuNyAxLjIgMCAwIC4xLS4xLjItLjQuMi0uNC40LS44LjUtMS4xLjEtLjIuMS0uMy4xLS40di0uMWMuNC0uNy40LTEuMSAwLTFIOTBjMC0uNSAwLS44LjItLjguMS0uMS41LS4xIDEuMS0uMS4zIDAgLjQuMS40LjMuMS4xLjEuMi4xLjItLjEuMS0uMS4yLS4xLjNsLS4zLjEtLjMuNmMwIC4xLS4yLjUtLjYgMS4ybC0uMi43Yy0uNC43LS41IDEuMS0uNSAxLjF2LjJjMCAuMS0uMS4xLS4yLjJsLS4yLjFjLS4xIDAtLjIgMC0uMy0uMWwtLjQtLjZjLS4xLS4zLS4xLS40LS4yLS40IDAgMC0uMS0uMi0uMS0uNC0uMS0uMi0uMi0uNC0uMy0uNXYtLjFMODggMzRjLS4xLS4zLS4yLS41LS4yLS41LS4yLS42LS4zLS44LS40LS44bC0uMS4xYy0uMSAwLS4yIDAtLjQtLjFsLS4xLS4xYy4xIDAgLjItLjEuMi0uMWwtLjQtLjUuMS0uMXMwLS4xLS4xLS4xYy43LS4xIDEuMS0uMiAxLjItLjJ6bS0uOS44aC4xLS4xem0uMi0uNGMuMS4xLjEgMCAuMSAwaC0uMXptLjMuNnMwIC4xIDAgMGMuMSAwIDAgMCAwIDB6bS4xLS44aC41Yy0uMSAwLS4yLS4xLS4zLS4xbC0uMi4xYzAtLjEgMC0uMSAwIDB6bS4zIDEuNXYuMS0uMXptLjYuOWMwIC4zLjEuNC4yLjRsLS4yLS40em0uMyAxLjJjMCAuMSAwIC4xLjEuMiAwLS4xIDAtLjEtLjEtLjJ6bS4yLjV6bTAtLjVjMCAuMSAwIC4xLjEuMiAwLS4xIDAtLjEtLjEtLjJ6bS4xLjNjMCAuMS4xLjIuMi4yLS4xLS4yLS4yLS4yLS4yLS4yem0uMi0uMWMwIC4xLjEuMi4xLjIuMS0uMS4xLS4yLjEtLjIgMC0uMS0uMSAwLS4yIDB6bS40LjFsLS4zLjRjLjIgMCAuMy0uMS4zLS40IDAgLjEgMCAwIDAgMHptLjItMWMtLjIuNC0uNC42LS40LjcuMi0uMy4zLS41LjMtLjYuMSAwIC4xLS4xLjEtLjF6bS0uMi45cy4yLS4zLjQtLjh2LS4xYy0uMSAwLS4yLjItLjMuNSAwIC4yLS4xLjMtLjEuNHptLjUtMy43YzAgLjEgMCAuMi4xLjJsLS4xLS4yem0wLS4yYzAgLjEuNCAwIDEuMSAwaC0uMWMtLjQtLjEtLjctLjEtMSAwem0uMSAyLjNjMC0uMSAwLS4xIDAgMHptLjEtLjF6bTAtMmMuMS4xLjEuMSAwIDB6bTAgMS45Yy4xLS4xLjEtLjEuMS0uMiAwIDAtLjEgMC0uMS4yem0uMi0uNGMuMSAwIC4xLS4xLjEtLjEtLjEgMC0uMSAwLS4xLjF6bS4xLS40Yy4xIDAgLjEgMCAuMS0uMXMwIDAtLjEuMXptLjIuMXptMC0uM2MuMS4xLjEgMCAuMS0uMWguMXYtLjFjMC0uMSAwLS4xLS4xLS4xIDAtLjIgMCAwLS4xLjN6bS41LS44aC4yLS4yek05My44IDMxLjZjLjIgMCAuNS4xLjkuMy4zLjIuNC40LjQuNS4yLjUuNC44LjQuOXYuMWMtLjEuMi0uMS4zLS4xLjRIOTQuM2MtLjgtLjEtMS40LS4xLTEuOC0uMWgtLjJjLS4xLjEtLjEuMi0uMS4yIDAgLjEuMS4yLjEuMyAwIC4yIDAgLjQuMS40aC0uMWwuMS4xYzAgLjEuMS4yLjIuMy4yLjMuNC42LjYuNi4yLjEuNC4xLjcuMSAwIDAgLjEgMCAuMy0uMS4xIDAgLjMtLjIuNy0uNmgtLjFjLjEtLjMuMy0uNC41LS41LjEuMS4yLjEuMy4yLjEuMi4zLjQuNS43LS4yLjItLjMuNC0uNC40IDAtLjEtLjEtLjItLjItLjIgMCAwLS4yLjEtLjQuMy0uMS4xLS40LjItLjcuMy0uNC4xLS43LjEtLjguMWwtLjYtLjFjLS4zIDAtLjUtLjItLjgtLjUtLjEtLjEtLjItLjItLjItLjQgMCAwLS4xLS4zLS4yLS43IDAtLjItLjEtLjMtLjEtLjUgMC0uOC4yLTEuNS43LTIuMS4xLS4xLjItLjMuNC0uMy4xIDAgLjMtLjEuNS0uMWguNXptLTIgMi4zdi4yYzAgLjEgMCAuMi4xLjMgMC0uMyAwLS41LS4xLS41em0uMi0uOHMtLjEuMi0uMS40YzAtLjEgMC0uMi4xLS40em0tLjEuNHYuMS0uMXptLjEgMS4xem0uMS4yYzAgLjEgMCAuMi4xLjIgMC0uMS0uMS0uMi0uMS0uMnptLjItMS4yaC4yLS4yem0wLTEuMXptMCAuNmguMS0uMWMuMSAwIC4xIDAgMCAwem0uMS0uMmMwIC4xLjUuMiAxLjYuMmguMmMuMi4xLjQuMS41LjFoLjFjMC0uMS4xLS4xLjEtLjFWMzNjMC0uMS0uMS0uMi0uNC0uNS0uMS0uMS0uMy0uMi0uNS0uMmwtLjMtLjFjLS41LjEtLjguMi0xIC40bC0uMy4zem0wLS4xYy4xIDAgLjEtLjEgMCAwIDAtLjEgMC0uMSAwIDB6bS4xIDNjMCAuMSAwIC4xLjEuMSAwLS4xLS4xLS4xLS4xLS4xem0wLTMuNGguMS0uMWMuMS0uMSAwLS4xIDAgMHptLjEgMS4yem0uMS0xLjZjLjIgMCAuMiAwIC4yLS4xdi0uMWMtLjIgMC0uMi4xLS4yLjJ6bS4xIDEuNWMuMSAwIC40LjEuOS4xaC0uMkg5NC4xcy0uNC0uMS0xLjMtLjF6bS4xLS4zYy4xLjEuMy4xLjYuMWguMmMtLjMtLjEtLjUtLjEtLjgtLjF6bTAtLjljLjEgMCAuMi0uMS40LS4xaC0uMWMtLjIgMC0uMyAwLS4zLjF6bS4xLS41Yy4xIDAgLjMgMCAuNS0uMWguMWMtLjItLjEtLjQgMC0uNi4xem0uMSA0cy4xLjEuMi4xYy0uMS0uMS0uMi0uMS0uMi0uMXptLjMtMy44cy4xLjEuNC4xYzAtLjEtLjEtLjEtLjItLjFoLS4yem0uMiAzLjl6bS4zLjJIOTMuNmguMmMuMiAwIC40IDAgLjYtLjEgMCAwIDAtLjEtLjEtLjEtLjIuMS0uMy4yLS40LjJ6bS4xLTQuMmgtLjMuM2wuMS4xYzAtLjEgMC0uMS0uMS0uMXptLS4xLjJjLjMuMi41LjMuNS4zaC4ycy0uMSAwLS4xLS4xbC0uMi0uMWMtLjEtLjEtLjEtLjItLjQtLjEgMC0uMSAwLS4xIDAgMHptLjYgMS4zem0wIC4ySDk0LjhoLS4zem0wIDJ6bTAgLjRjLjEgMCAuMSAwIC4xLS4xbC0uMS4xem0uMS0zLjVzMCAuMSAwIDBoLjF2LS4xbC0uMS4xYzAtLjEgMCAwIDAgMHptLjEgMi45Yy4xIDAgLjEgMCAuMS0uMWwtLjEuMXptLjEtMi44YzAgLjIuMS4zLjEuMy4xLS4yIDAtLjMtLjEtLjN6bS4xIDIuM2guMS0uMWMuMS0uMSAwLS4xIDAgMHptLjEuOGwuMS0uMWMtLjEgMC0uMSAwLS4xLjF6bS4xLTIuN3YuMWMuMSAwIC4xIDAgMC0uMXptMCAyLjVjLjEgMCAuMiAwIC4yLS4xLS4xLS4xLS4xIDAtLjIuMXptLjItLjFjLjEtLjEuMS0uMSAwIDAgLjEtLjEgMC0uMSAwIDB6bS40LS4xYzAgLjEgMCAuMS4xLjFsLS4xLS4xek0xMDAuMSAzMS4zaDEuMWMuMSAwIC4zIDAgLjYuMS4zLjMuNS42LjYuOC4xLjEuMi40LjMuOC4xLjEuMS4zLjEuNnYxLjFjMCAuMi4xLjQuMy43LjIuMi4zLjMuNC4zIDAgLjEtLjEuMi0uMy4zLS4yLjItLjIuMi0uMy4yLS4xIDAtLjMtLjItLjctLjUtLjcuMy0xIC40LTEgLjQtLjIuMS0uNS4xLS44LjEtLjMtLjEtLjYtLjItLjgtLjQgMCAwLS4xLS4yLS4zLS40LS4xLS4xLS4yLS4zLS4yLS41di0uM2MwLS4yIDAtLjMuMS0uNXMuMi0uNS40LS43Yy4xLS4xLjItLjIuMy0uMi4zLS4yLjYtLjIuOS0uMmguNWMuMiAwIC40IDAgLjUuMWguMWMtLjEtLjMtLjItLjUtLjMtLjgtLjEtLjItLjQtLjMtLjctLjNsLS40LS4xYy0uMy4xLS41LjEtLjUuMi0uMS4yLS4yLjQtLjIuNmgtLjRsLS4xLjFjLS4yIDAtLjItLjEtLjItLjFzMC0uMi4xLS42Yy4xLS4zLjMtLjUuNy0uNy4xLS4xLjItLjEuMi0uMXptLS42IDEuMnYuMS0uMXptLjEtLjdjLjEgMCAuMSAwIC4yLS4xIDAtLjEtLjEgMC0uMi4xem0uMSAzLjV6bTAgLjVjMCAuMS4xLjIuNC4yLjEgMCAuMi4xLjQuMSAwIDAtLjEtLjEtLjMtLjEtLjIgMC0uMy0uMS0uNS0uMnptLjItMi4zYzAgLjEgMCAuMSAwIDB6bS0uMS45YzAgLjQuMS41LjEuNWwuMS4xaC0uMWMuMS4yLjMuMy43LjQgMCAwIC4xIDAgLjIuMS4xIDAgLjUtLjIgMS4yLS41bC4xLS4xYy0uMS0uMi0uMS0uNS0uMS0uOCAwLS4xLS4xLS4xLS4yLS4yLS40LS4xLS43LS4yLS45LS4yLS40LjEtLjguMi0uOS40LS4xLjEtLjIuMi0uMi4zem0uNi0yLjljMCAuMSAwIC4xIDAgMCAuMS4xLjIgMCAuMyAwaC0uM3ptLjMgNC4yczAgLjEgMCAwYy4xLjEuMSAwIC4xIDBoLS4xem0uMS0zLjlsLjEuMS0uMS0uMXptLjMtLjR6bS4zIDQuMmMuMSAwIC4yIDAgLjQtLjEtLjMgMC0uNCAwLS40LjF6bS40LTQuMWMwIC4xLjEuMS4xLjEgMC0uMS0uMS0uMS0uMS0uMXptLjQgM3ptMC0uM3ptLjMtLjR6bTAgLjJ6bTAtLjV2LjJjLjEtLjEuMS0uMiAwLS4yem0uMS43di4zLS4zem0uMSAxLjN2LjEtLjF6bTAtMi4zczAgLjEgMCAwem0uMiAyLjR6bS4xLS4zYzAgLjEgMCAuMi4xLjItLjEtLjEtLjEtLjItLjEtLjJ6TTEwOC45IDMwLjFjLjIgMCAuNS4xLjkuMmwuMS4xaC4xbC40LjVjLjEuMS4xLjIuMS4zLjEuMi4xLjMuMS41cy0uMS4yLS4zLjJjLS4xIDAtLjEgMC0uMy0uMWwtLjEuMXMtLjEtLjEtLjEtLjNjLS4yLS41LS4zLS43LS4zLS43LS4xIDAtLjMtLjEtLjUtLjFsLS43LjJjLS4yLjEtLjIuMi0uMi4yIDAgLjggMCAxLjIuMSAxLjIuMS4xLjQuMS44LjEuMSAwIC4xIDAgLjEuMS4xLjEuMi4yLjIuMyAwIC4yLS4yLjQtLjUuNC0uMSAwLS4yIDAtLjMtLjFoLS4xYy0uMSAwLS4yIDAtLjIuMXYyLjJzLjIuMS41LjEuNSAwIC42LjFjMCAwLS4xLjItLjEuNWwtLjQtLjFoLS4xYy0uNC0uMS0uNy0uMS0xLS4xaC0uN1YzNS4zczAtLjEuMS0uMS4yIDAgLjMuMWguMWMuMSAwIC4xIDAgLjEtLjEtLjEtLjEtLjEtLjMtLjEtLjYgMC0uMS0uMS0uMy0uMS0uNCAwLS4xIDAtLjUuMS0xLjFoLS4yYy0uMi4xLS41LjEtLjYuMWgtLjFjMC0uNS4xLS44LjEtLjhoLjFjLjUgMCAuNyAwIC43LS4xVjMxLjFsLS4xLS4yYy4xLS4xLjItLjMuMi0uM2wuNC0uNGMuMy0uMS42LS4xLjktLjF6bS0yLjEgMi41aC4xLS4xYzAtLjEgMC0uMSAwIDB6bTAgLjRjMCAuMS0uMS4xLS4xLjFoLjFjLjEgMCAuMS0uMSAwLS4xem0uMyAyLjhjMCAuMS4xLjEuMy4xIDAgMC0uMS0uMS0uMy0uMXptLjEtMy4ydi4xcy4xIDAgLjItLjFjMCAuMS0uMSAwLS4yIDB6bTAgMi45YzAgLjEgMCAuMS4xLjFoLjFjLS4xLS4xLS4yLS4xLS4yLS4xem0wLTIuNmMuMSAwIC4xIDAgMCAwem0uMi4xaC4xLS4xem0uMiAyLjhsLjEuMWguMWMtLjEgMC0uMS0uMS0uMi0uMXptLjEtMS44di4yYzAgLjIgMCAuMy4xLjMgMCAwIDAtLjEuMS0uMyAwLS4yLS4xLS4yLS4yLS4yem0uMS0uN1YzMy42IDMzLjN6bTAgMS45di4zVjM1LjJ6bTAtLjN6bTAtMi4xem0uMSAxLjF6bTAtLjJ6bTAtLjJ6bS4yIDIuNGgtLjFjLS4xLjEgMCAuMS4xIDBsLjIuMWMwLS4xLS4xLS4xLS4yLS4xem0uMS01LjVjLjIgMCAuNCAwIC41LS4xLS4yIDAtLjMgMC0uNS4xem0uMSAyLjNjMCAuMSAwIC4xIDAgMGwuMS4xYzAtLjEtLjEtLjEtLjEtLjF6bS40LjF6bTAgLjJjLjIgMCAuMy0uMS4zLS4xaC0uMWMtLjEgMC0uMi4xLS4yLjF6bTAgMi43aC4zLS4zYy4xIDAgMCAwIDAgMHptLjEtNXptLjEgNS4ydi4xLS4xem0uMS01LjVjLS4xLjEtLjEuMSAwIDBsLjEuMWMwLS4xIDAtLjEtLjEtLjF6bS42IDBjLjEuMS4yLjIuMy4ydi0uMWMtLjEtLjEtLjItLjEtLjMtLjF6bS4yLjdjMCAuMSAwIC4yLjEuMnYtLjFsLS4xLS4xem0uMi41bC4xLS4xYy0uMSAwLS4xLjEtLjEuMXpNMTEyLjQgMzEuOWwuMi4xaC4xbC45LjZjLjMuMy40LjUuNC42IDAtLjEtLjEtLjEtLjEtLjEgMCAuMS4xLjIuMi4zdi0uMXMwIC4xLjEuM2wuMS4ydi40YzAgLjEtLjEuMy0uMS42IDAgLjEtLjMuNS0uOCAxLjMtLjIuMi0uNS4zLS43LjNIMTExLjhjLS4xIDAtLjQtLjEtLjgtLjMtLjUtLjUtLjgtLjgtLjgtMS4xLS4xLS4yLS4xLS4zLS4yLS40IDAtLjEuMS0uMy4yLS44IDAtLjMuMS0uNS4yLS42LjMtLjYuNi0xIDEtMS4yLjUtLjEuOC0uMSAxLS4xem0tMi4yIDIuNnYuMS0uMXptLjIuNGMwIC4zIDAgLjQuMS40IDAtLjMgMC0uNC0uMS0uNHptLjEtMS40YzAtLjEgMCAwIDAgMHptLjItLjN6bTAgMS4xem0uMSAxLjJ2LjEtLjF6bS4xLS45bC4zLjZjMCAuMS4xLjEuMy4yLjEuMS4zLjIuNi4zaC4yYy4zLS4xLjUtLjEuNi0uMmwuMy0uM2MuMy0uNC41LS42LjUtLjl2LS4xYzAtLjEtLjEtLjItLjEtLjV2LS40bC0uMy0uM2MtLjItLjItLjMtLjQtLjUtLjRoLS4xYy0uNyAwLTEgLjEtMSAuMi0uMi4yLS4zLjMtLjMuNC0uMi4yLS4zLjMtLjMuNC0uMi40LS4yLjctLjIgMXptLjEgMS4yYzAgLjEuMi4xLjQuMWguMWMtLjEgMC0uMy0uMS0uNS0uMXptMC0yLjZjLjEgMCAuMS0uMS4xLS4xbC0uMS4xem0uMS0uN2MwIC4xLjIgMCAuNS0uM2guMmMuNCAwIC42LS4xLjYtLjFoLS4xYy0uNSAwLS44LjEtMS4yLjR6bS4xLjJjLjEgMCAuMSAwIC4xLS4xIDAgMC0uMSAwLS4xLjF6bTAgLjN6bS4yIDNoLjEtLjF6bS4yLS4xYzAgLjEuMS4xLjIuMS0uMS0uMS0uMi0uMS0uMi0uMXptLjItMy41Yy41IDAgLjcgMCAuNy0uMWgtLjFjLS4zIDAtLjUgMC0uNi4xem0wIC4zaC4xbC42LS4xaC0uMmMtLjMgMC0uNSAwLS41LjF6bS42IDMuNGwuMS4xaC4xbC0uMS0uMWgtLjFjLjEtLjEgMCAwIDAgMHptLjItNGMwIC4xLjEuMS4yLjFoLjFjMC0uMS0uMS0uMS0uMi0uMS0uMS0uMS0uMS0uMS0uMSAwem0wIC4zem0uMSAwYy4xLjEuMi4xLjIuMSAwLS4xLS4xLS4xLS4yLS4xem0uMiAzLjhjLjEgMCAuMi0uMS4yLS4xLS4yIDAtLjIgMC0uMi4xem0uMS0zLjRjMCAuMS4xLjEuMS4xIDAtLjEgMC0uMi0uMS0uMSAwLS4xIDAtLjEgMCAwem0uMi0uNWMwIC4xLjEuMS4yLjEtLjEtLjEtLjEtLjEtLjItLjF6bS4xLjNjMCAuMS4xLjIuMi4yczAtLjEtLjItLjJ6bS4yLjNjMCAuMS4xLjEuMi4yIDAtLjEtLjEtLjItLjItLjJ6bS40IDIuMnMuMSAwIC4xLS4xYy0uMS0uMS0uMSAwLS4xLjF6bS4xLS4yYy4xIDAgLjEtLjEgMCAwdi0uMi4yem0uMS0uNXYuM2MwLS4xIDAtLjEuMS0uMmwtLjEtLjFjMC0uMSAwIDAgMCAwem0uMS0uNnpNMTE3LjkgMzEuOWMuMiAwIC40LjIuNi41IDAgMCAuMSAwIC4xLjFsLjEuN2MwIC4xLS4yLjEtLjUuMWgtLjFjLS4yIDAtLjMtLjEtLjMtLjJzLS4xLS4yLS4yLS4zaC0uNGMtLjIgMC0uNS4xLS44LjItLjIuMi0uNC40LS40LjUgMCAxIC4xIDEuNiAwIDEuOSAwIC4xIDAgLjEuMS4xaC4yYy4xIDAgLjEgMCAuMS4xdi42bC0uMS4xaC0uNGwtLjIuMWMtLjcgMC0xLS4xLTEtLjEtLjEgMC0uMi0uMS0uMi0uMnYtLjNjMC0uMS4xLS4yLjMtLjIgMCAwIC4xLS4xLjItLjFsLS4xLTIuNGMwLS4xIDAtLjItLjEtLjJoLjJjLS4xIDAtLjIgMC0uNC4xaC4xYy0uMSAwLS4xLS4yLS4xLS41di0uMmMuMi0uMi41LS4zLjctLjNoLjJjLjEgMCAuMiAwIC40LjEtLjEuMS0uMS4xLS4xLjJ2LjFjLjYtLjUgMS4yLS41IDIuMS0uNXptLTMuMSAzLjl6bTAtMy43bC4xLjF2LS4xaC0uMXptLjIgMy44aC0uMS43Yy0uMS4xLS4zIDAtLjYgMHptMC0zLjRoLjEtLjFjMC0uMSAwLS4xIDAgMHptMCAzLjNoLjUtLjV6bS4yLTMuOWwuMS4xLS4xLS4xem0uNCAxLjR2MXMwLS4zLjEtLjhWMzMuMmMtLjEgMC0uMSAwLS4xLjF6bS4xLS41bC0uMS4yczAgLjEuMS4xVjMyLjh6bTAgMy4xaC4yYy0uMS0uMS0uMi0uMS0uMiAwem0uMS0zLjh6bTAtLjJ6bTAgM3ptMCAuMnptLjItMi42em0uNi0uMmMuMSAwIC4xLS4xLjItLjItLjIgMC0uMy4xLS4yLjJ6bS4zLS4ydi4yaC4xdi0uMmgtLjF6bS4zLS4xaC0uMS4xYy4xLjEuMS4xIDAgMHptLjIgMHptLjIuMXptLjEuNWMuMSAwIC4xLS4xLjItLjItLjEgMC0uMi4xLS4yLjIgMC0uMSAwIDAgMCAwem0uMi4yYy4xIDAgMCAwIDAgMHptLjEtLjh6bS4yLjRjLjEgMCAuMSAwIDAgMGwuMS4xYzAtLjEgMC0uMS0uMS0uMXpNMTE4LjkgMjkuNGguMWMuNS4xLjguMS45LjIgMCAwIC4xLjEuMS4zdi4xYy4xLjEuMS40LjEgMS4xIDAgMS4yIDAgMS45LjEgMi4zLjMtLjMuOC0uNiAxLjUtMS4xLjEgMCAuMS0uMy4xLS44IDAtLjEuMS0uMi4yLS4yaC40Yy41IDAgLjguMSAxIC4yLS4xIDAtLjItLjEtLjItLjFzLjEuMS4zLjFjMCAwIC4xLjEuMS40IDAgLjEgMCAuMi0uMS4yIDAgMC0uMSAwLS4xLjFoLS4yYzAgLjEtLjEuMS0uMi4ydi4xbC0uOC42LjkgMS44Yy4xLjIuMS4zLjIuNGgtLjFsLS4xLS4xYzAgLjEuMS4xLjMuMS40IDAgLjYgMCAuNi4xbC0uMS4xYy4xLjEuMS4zLjEuNiAwIC4xIDAgLjEtLjEuMUgxMjIuN2MtLjEgMC0uMS0uMS0uMi0uMyAwLS4zLS4xLS42LS4yLS44LS4xLS4zLS4zLS43LS42LTEuMi0uMS0uMy0uMi0uNC0uMi0uNC0uMSAwLS4zLjEtLjUuMy0uMS4xLS4xLjEtLjIuMWgtLjJzLS4xLjEtLjEuMnYuMWwtLjEuMXYuOWMwIC4xLjEuMS40LjEgMCAwIC4xLjEuMy4xdi40bC0uMS4xaC0uMXMwIC4xLjEuMWgtLjFsLS40LS4xYy0uNiAwLS45LS4xLTEuMS0uMWgtLjFjLS4xIDAtLjEtLjEtLjEtLjN2LS4xYzAtLjEgMC0uMi4xLS4ydi4xSDExOS42bC0uMS0uMWguMUgxMTkuM3MuMS0uMS40LS4xYy4xIDAgLjIgMCAuMy0uMWgtLjFzLS4xLS4zLS4xLS44YzAtLjYtLjEtMS0uMi0xLjMgMC0xLjUtLjEtMi4zLS4xLTIuNiAwIDAtLjEgMC0uMy0uMWwtLjMuMWMtLjEtLjEtLjEtLjEtLjEtLjJ2LS42aC4xczAtLjEtLjEtLjFjLjEuMS4xLjEuMSAwem0uMy42czAgLjEuMS4xYy0uMSAwLS4yIDAtLjIuMWguMWMuMSAwIC4yLS4xLjItLjJoLS4yem0uMiA1LjhoLjgtLjh6bS4zLjFsLjkuMWMwLS4xLS4yLS4xLS41LS4xaC0uNHptMC02YzAgLjEuMS4xLjEuMXMuMS0uMS4xLS4yYy0uMSAwLS4yLjEtLjIuMXptLjIuOXYuNC0uNHptMCAxLjN6bS4xIDMuNnptLjEtMi4xem0wIC44di4xLS4xbC4xLS4xYy0uMSAwLS4xIDAtLjEuMXptMC0uNGMwIC4xIDAgLjEgMCAwIC4xLS4xLjEtLjEuMS0uMi0uMSAwLS4xLjEtLjEuMnptMCAxLjJjMCAuMS4xIDAgMCAwIC4xIDAgMC0uMSAwIDB6bTAtLjV2LjEtLjF6bS4yLTEuMWMuMSAwIC4yIDAgLjItLjEgMCAwLS4xIDAtLjIuMXptMCAyLjF6bS4xLjJsLjEuMWguMWMwLS4xLS4xLS4xLS4yLS4xem0uMi0uMmMwIC4xLjEuMS4yLjEgMC0uMS0uMS0uMS0uMS0uMWgtLjFjLjEtLjEgMCAwIDAgMHptLjEtMS45Yy4xIDAgLjItLjEuMy0uMi0uMi4xLS4zLjEtLjMuMnptMCAyLjNjLjEgMCAuMSAwIDAgMHptLjItLjV6bS41LTIuMWMwIC4xLjEuMi4xLjIgMC0uMSAwLS4yLS4xLS4yem0uMy41YzAgLjIuMS41LjMuNyAwLS4xLS4xLS4zLS4zLS43em0uMS0xLjFjLjIgMCAuNS0uMi44LS41LS4yLjEtLjUuMy0uOC41em0wLS40cy4xIDAgLjMtLjFjLjEgMCAuMSAwIC4xLS4xaC0uMXMtLjEuMS0uMy4yem0uMS0uNGguMS0uMWMuMSAwIDAgMCAwIDB6bS4xLS4ydi4xaC4xbC0uMS0uMS4xLS4yYy0uMS4xLS4xLjEtLjEuMnptLjEgM2MwIC4yLjEuMy4xLjMuMS0uMSAwLS4yLS4xLS4zem0uMS0zLjV6bTAgMi45em0uMiAxLjFoLjEtLjFjLjEgMCAwIDAgMCAwem0uNC0zLjRoLjQtLjR6bS4xIDQuMmguNC0uNHptLjEtLjR6bS4yIDB6bS4zLS4xem0wIC4zdi4xYy4xIDAgLjEgMCAwLS4xIDAtLjEgMC0uMSAwIDB6TTEyNC44IDM0LjhjLjIgMCAuMy4xLjQuMVYzNS4yYzAgLjItLjEuNS0uNC43aC0uMWMtLjEgMC0uMi0uMi0uMy0uNSAwLS4zIDAtLjQuMS0uNS4xIDAgLjItLjEuMy0uMXptLS4zLjRjMCAuMiAwIC4yLjEuMiAwIDAgMC0uMS4xLS4zVjM1Yy0uMi4xLS4yLjEtLjIuMnptLjMuNGgtLjNzMCAuMS4xLjFoLjFsLjEtLjF6bS0uMS0uM3YuMXMuMS0uMS4xLS4ydi0uMWMtLjEgMC0uMS4xLS4xLjJ6bS4zLjFjMC0uMSAwLS4xIDAgMHoiLz48L2c+PC9zdmc+) no-repeat'});
				$( ".page-template-template-home-page-php #give-a-fork" ).slideUp( 600 ,function(){enable_scroll();});
			} else {
				jQuery('#sticky_navigation').stop(true).animate({'min-height':'150px'}, 100);
				jQuery('#sticky_navigation').css({ 'position': 'fixed' });
				jQuery('.page-template-template-home-page-php #sup-logo').css({'background':'url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjEyOXB4IiBoZWlnaHQ9IjQwcHgiIHZpZXdCb3g9IjAgMCAxMjkgNDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEyOSA0MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTY4LjgsMjAuNWMwLDQuNiw0LjEwMSw4LjQsOS4yLDguNHM5LjItMy44MDEsOS4yLTguNGMwLjEtNC42LTQuMTAxLTguMy05LjItOC4zUzY4LjgsMTUuOSw2OC44LDIwLjV6IE03OCwxMy45YzMuOCwwLDUuNSwzLDUuNSw2LjZjMC4xLDMuNy0xLjcsNi42LTUuNSw2LjZjLTMuNywwLTUuNS0zLTUuNS02LjZDNzIuNSwxNi45LDc0LjMsMTMuOSw3OCwxMy45eiIvPjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik05MC40LDcuNHYxNC40YzAsNC42MDEtMC41LDUuMy0zLjYwMSw1LjN2MWgxMC40di0xQzk0LjIsMjcuMiw5My42LDI2LjQsOTMuNiwyMS44VjBsLTYuOCwxLjF2MSBDODkuOSwyLjEsOTAuNCwyLjksOTAuNCw3LjR6Ii8+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTEwOS4xLDI3LjFjLTMsMC0zLjYtMC44LTMuNi01LjNWMjFjMC4xLTAuMSwwLjEtMC4yLDAuMi0wLjJsMC4yLTAuMmw3LjUsNy40aDUuMXYtMSBjLTAuNiwwLjItMS45LTAuMi0yLjctMC45bC03LjYtNy43YzEuMy0xLjIsMi4yLTEuOSwzLjItMi41YzIuMy0xLjYsMy44OTksMS41LDUuNiwwLjFjMC44LTAuNiwwLjctMS41LDAuMi0yLjIgYy0wLjktMS4yLTMuMy0xLjYtNS44LDAuMWMtMS44MDEsMS4yLTMuMiwyLjMtNS45LDQuOVYwbC02LjgsMS4xdjFjMy4xLDAsMy42LDAuOCwzLjYsNS4zdjE0LjRjMCw0LjYwMS0wLjUsNS4zLTMuNiw1LjN2MUgxMDkuMSBWMjcuMXoiLz48cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNTcuMSwyNy4ydjFoMTAuNHYtMWMtMy4xLDAtMy42LTAuOC0zLjYtNS4zdi03LjNoNC42VjEzSDY0VjguNmMwLTUuMiwxLjEtNy4xLDMuNC03LjEgQzcwLjMsMS41LDY5LDUsNzEuMyw1YzEsMCwxLjUtMC43LDEuNS0xLjZjMC0xLjUtMS42LTMuNC00LjYtMy40Yy0zLjcsMC03LjUsMi40LTcuNSw4LjZWMTNINTd2MS42aDMuN3Y3LjMgQzYwLjcsMjYuNSw2MC4xLDI3LjIsNTcuMSwyNy4yeiIvPjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik01Mi4xLDIxLjhWMTljMC0zLjktMS44LTYuOC01LjktNi44Yy0yLjksMC01LDEuNi02LjIsMy4xdi0yLjRjMC02LjUtMi45LTEwLTcuNS0xMGMtNC4xLDAtNy4zLDIuMS03LjMsNCBjMCwxLjEsMSwxLjksMi4xLDEuOWMxLjEsMCwxLjYtMC43LDIuMS0xLjZjMC44LTEuNSwyLjEtMi42LDMuOC0yLjZjMy40LDAsNC40LDIuNyw0LjQsNC45YzAsMS43LTAuNSwyLjgtMi4zLDMuNEwzMywxMy4zdjEgYzMsMCwzLjYsMC43LDMuNiw1LjN2Mi4zYzAsNC42LTAuNiw1LjMtMy42LDUuM3YxaDEwdi0xYy0yLjgsMC0zLjItMC42MDEtMy4yLTUuM3YtM2MwLTIuNSwyLjctNC42LDUuMi00LjZjMi43LDAsMy44LDEuOSwzLjgsNC45IHYyLjZjMCw0LjYwMS0wLjYsNS4zLTMuNiw1LjN2MWgxMC40di0xQzUyLjYsMjcuMiw1Mi4xLDI2LjQsNTIuMSwyMS44eiIvPjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik05LjUsMTguNGMxLjMtMS4yLDIuMi0xLjksMy4yLTIuNWMyLjMtMS42LDMuOSwxLjUsNS42LDAuMWMwLjgtMC42LDAuNy0xLjUsMC4yLTIuMiBjLTAuOS0xLjItMy4zLTEuNi01LjgsMC4xYy0xLjgsMS4yLTMuMiwyLjMtNS45LDQuOVYwTDAsMS4xdjFjMy4xLDAsMy42LDAuOCwzLjYsNS4zdjE0LjRjMCw0LjYwMS0wLjUsNS4zLTMuNiw1LjN2MWgxMC40di0xIGMtMywwLTMuNi0wLjgtMy42LTUuM1YyMUM2LjksMjEsNywyMC45LDcsMjAuOGwwLjItMC4ybDcuNSw3LjRoNS4xdi0xYy0wLjYsMC0xLjktMC4zLTIuNy0xLjFMOS41LDE4LjR6Ii8+PHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTI4LDIxLjh2LTkuN2wtNi44LDEuMXYxYzMsMCwzLjYsMC43LDMuNiw1LjN2Mi4zYzAsNC42MDEtMC42LDUuMy0zLjYsNS4zdjFoMTAuNHYtMSBDMjguNSwyNy4yLDI4LDI2LjQsMjgsMjEuOHoiLz48L3N2Zz4=) no-repeat'});
				$( ".page-template-template-home-page-php #give-a-fork" ).slideDown( 600 );
			}
		};
		
		sticky_navigation();

		jQuery(window).scroll(function() {
			sticky_navigation();
		});

	});
	
	/* Parallax Scroll */
	jQuery(function(){
		/* main background image. moves against the direction of scroll*/
		jQuery('.item').scrollParallax({
			'speed': -0.1
		});
	});

	/* Tabs */
	jQuery('.panes div').hide();
	jQuery(".tabs a:first").addClass("selected");
	jQuery(".tabs_table").each(function(){
			jQuery(this).find('.panes div:first').show();
			jQuery(this).find('a:first').addClass("selected");
	});
	jQuery('.tabs a').click(function(){
			var which = jQuery(this).attr("rel");
			jQuery(this).parents(".tabs_table").find(".selected").removeClass("selected");
			jQuery(this).addClass("selected");
			jQuery(this).parents(".tabs_table").find(".panes").find("div").hide();
			jQuery(this).parents(".tabs_table").find(".panes").find("#"+which).fadeIn(800);
	});

	/* Toggle */
	jQuery(".toggle-content .expand-button").click(function() {
		jQuery(this).toggleClass('close').parent('div').find('.expand').slideToggle(250);
	});

});

// Share buttons
function twwindows(object) {
	window.open( object, "twshare", "height=400,width=550,resizable=1,toolbar=0,menubar=0,status=0,location=0" ) 
}

function fbwindows(object) {
	window.open( object, "fbshare", "height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0" ) 
}

function pinwindows(object) {
	window.open( object, "pinshare", "height=270,width=630,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0" )
}