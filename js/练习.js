// $(function(){
// $("p").draggable({axis:"x"});
// $("#btn1").click(function(){
// 	alert($("p").draggable("option","axis"));
// });
// $("#btn2").click(function(){
//    $("p").draggable("option","axis","y");
// });
// })
$(function(){
	$("p").draggable();
	$("#btn1").click(function(){
		$("p").draggable("disable");
	});
	$("#btn2").click(function(){
		$("p").draggable("enable");
	});
	$("#btn3").click(function(){
		$("p").draggable("destroy");
	});
})

