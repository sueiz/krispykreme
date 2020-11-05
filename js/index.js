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
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    prevArrow: false,
                    nextArrow: false
                }
            }
        ]

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
        nextArrow: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
      });

      $(window).scroll(function(){
        var winH = $(window).height()/2;
        console.log(winH)
        if( $(this).scrollTop() > $('.banner_bg').offset().top - winH ){
            $('.banner_bg').addClass('active');
        }else {
            $('.banner_bg').removeClass('active');
        }

        if( $(this).scrollTop() > $('.store_wrap').offset().top - winH ){
            $('.store_wrap').addClass('active');
        }else {
            $('.store_wrap').removeClass('active');
        }
    })

          //client rolling banner
   
    var bannerLeft=0;
    var first=1;
    var last;
    var imgCnt=0;
    var $img = $('.img__wrap img');
    console.log($img);
    var $first;
    var $last;

    $img.each(function(){   // 5px 간격으로 배너 처음 위치 시킴
        $(this).css("left",bannerLeft);
        bannerLeft += $(this).width();
        $(this).attr("id", "banner"+(++imgCnt));  // img에 id 속성 추가
    });

    if( imgCnt > 10){                //배너 9개 이상이면 이동시킴
        last = imgCnt;
        setInterval(function() {
            $img.each(function(){
                $(this).css("left", $(this).position().left-1); // 1px씩 왼쪽으로 이동
            });
            $first = $("#banner"+first);
            $last = $("#banner"+last);
            if($first.position().left < -265) {    // 제일 앞에 배너 제일 뒤로 옮김
                $first.css("left", $last.position().left + $last.width() );
                first++;
                last++;
                if(last > imgCnt) { last=1; }   
                if(first > imgCnt) { first=1; }
            }
        }, 50);   //여기 값을 조정하면 속도를 조정할 수 있다.(위에 1px 이동하는 부분도 조정하면 깔끔하게 변경가능하다           
    }




});

