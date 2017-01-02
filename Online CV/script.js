$(function() {
	$(document).ready(function(){
    $(this).scrollTop(0);
	});
	
	$(window).scroll(function() {
	  if ($(document).scrollTop() > 100) {
		$('nav').addClass('shrink');
		$('h1').slideUp(250, function(){});
	  } else {
		$('nav').removeClass('shrink');
		$('h1').slideDown(250, function(){});
	  }
	});

	$('a[href*="#"]:not([href="#"])').click(function() {
	  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
		  $('html, body').animate({
			scrollTop: target.offset().top
		  }, 600);
		  return false;
		}
	  }
	});
});