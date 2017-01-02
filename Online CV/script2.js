$(function() {	
	$(document).ready(function(){
    $(this).scrollTop(0);
	});

	$(document).ready(function() {
		$(window).scroll(function () {
			console.log($(window).scrollTop())
			if ($(window).scrollTop() > 345) {
				$('#navigation').addClass('navbar-fixed');
			}
			if ($(window).scrollTop() < 346) {
				$('#navigation').removeClass('navbar-fixed');
			}
		});
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