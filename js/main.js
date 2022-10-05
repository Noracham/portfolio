$(function(){
    var check = false;
    $("#inbox").click(function(){
        if(check == false){
            $(this).css({"left":"75px",});
            check = true;

            $("#inbox ion-icon").css({"color":"rgba(255,255,255,0.25)"})

            $(".menuback").animate({"left":"0"},1);
            $(".menuback").animate({"opacity":"1"},500);

            // $(".allopacity").animate({"opacity":"0"},500);
            $(".hidden").css({"display":"none"});

            $(".in_rump").animate({"top":"-150px"},500);
            $(".in_light").delay(1000).animate({"opacity":"1"},500);
            $(".menu_list").delay(1000).animate({"opacity":"1"});

            console.log("menu");
            
        }else if(check == true){
            $(this).css("left","0px");
            check = false;
            
            $("#inbox ion-icon").css({"color":"white","filter":"drop-shadow(0 0 5px #fff) drop-shadow(0 0 10px #fff) drop-shadow(0 0 15px #fff)"})
            $(".menuback").animate({"opacity":"0"},500);
            $(".menuback").animate({"left":"-100%"},1);

            // $(".allopacity").animate({"opacity":"1"},500);
            $(".hidden").css({"display":"block"});

            $(".in_rump").animate({"top":"-750px"},500);
            $(".in_light").animate({"opacity":"0"},1);
            $(".menu_list").animate({"opacity":"0"},1);
            
            console.log("close");
        }
    })

    $(window).on("scroll",function(){
        $('.arrow').each(function(){

            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scroll > position - windowHeight + 300){
              $(".arrow").addClass('active');
            }
        });
    });

    $(".instagram").hover(function () {
            // over
            $(".instagram p").text("@rr_ym04");
            $(".instagram p").prop("id","ip");
        }, function () {
            // out
            $(".instagram p").text("Instagram");
            $(".instagram p").prop("id","");
        }
    );
    $(".twitter").hover(function () {
        // over
        $(".twitter p").text("@rr_ym04");
        $(".twitter p").prop("id","ip");
    }, function () {
        // out
        $(".twitter p").text("Twitter");
        $(".twitter p").prop("id","");
    }
);
/*ABOUT*/
$(window).on("scroll",function(){
    $('.Ename').each(function(){

        var position = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();

        if (scroll > position - windowHeight + 500){
          $(".Ename").addClass('LtoR');
        }
    });
});

$(window).on("scroll",function(){
    $('.Jname').each(function(){

        var position = $(".Jname").offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();

        if (scroll > position - windowHeight+300){
        $(".ryuimg").addClass('blurfirst');
          $(".ryu p").addClass('linearfirst');
          $(".uma img").addClass("blursecond");
          $(".uma p").addClass("linearsecond");
        }
    });
});
var winWidth = $(window).width();

if(winWidth >= 450){
    $(window).on("scroll",function(){

        var position = $(".syumi").offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();

        if (scroll > position - windowHeight+300){
            $(".syumiimg div:first-child").addClass("sideIn_L");
            $(".syumiimg div:nth-child(2)").addClass("middleIn");
            $(".syumiimg div:nth-child(3)").addClass("sideIn_R");
            $(".syumi p").addClass("tasyumi");
        }
    });
}else{
    $(".syumiimg div").css({"opacity":1});
    $(".syumi p").addClass("tasyumi");
}
/*SKILL*/
$(window).on("scroll",function(){
    $('.skillLv').each(function(){

        var position = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();

        if (scroll > position - windowHeight + 300){
          $(".skillsmile img:nth-of-type(1)").addClass('smile1');
          $(".traffic div:nth-of-type(-n+3) .skillsmile img:nth-of-type(2),.traffic div:last-child() .skillsmile img:nth-of-type(2)").addClass('smile2');
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
/*CONTACT*/
var copytxt = $(".mail p").text();
console.log(copytxt);

// $(".mail").on("click",function(){
//     navigator.clipboard.writeText(copytxt);
//     alert("メールアドレスがコピーされました");
// })
})