$(document).ready(function(){
	$('.slider').hide().prev().click(function() {
		$('.slider').not(this).slideUp();
		$(this).next().not(':visible').slideDown();
	}); 
	$('.title').click(function() {
		$(this).next().toggle(1000);
	});
	
	var tabCont = $('div.tab-content');
	tabCont.hide().filter(':first').show();
	$('ul.tabset li a').click(function() {
		tabCont.hide();
		tabCont.filter(this.hash).show();
		$('ul.tabset li').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();
});	
	