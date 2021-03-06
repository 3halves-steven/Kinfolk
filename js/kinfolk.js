// Dropdown
$(document).ready(function(e){
	var logo_height = $('#sup-nav').height();
	if ($(window).width() > 768){
		var nav_height = $('#nav-container').height();
	}else{
		var nav_height = $('.mean-bar').height();
	}
	var window_height = $(window).height();
				
	var give_a_height = window_height - nav_height - logo_height + 5;
	
	$('.page-template-template-home-page-php #give-a-fork').css({'height':give_a_height});
	
	$('#dropdown').on('click',function(){
		$('.dropdownwrap').slideToggle(400, function(){
			var center = map.getCenter();
			google.maps.event.trigger(map, "resize");
			map.setCenter(center);
			if($(this).is(':visible')){
				$('#sup-contact').css({'background':'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NSA0NSI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMS0yNmg0M3Y2MEwyMy44MyA0NCAxIDM0Vi0yNnoiLz48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMjYgMzEuNjZ2LTEyaDZMMjMuMzMgMTFsLTguNjcgOC42Nmg2djEyLjA2YzAgMS40NCAxLjE5IDIuNiAyLjY3IDIuNlMyNiAzMy4xIDI2IDMxLjY2eiIvPjwvc3ZnPg==) no-repeat right bottom','background-size':'45px 45px'});
			} else {
				$('#sup-contact').css({'background':'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NSA0NSI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMS0yNmg0M3Y2MEwyMy44MyA0NCAxIDM0Vi0yNnoiLz48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMjAuNjcgMTMuNjd2MTJoLTZsOC42NyA4LjY2TDMyIDI1LjY3aC02VjEzLjZDMjYgMTIuMTYgMjQuODEgMTEgMjMuMzMgMTFTMjAuNjcgMTIuMjMgMjAuNjcgMTMuNjd6Ii8+PC9zdmc+) no-repeat right bottom','background-size':'45px 45px'});
			}
		});
	});
	
});

// Catering
$(document).ready(function(){
	$('#item-vfb-60 input[type="radio"]').click(function(){
		if($(this).attr("value")=='Off-site "on request"'){
			$(".off-site-location").show();
		}else{
			$(".off-site-location").hide();
		}
	});
});

// Map
var map;
var map2;
var kinfolk = new google.maps.LatLng(-37.8169969,144.9539834);
var MY_MAPTYPE_ID = google.maps.MapTypeId.ROAD;

function initialize() {
	var myOptions = {
	zoom: 18,
	center: kinfolk,
	mapTypeId: google.maps.MapTypeId.ROADMAP,
	disableDefaultUI: true,
	styles: [
		{"featureType": "administrative","stylers": [{"visibility": "off"}]},
		{"featureType": "poi","stylers": [{"visibility": "simplified"}]},
		{"featureType": "road","stylers": [{"visibility": "simplified"}]},
		{"featureType": "water","stylers": [{"visibility": "simplified"}]},
		{"featureType": "transit","stylers": [{"visibility": "simplified"}]},
		{"featureType": "landscape","stylers": [{"visibility": "simplified"}]},
		{"featureType": "road.highway","stylers": [{"visibility": "off"}]},
		{"featureType": "road.local","stylers": [{"visibility": "on"}]},
		{"featureType": "road.highway","elementType": "geometry","stylers": [{"visibility": "on"}]},
		{"featureType": "water","stylers": [{"color": "#84afa3"},{"lightness": 52}]},
		{"stylers": [{"saturation": -77}]},
		{"featureType": "road"}
	]
	};
	
	map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
	if(document.getElementById('post-428')){
		map2 = new google.maps.Map(document.getElementById("big-map-canvas"), myOptions);
	}
}

google.maps.event.addDomListener(window, "load", initialize);