$(document).ready(function(){
	$('#loading-center').fadeOut(3500);
	if(window.name==""){
		$('#loading-left').addClass('slideOutLeft');
		$('#loading-right').addClass('slideOutRight')
		window.name=0;
	}else{
		window.name=eval(window.name)+1;
		$("#loading-left,#loading-right,#loading-center").remove();
	}
})
window.onload=function(){
	$('.menu').click(function(){
		$(this).toggleClass('menu_bg')
		$('.nav').toggleClass('move')
		checked()
	})
	navText();
	$('.nav span').click(function ck(){
		$('.nav').toggleClass('move')
		$('.menu').toggleClass('menu_bg')
		$('header .wrap').css('display','none')
		root()
	})
	$(window).resize(function(){
		navText()
		$('.nav span').click(function ck(){
			$('.nav').toggleClass('move')
			$('.menu').toggleClass('menu_bg')
			$('header .wrap').css('display','none')
			root()
		})
	})
}
function navText(){
	var $obj=['首页','关于我','技术掌握','我的作品','联系我'];
	var $list=['1','2','3'];
	$('header .swiper-pagination1 span').each(function(i){
		$(this).html($obj[i])
	})
	$('#swiper2 .swiper-pagination2 span').each(function(i){
		$(this).html($list[i])
	})
}
function checked(){
	if($('.menu').hasClass('menu_bg')){
		$('header .wrap').css('display','block')
		mySwiper1.lockSwipeToPrev();
		mySwiper1.lockSwipeToNext();
	}else{
		$('header .wrap').css('display','none')
		mySwiper1.unlockSwipeToPrev();
		mySwiper1.unlockSwipeToNext();
	}
}
function root(){
	mySwiper1.unlockSwipeToPrev();
	mySwiper1.unlockSwipeToNext();
}
