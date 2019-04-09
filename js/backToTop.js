// JavaScript Document
$(function(){
	$(window).scroll(function(){
		//当大于顶部100距离时，该按钮淡出显示
		if($(window).scrollTop()>=100){
		   		$('#btn_top').fadeIn();
		 }
		//当小于顶部100距离时，该按钮隐藏
		 else{
			 $('#btn_top').fadeOut();
		 }
	});
});
//点击回到顶部按钮时，将页面定位到页面顶部
$('#btn_top').click(function(){
	$('html,body').animate({scrollTop:0},500);
});
