$(document).ready(function(){
	$("#nav").children("ul").children("li").mouseover(function(){
		$(this).children("ul").fadeIn().end().siblings().children("ul").fadeOut();
	});
	$("#nav").children("ul").children("li").mouseout(function(){
		$(this).children("ul").fadeOut();
	});
});