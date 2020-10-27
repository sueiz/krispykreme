$(function() {
    $('.main_slide .btn').on('click',function(){
        $('.slide_wrap').css({
            visibility:'hidden'
        })
        $('.br_wrap').css({
            visibility:'visible'
        })
        $('.slide_wrap ul').slick('slickPause');
    });

    $('.closeBtn').on('click',function(){
        $('.slide_wrap').css({
            visibility:'visible'
        })
        $('.br_wrap').css({
            visibility:'hidden'
        })
        $('.slide_wrap ul').slick('slickPlay');

    })
    /* 슬라이드 */
    $('.slide_wrap ul').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });

    /* 애니메이션 */
    $('.bn').eq(1).find('a').addClass('active');
    $('.slide_wrap ul').on('beforeChange',function(event, slick, currentSlide, nextSlide){
        $('.bn a').removeClass('active');
    });

    $('.slide_wrap ul').on('afterChange', function(event, slick, currentSlide){
        $('.bn').eq(currentSlide+1).find('a').addClass('active');
    });

    $('.br_wrap ul').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
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

