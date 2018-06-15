$(document).ready(function(){
	$("#img1").click(function(){
		$(this).animate({"width":"150px","height":"150px","top":"150px","left":"75px"},500);
		$("#img1").animate({"left":"0","top":"0"},500);
		$("#img2").animate({"left":"150px"},500);
		$("#img3").animate({"left":"75px","top":"150px"},500).animate({"width":"300px","height":"300px","top":"0","left":"0","z-index":"1"},500);

	})

})