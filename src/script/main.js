// info tab opener script
$(document).ready(function(){
	$(".rightIcon").click(function(){
		$(".infoTab").toggleClass("active");
	});

	$(".rightIcon").parent().mouseleave(function(){
		$(".infoTab").removeClass("active");
	});
});