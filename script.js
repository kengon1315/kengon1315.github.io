$(document).ready(function(){	
	$(".Order").hover(
		function(){
			
			//grab this objects class and animate
			var id = "#" + $(this).attr("id") + " .OrderSlideUp";
			$(id).animate({
				top: 0
			},{
				queue: false,
				duration: 300
			});
			
		}, function(){
			//make sure all animations are default
			$(".OrderSlideUp").animate({
				top: 270
			}, {
				queue: false,
				duration: 300
			});
			
		});
	
});

