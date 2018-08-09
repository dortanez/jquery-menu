$("#menu-button").click(function(){

	$("li").toggleClass("hide");
	$("body").toggleClass("overlay");
	$("p").toggleClass("change-button");
});

$("li").hover(function(){

	$(this).css({"text-decoration": "underline"})

	}, function() {

	$(this).css({"text-decoration": "initial"})

});



