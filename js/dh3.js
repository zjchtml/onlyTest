$(document).ready(function(){
	$("#nav").children("li").mouseover(function(){
		$(this).children("ul").stop(true,false).slideDown(1000);
	})
	$("#nav").children("li").mouseout(function(){
		$(this).children("ul").stop(true,false).slideUp(1000);
	})
})