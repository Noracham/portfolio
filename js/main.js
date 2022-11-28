$(function(){
    let check = false;

    // inviewテンプレ
    $(".v_inblur").on("inview",function(event,isInView){
        if(isInView){
            $(this).addClass("visible_blur")
        }else{

        }
    });
    $(".v_inup").one("inview",function(event,isInView){
        $(this).addClass("visible_inup")
    })

    //メニュー切り替え
    $("#inbox").click(function(){
        if(check == false){
            $(this).css({"left":"75px",});
            check = true;

            $("#inbox ion-icon").css({"color":"rgba(255,255,255,0.25)"})

            $(".menuback").animate({"left":"0"},1);
            $(".menuback").animate({"opacity":"1"},500);

            // $(".allopacity").animate({"opacity":"0"},500);
            $(".hide").addClass("hidden");

            $(".selectmenu").animate({"left":"0"},0.0001)
            $(".in_rump").animate({"top":"0px"},500);
            $(".in_light").css({"display":"block"},0.1)
            $(".in_light").delay(1000).animate({"opacity":"1"},500);
            $(".menu_list").animate({"display":"block"},0.0001);

            $(".menu_list").delay(1000).animate({"opacity":"1"});
            $(".selectmenu").css({"display":"block"})

            console.log("menu");
            
        }else if(check == true){
            $(this).css("left","0px");
            check = false;
            
            $("#inbox ion-icon").css({"color":"white","filter":"drop-shadow(0 0 5px #fff) drop-shadow(0 0 10px #fff) drop-shadow(0 0 15px #fff)"})
            $(".menuback").animate({"opacity":"0"},500);
            $(".menuback").delay(1000).animate({"left":"-100%"},1);

            $(".allopacity").animate({"opacity":"1"},500);
            $(".hide").removeClass("hidden");

            $(".in_rump").animate({"top":"-750px"},500);
            $(".in_light").animate({"opacity":"0"},1);
            $(".in_light").css({"display":"none"},0.001)
            $(".menu_list").animate({"opacity":"0"},1);
            $(".menu_list").animate({"display":"none"},0.0001);

            $(".selectmenu").delay(1000).animate({"left":"-100vw"},0.0001)
            
            console.log("close");
        }
    })

    /*about*/
    $(".bgsmile").one("inview",function(event,isInView){
        $(this).addClass("smile_rotate")
    })


    $(".titleimg").one("inview",function(event,isInView){
        $(this).addClass("subtitle_flash")
    })

    $(".ab-content p:first-child").one("inview",function(event,isInView){
        $(this).addClass("abouttext_flash")
    })

    $(".ab-content p:nth-of-type(2)").one("inview",function(event,isInView){
        $(this).addClass("abouttext_flash_du2")
    })


    $(".ab-content:nth-of-type(1)").on("click",function(){
        $(this).addClass("down_anime1");
    })

    $(window).on("scroll",function(){
        $('.titleabout').each(function(){

            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scroll > position - windowHeight + 300){
              $(".titleabout").addClass('flash_title');
            }
        });
        $('.titleworks').each(function(){

            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scroll > position - windowHeight + 300){
              $(".titleworks").addClass('flash_title');
            }
        });
        $('.titlecontact').each(function(){

            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scroll > position - windowHeight + 300){
              $(".titlecontact").addClass('flash_title');
            }
        });
        $('.ab-content:nth-of-type(1)').each(function(){

            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scroll > position - windowHeight + 100){
              $(".ab-content:nth-of-type(1)").addClass('flash_box');
            }
        });
        $('.ab-content:nth-of-type(2)').each(function(){

            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scroll > position - windowHeight + 100){
              $(".ab-content:nth-of-type(2)").addClass('flash_box');
            }
        });
        $('.ab-content:nth-of-type(3)').each(function(){

            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scroll > position - windowHeight + 100){
              $(".ab-content:nth-of-type(3)").addClass('flash_box');
            }
        });

        $('.worksbg').each(function(){

            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scroll > position - windowHeight + 300){
              $(".snsF").addClass('flash_box');
            }
        });

        $('.ar').each(function(){

            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scroll > position - windowHeight + 300){
              $(".ar").addClass('active');
            }
        });
    });

    $(".instagram").hover(function () {
            // over
            $(".instagram p").text("rr_ym04  ");
            $(".instagram p").prop("id","ip");
        }, function () {
            // out
            $(".instagram p").text("Instagram");
            $(".instagram p").prop("id","");
        }
    );
    $(".twitter").hover(function () {
        // over
        $(".twitter p").text("rr_ym04");
        $(".twitter p").prop("id","ip");
    }, function () {
        // out
        $(".twitter p").text("Twitter");
        $(".twitter p").prop("id","");
    }
);
/*SKILL*/
$(window).on("scroll",function(){
    $('.skillLv').each(function(){

        var position = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();

        if (scroll > position - windowHeight + 300){
          $(".skillsmile img:nth-of-type(1)").addClass('smile1');
          $(".traffic div:nth-of-type(-n+5) .skillsmile img:nth-of-type(2),.traffic div:nth-of-type(9) .skillsmile img:nth-of-type(2),.traffic div:nth-of-type(10) .skillsmile img:nth-of-type(2),.traffic div:nth-of-type(11) .skillsmile img:nth-of-type(2)").addClass('smile2');
          $(".traffic div:nth-of-type(-n+2) .skillsmile img:nth-of-type(3)").addClass('smile3');
        }
    });
});
var n=0;
$(window).on("scroll",function(){
    $('.workone').eq(n).each(function(){

        var position = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();

        console.log(position);

        if (scroll > position - windowHeight + 300){
          $(".workone").eq(n).addClass('up');
          n++;
          console.log(n);
        }
    });
});




