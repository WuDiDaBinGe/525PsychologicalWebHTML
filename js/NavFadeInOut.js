// JavaScript Document
$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>=100){
		   		$('#NavInOut').fadeIn();  //显示
		 }
		 else{
			 $('#NavInOut').fadeOut();	 //消失
		 }
	});
});