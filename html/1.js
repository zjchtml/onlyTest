function test(){
	  var a = parseInt(document.myform.one.value);
	  var b = parseInt(document.myform.two.value);
	  var c = document.myform.sy.value;
	  var sum=0;
	  switch(c){
	  	  case "+":sum=a+b;break;
	  	  case "-":sum=a-b;break;
	  	  case "*":sum=a*b;break;
	  	  case "/":sum=a/b;break;
	  }document.myform.three.value=sum;}

       

	