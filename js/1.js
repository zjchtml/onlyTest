$(document).ready(function(){
	$("#nav").children("li").children("span").toggle(function(){
		$(this).next().slideDown(1000);
		$(this).children("span").css("background","url(../img/tb2.png) no-repeat left top #f00");
	},function(){
		$(this).next().slideUp(1000);
		$(this).children("span").css("background","url(../img/tb1.png) no-repeat left top #f00");
	})
		
})
