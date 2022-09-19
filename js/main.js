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
        // if($(".menu input").prop("checked")==false){
        //     $(this).css("left","75px");
        // }else if($(".menu input").prop("checked")==true){
        //     console.log("OK");
        //     $(this).css("left","0px");
        // }
    })

    $(window).on("scroll",function(){
        $('.arrow').each(function(){

            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            console.log(windowHeight);

            if (scroll > position - windowHeight + 400){
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
        // $(".twitter p").prop("id","");
    }
);
/*ABOUT*/
$(window).on("scroll",function(){
    $('.Ename').each(function(){

        var position = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();

        console.log(windowHeight);

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

        console.log(windowHeight);

        if (scroll > position - windowHeight+500){
        $(".ryuimg").addClass('blurfirst');
          $(".ryu p").addClass('linearfirst');
          $(".uma img").addClass("blursecond");
          $(".uma p").addClass("linearsecond");
        }
    });
});




})