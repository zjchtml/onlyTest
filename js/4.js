$(document).ready(function(){
	$("span.left").click(function(){

		var indexRight=$(this).parent().index();
		var indexLeft=indexRight-1;
		var numberRight=$("p:eq("+indexRight+")").text();
		var numberLeft=$("p:eq("+indexLeft+")").text();
          $(this).next().insertAfter($("p:eq("+indexLeft+")")).prev().insertAfter($(this));
          if(numberLeft-1==indexRight){
          	$("p:eq("+indexRight+")").siblings().remove();
          }
          if(numberRight-1==indexLeft){
          	$("p:eq("+indexLeft+")").siblings().remove();
          }else if(numberLeft-1==indexLeft){
          	$("span.right:eq(0)").clone(true).insertAfter($("p:eq("+indexLeft+")"))
          if(indexRight!=5){
          	$(this).clone(true).insertAfter($("p:eq("+indexRight+")"));
          }
          }                    //jQuery
	})
})
	$("span.right").click(function(){
		var indexLeft=$(this).parent().index();
		var indexRight=indexLeft+1;
		var numberLeft=$(this).prev().text();
		var numberRight=$(this).parent().next().children("p").text();
         $(this).next().insertAfter($("p:eq("+indexRight+")")).prev().insertAfter($(this));
          if(numberRight-1==indexLeft){
          	$("p:eq("+indexLeft+")").siblings().remove();
          }
          if(numberLeft-1==indexRight){
          	$("p:eq("+indexRight+")").siblings().remove();
          }else if(numberRight-1==indexRight){
          	$("span.left:eq(0)").clone(true).insertBefore($("p:eq("+indexRight+")"));
          if(indexRight!=5){
          	$(this).clone(true).insertAfter($("p:eq("+indexRight+")"))
          }
          }                    //jQuery
	})                        //jQuery
}) 

