// JavaScript Document
$(document).ready(function(){
	$('.bar').on('click',function(){
		$('.bar').removeClass('show');
		$(this).addClass('show');
	});
	$('.video-first-frame').hover(function(){
		$(this).children('.video-first-structure').css('z-index','5');
		$(this).children('.video-first-cover').css('z-index','10');
	},function(){
		$(this).children('.video-first-cover').css('z-index','5');
		$(this).children('.video-first-structure').css('z-index','10');
	});
	$('.video-common-frame').hover(function(){
		$(this).children('.video-common-structure').css('z-index','5');
		$(this).children('.video-common-cover').css('z-index','10');
	},function(){
		$(this).children('.video-common-cover').css('z-index','5');
		$(this).children('.video-common-structure').css('z-index','10');
	});
	$('.scorll').hover(function(){
		$('.button').css('opacity','1');
	},function(){
		$('.button').css('opacity','0');});
	var timer;
	var down=function(operator){
		for(var i=0;i<5;i++){
			if($('.target').eq(i).hasClass('action')){
				$('.target').eq(i).removeClass('action');
				$('.target').eq(i).css('filter','blur(6px)');
				$('.target').eq(i).children('div').removeClass('es');
				$('.dot').eq(i).css('background-color','#F5F5F5');
				if(operator==="+")
				{
					var s1=i-2+5;
					var s2=i-1+5;
					var s3=i+5;
					var s4=i+1+5;
					var s5=i+2+5;
					$('.target').eq((s1)%5).css('opacity','0');
					$('.target').eq((s5)%5).css('opacity','1');
				}else{
					var s1=i+5+1;
					var s2=i+5+2;
					var s3=i+5-2;
					var s4=i+5-1;
					var s5=i+5;
					$('.target').eq((s2)%5).css('opacity','0');
					$('.target').eq((s3)%5).css('opacity','1');
				}
				$('.target').eq((s4)%5).addClass('action');
				$('.target').eq((s4)%5).children('div').addClass('es');
				$('.target').eq((s4)%5).css('filter','blur(0px)');
				$('.dot').eq((s4)%5).css('background-color','#FF6E00');
				$('.target').eq((s4)%5).css('transform','translateX(0%)');
				$('.target').eq((s5)%5).css('transform','translateX(100%)');
				$('.target').eq((s3)%5).css('transform','translateX(-100%)');
				$('.target').eq((s2)%5).css('transform','translateX(-200%)');
				$('.target').eq((s1)%5).css('transform','translateX(200%)');
				break;
			}
		}
	};
	timer=setInterval(down("+"),500);
	$('.button').on('click',function(){
		if($(this).hasClass('right')){
			down("+");
		}else{
			down("-");
		}
	});
//	$('.button').on('click',$sroll());
});
