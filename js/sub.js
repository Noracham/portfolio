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
    $(window).on("scroll",function(){
        $('.worksmob').each(function(){
    
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
    
            if (scroll > position - windowHeight){
            // $(".worksmob").addClass('worksfadeIn');
            // //   $(".worksmob img").addClass('worksIntext');
            //   $(".traiangle").addClass("worksrotate");
            //   $(".worksmob h1").addClass("worksIntext");
            //   $(".worksinfo").addClass("worksInsubtext");
            }
})
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
});
});




/*scrolltest*/
gsap.set(".worksmob",{opacity:0,scale:0.9});

ScrollTrigger.batch(".worksmob",{
    onEnter:batch => gsap.to(batch,{opacity:1,scale:1,duration:0.5}),start:"top 50%",once:true
});

gsap.set(".traiangle",{opacity:0,rotation:110});

ScrollTrigger.batch(".traiangle",{
    onEnter:batch => gsap.to(batch,{opacity:1,rotation:0,duration:0.5,delay:0.5}),start:"top 50%",trigger:"worksmob",once:true
});

gsap.set(".worksmob h1",{opacity:0,x:-200,y:100});

ScrollTrigger.batch(".worksmob h1",{
    onEnter:batch => gsap.to(batch,{opacity:1,x:0,y:0,duration:0.5,delay:0.7,rotation:-40}),trigger:"worksmob",start:"top 80%",once:true
});

gsap.set(".worksinfo",{opacity:0,x:-100});

ScrollTrigger.batch(".worksinfo",{
    onEnter:batch => gsap.to(batch,{opacity:1,x:0,delay:0.8,duration:.5}),start:"top 80%",trigger:"worksmob",once:true
});



});
