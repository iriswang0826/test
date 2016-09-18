$(document).ready(function(){
	$(function () {
      $.srSmoothscroll()
    })
	// 滚动导航固定
	$(document).scroll(function(){
		var top = $(document).scrollTop();
		if(top > 40){
			$('.topnav').addClass('fixed');
		}else {
			$('.topnav').removeClass('fixed');
		}
	});
	//导航条为fixed时 跟随滚动条水平滚动
	
	//当滚动条的位置处于距顶部100像素以下时，回到顶部出现，否则消失
    $(function () {
        $(window).scroll(function(){
            if ($(window).scrollTop()>100){
                $(".scrollToTop").fadeIn(1500);
            }
            else
            {
                $(".scrollToTop").fadeOut(1500);
            }
        });

        //当点击跳转链接后，回到页面顶部位置

        $(".scrollToTop").click(function(){
            $('body,html').animate({scrollTop:0},1000);
            return false;
        });
    });
	// banner轮播
	$('.slider-banner').slick({
		dots:true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		arrows: false
	});
})