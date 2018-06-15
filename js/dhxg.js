$(document).ready(function(){
	$("#btn").click(function(){
		$("div").css("position","relative");
		$("div").animate({"left":"200px"},2000).animate({"top":"200px"},2000).animate({"left":"0"},2000).animate({"top":"0"},2000);
	})
})