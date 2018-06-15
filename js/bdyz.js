$(document).ready(function(){
	var a=0,b=0;
	$(".in1").keyup(function(){
		if($(".in1").val().length>5&&$(".in2").val().length<13){
		$("#txt").text("用户名输入正确");a=1;
	}else{$("#txt").text("用户名输入错误");a=0;}
	})
	$(".in2").keyup(function(){
		var reg=/^(13|14|15|17|18)\d{9}$/;
		if(reg.test($(".in2").val())){
		$("#txt1").text("手机号输入正确");b=1;
	}else{$("#txt1").text("手机号输入错误");b=0;}
	})
	$(":submit").click(function(){
		if(a==0||b==0){
			$("form").submit(function(){
				return false;
			})}
	})
})
