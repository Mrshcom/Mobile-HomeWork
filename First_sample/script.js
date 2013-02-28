$(function(){
	// my jq mobile custome code ...

	setTimeout(function(){
		window.scrollTo(0,1);
	},1);

	$('a').click(function() {
		var value = $(".screen-cal").val();
		$(".screen-cal").val(value + $(this).attr('data-val'));
		//alert($(this).attr('data-val'));
	});
});