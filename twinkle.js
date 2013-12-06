$(document).ready(function() {
	$('div').mouseover(function() {
		$(this).fadeTo('slow', 0.1);
	});
	
	$('div').mouseleave(function() {
		$(this).fadeTo('fast', 1);
	});
	
	$('div').draggable();
	
	$('p').hide();
	$('ul').hide();
});