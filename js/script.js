
$(document).ready(function(){
	$("#navList").click(function(){
		$("nav").slideToggle();
		$("body").css("overflow", "hidden");
	});
	$("nav a").click(function(){
		$("nav").slideUp();
		$("body").css("overflow", "auto");
	});
});
