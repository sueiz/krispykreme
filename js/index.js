$(function() {
    /* 헤더 스크롤 이벤트 */
    $(window).scroll(function(){
        if($(this).scrollTop() >= 93){
            $('header').addClass('active');
        }else {
            $('header').removeClass('active');
        }
    })

    /* MONTHLY DONUTS */
    $('.btn').on('click',function(){
        $('.ad_dom').toggleClass('active');
    });
    
    $('.brandstory_btn').on('click',function(){
        $('.slide_wrap').css({
            visibility:'hidden'
        })
        $('.br_wrap').addClass('active');
        $('.slide_wrap ul').slick('slickPause');
        $('.br_wrap ul').slick('slickPlay');
    });

    $('.closeBtn').on('click',function(){
        $('.slide_wrap').css({
            visibility:'visible'
        })
        $('.br_wrap').css({
            visibility:'hidden'
        })
        $('.slide_wrap ul').slick('slickPlay');
        $('.br_wrap ul').slick('slickPause');
    })
    /* 메인 슬라이드 */
    $('.slide_wrap ul').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });

    /* 메인 슬라이드 텍스트 애니메이션 */
    $('.bn').eq(1).find('a').addClass('active');
    $('.slide_wrap ul').on('beforeChange',function(event, slick, currentSlide, nextSlide){
        $('.bn a').removeClass('active');
    });

    $('.slide_wrap ul').on('afterChange', function(event, slick, currentSlide){
        $('.bn').eq(currentSlide+1).find('a').addClass('active');
    });

    /* 브랜드스토리 슬라이드 */
    $('.br_wrap ul').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000
    });
    
    /* 브랜드스토리 슬라이드 텍스트 애니메이션 */
    $('.br00 a').addClass('active');
    $('.br_wrap ul').on('beforeChange',function(event, slick, currentSlide, nextSlide){
        $('.bns a').removeClass('active');
    });

    $('.br_wrap ul').on('afterChange', function(event, slick, currentSlide){
        $('.bns').eq(currentSlide+1).find('a').addClass('active');
    });

    $('.event_slide ul').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        prevArrow: false,
        nextArrow: false
      });


});

