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

    /*about*/
    function todayinfo(){
        var today = new Date();
        $weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        month = today.getMonth()+1;

        $(".week p").text($weekday[today.getDay()]);
        $(".today p").text(month + "/" + today.getDate());
        $(".time p").text(today.getHours()+ ":" +("0" + today.getMinutes()).slice(-2) + ":" + ("0" + today.getSeconds()).slice(-2));
    }
    setInterval(todayinfo,1000);

    

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
        $('.aboutbg').each(function(){

            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scroll > position - windowHeight + 300){
              $(".aboutbg").addClass('flash_box');
            }
        });
        $('.aboutbg').each(function(){

            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scroll > position - windowHeight + 300){
              $(".aboutbg").addClass('flash_box');
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
        $('.contactbg').each(function(){

            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scroll > position - windowHeight + 300){
              $(".contactbg").addClass('flash_box');
            }
        });

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