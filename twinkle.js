$(document).ready(function() {
	$('.close').click(function () {
		$('.modal').fadeOut('fast');
	});
	
	//TODO put .heart and .circle into array
	
	$('.heart, .circle').mouseover(function() {
		$(this).fadeTo('slow', 0.1);
	});

	$('.heart, .circle').mouseleave(function() {
		$(this).fadeTo('fast', 1);
	});
	
	$('.heart, .circle').draggable();
	
/*
	$('.shapes').mouseover(function() {
		$(this).fadeTo('slow', 0.1);
	});
	
	$('.shapes').mouseleave(function() {
		$(this).fadeTo('fast', 1);
	});
	
	$('.shapes').draggable();
*/	
	$('p').hide();
	$('ul').hide();
});
