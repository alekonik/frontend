$(document).ready(function(){
	
	$(".left").click(function() {
		$('.slider').animate({'left': '-=170px'}, 'slow');
	});
	$(".right").click(function() {
		$('.slider').animate({'left': '+=170px'}, 'slow');
	});
});		
	