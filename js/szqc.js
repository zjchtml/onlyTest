$(function(){
	var array=[1,2,3,5,7,2,3];
	alert($.unique(array));
})
$.fn.extend({
	
	unique:function(arr){
		var temp=[];
        for(var i=0;i<arr.length;i++){
        	if(temp.indexOf(arr[i])==-1){
        		temp.push(arr[i]);
        	}
        }
        return temp;
	}
})