$('.container').css('overflow','hidden');
$(window).on('touchmove.noScroll', function(e) {
    e.preventDefault();
});

// about.html
// boxのh1アニメーション
$(".s_title").one("inview",function(event,isInView){
    $(this).animate({"width":"180px"},500)
})

// 信号アニメーション
$(".one_skill:nth-of-type(1)").one("inview",function(event,isInView){
    $(".one_skill:nth-of-type(1) .tra1").animate({"opacity":"1"},500);
    $(".one_skill:nth-of-type(1) .tra2").delay(500).animate({"opacity":"1"},500);
    $(".one_skill:nth-of-type(1) .tra3").delay(1000).animate({"opacity":"1"},500);
})
// css
$(".one_skill:nth-of-type(2)").one("inview",function(event,isInView){
    $(".one_skill:nth-of-type(2) .tra1").animate({"opacity":"1"},500);
    $(".one_skill:nth-of-type(2) .tra2").delay(500).animate({"opacity":"1"},500);
    $(".one_skill:nth-of-type(2) .tra3").delay(1000).animate({"opacity":"1"},500);
})
// sass
$(".one_skill:nth-of-type(3)").one("inview",function(event,isInView){
    $(".one_skill:nth-of-type(3) .tra1").animate({"opacity":"1"},500);
    $(".one_skill:nth-of-type(3) .tra2").delay(500).animate({"opacity":"1"},500);
    // $(".one_skill:nth-of-type(3) .tra3").delay(1000).animate({"opacity":"1"},500);
})
// javasctipt
$(".one_skill:nth-of-type(4)").one("inview",function(event,isInView){
    $(".one_skill:nth-of-type(4) .tra1").animate({"opacity":"1"},500);
    $(".one_skill:nth-of-type(4) .tra2").delay(500).animate({"opacity":"1"},500);
    // $(".one_skill:nth-of-type(4) .tra3").delay(1000).animate({"opacity":"1"},500);
})
// jquery
$(".one_skill:nth-of-type(5)").one("inview",function(event,isInView){
    $(".one_skill:nth-of-type(5) .tra1").animate({"opacity":"1"},500);
    $(".one_skill:nth-of-type(5) .tra2").delay(500).animate({"opacity":"1"},500);
    // $(".one_skill:nth-of-type(5) .tra3").delay(1000).animate({"opacity":"1"},500);
})
// react
$(".one_skill:nth-of-type(6)").one("inview",function(event,isInView){
    $(".one_skill:nth-of-type(6) .tra1").animate({"opacity":"1"},500);
    // $(".one_skill:nth-of-type(6) .tra2").delay(500).animate({"opacity":"1"},500);
    // $(".one_skill:nth-of-type(6) .tra3").delay(1000).animate({"opacity":"1"},500);
})
// php
$(".one_skill:nth-of-type(7)").one("inview",function(event,isInView){
    $(".one_skill:nth-of-type(7) .tra1").animate({"opacity":"1"},500);
    // $(".one_skill:nth-of-type(7) .tra2").delay(500).animate({"opacity":"1"},500);
    // $(".one_skill:nth-of-type(7) .tra3").delay(1000).animate({"opacity":"1"},500);
})
// java
$(".one_skill:nth-of-type(8)").one("inview",function(event,isInView){
    $(".one_skill:nth-of-type(8) .tra1").animate({"opacity":"1"},500);
    // $(".one_skill:nth-of-type(8) .tra2").delay(500).animate({"opacity":"1"},500);
    // $(".one_skill:nth-of-type(8) .tra3").delay(1000).animate({"opacity":"1"},500);
})
// python
$(".one_skill:nth-of-type(9)").one("inview",function(event,isInView){
    $(".one_skill:nth-of-type(9) .tra1").animate({"opacity":"1"},500);
    // $(".one_skill:nth-of-type(9) .tra2").delay(500).animate({"opacity":"1"},500);
    // $(".one_skill:nth-of-type(9) .tra3").delay(1000).animate({"opacity":"1"},500);
})
// AWS
$(".one_skill:nth-of-type(10)").one("inview",function(event,isInView){
    $(".one_skill:nth-of-type(10) .tra1").animate({"opacity":"1"},500);
    $(".one_skill:nth-of-type(10) .tra2").delay(500).animate({"opacity":"1"},500);
    // $(".one_skill:nth-of-type(10) .tra3").delay(1000).animate({"opacity":"1"},500);
})
// photoshop
$(".one_skill:nth-of-type(11)").one("inview",function(event,isInView){
    $(".one_skill:nth-of-type(11) .tra1").animate({"opacity":"1"},500);
    $(".one_skill:nth-of-type(11) .tra2").delay(500).animate({"opacity":"1"},500);
    // $(".one_skill:nth-of-type(11) .tra3").delay(1000).animate({"opacity":"1"},500);
})
// illustrater
$(".one_skill:nth-of-type(12)").one("inview",function(event,isInView){
    $(".one_skill:nth-of-type(12) .tra1").animate({"opacity":"1"},500);
    $(".one_skill:nth-of-type(12) .tra2").delay(500).animate({"opacity":"1"},500);
    // $(".one_skill:nth-of-type(12) .tra3").delay(1000).animate({"opacity":"1"},500);
})
// xd
$(".one_skill:nth-of-type(13)").one("inview",function(event,isInView){
    $(".one_skill:nth-of-type(13) .tra1").animate({"opacity":"1"},500);
    $(".one_skill:nth-of-type(13) .tra2").delay(500).animate({"opacity":"1"},500);
    // $(".one_skill:nth-of-type(13) .tra3").delay(1000).animate({"opacity":"1"},500);
})






















})



