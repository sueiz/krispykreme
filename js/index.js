$(function() {

    $('.main_slide .btn').on('click',function(){
        $('.slide_wrap').css({
            'display':'none',
            'opacity':'0'
        })
        $('.br_wrap').css({
            'display':'block',
            'opacity':'1'
        })

    });

    $('.closeBtn').on('click',function(){
        $('.slide_wrap').css({
            'display':'block',
            'opacity':'1'
        })
        $('.br_wrap').css({
            'display':'none',
            'opacity':'0'
        })

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

    $('.br_wrap ul').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });
});

