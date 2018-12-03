$(document).ready(function(){	
	$(".Order").hover(
		function(){
			
			//grab this objects
			var id = "#" + $(this).attr("id") + " .OrderSlideUp";
			
			
			//animating slideup
			$(id).animate({
				top: 0
			},{
				queue: false,
				duration: 300
			});
			
		}, function(){
			
			
			//animating slidedown
			$(".OrderSlideUp").animate({
				top: 270
			}, {
				queue: false,
				duration: 300
			});
			
		});
	
});

