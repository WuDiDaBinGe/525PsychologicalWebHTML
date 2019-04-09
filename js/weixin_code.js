// JavaScript Document
$(function(){
	//鼠标悬停显示
	$('#nav_phone').mouseover(function(){
		$('.weixin_code').fadeIn();
	});
	//鼠标移开消失
	$('#nav_phone').mouseout(function(){
		$('.weixin_code').fadeOut();
	});
});