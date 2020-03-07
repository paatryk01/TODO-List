$("#leftSpan").text($("ul").children().length);

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(1000,function(){
		$(this).remove();
		$("#leftSpan").text($("ul").children().length);
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $("input").val();
		$(this).val("");
		$("#leftSpan").text($("ul").children().length+1); 
	$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
	}

});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle(500);
});

$("#clear").click(function(){
	var agree = prompt("Are you sure that you would like to remove all todo list?")
	if(agree === "yes"){
		$("li").remove();
		$("#leftSpan").text($("ul").children().length);
	}
});

$("ul").on("dblclick", "li", function(){
	$(this).toggleClass("important");
});

