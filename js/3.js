$(document).ready(function(){
	$("p").click(function(){
		$("p").removeClass("highlight");
		var i=$(this).index();
        $(this).next().addClass("highlight").end().prev().addClass("highlight");
        $(this).parent().next().children().slice(i-1,i+2).addClass("highlight");
        $(this).parent().prev().children().slice(i-1,i+2).addClass("highlight");
        if(i==0){
        $(this).parent().next().children().slice(i,i+2).addClass("highlight");
        $(this).parent().prev().children().slice(i,i+2).addClass("highlight");	
        }
	});
});
i-1>0?i-1:0,i+2