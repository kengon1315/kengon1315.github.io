$(document).ready(function(){
	
	$(".menu_option").hover(
		function(){
			$(this).children("div").show();
		},
		function(){
			$(this).children("div").hide();
		});
	
	
	
	/**
	var width = $(document).width();
	var LEFT = 0;
	
	for(var i = 1; i < $(".HomeSlide").children().length + 1; i++){
		
		LEFT -= width;
		
		$(".HomeSlide").animate({
				left: LEFT
				},{
				queue: true,
				duration: 3000
				}, function(){
					var child = $(".HomeSlide :nth-child(" + i + ")").attr("id");
					//$(".HomeSlide #" + child + "").css("float", "right");
				});
		
		console.log(LEFT);
	}
	**/
});