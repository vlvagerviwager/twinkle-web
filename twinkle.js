$(document).ready(function() {
	$('.close').click(function () {
		$('.modal').fadeOut('fast');
	});
	
	$('.shapes').mouseover(function() {
		$(this).fadeTo('slow', 0.1);
	});
	
	$('.shapes').mouseleave(function() {
		$(this).fadeTo('fast', 1);
	});
	
	$('.shapes').draggable();
	
	$('p').hide();
	$('ul').hide();
});
