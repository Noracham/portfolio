$(function(){
    /*ABOUT*/
$(window).on("scroll",function(){
    $('.Ename').each(function(){

        var position = $(".Jname").offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();

        if (scroll > position - windowHeight){
          $(".EnameAnime1").addClass('linearfirst');
          $(".EnameAnime2").addClass('linearsecond');
          $(".EnameAnime3").addClass('blurthird');
        }
    });
});

var n=0;

$(window).on("scroll",function(){
    $('.Jname').each(function(){

        var position = $(".Jname").offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();

        if (scroll > position - windowHeight){
        $(".ryuimg").addClass('blurfirst');
          $(".ryu p").addClass('linearfirst');
          $(".uma img").addClass("blursecond");
          $(".uma p").addClass("linearsecond");
        }
    });
});
// var winWidth = $(window).width();

// if(winWidth >= 450){
//     $(window).on("scroll",function(){

//         var position = $(".syumi").offset().top;
//         var scroll = $(window).scrollTop();
//         var windowHeight = $(window).height();

//         if (scroll > position - windowHeight+300){
//             $(".syumiimg div:first-child").addClass("sideIn_L");
//             $(".syumiimg div:nth-child(2)").addClass("middleIn");
//             $(".syumiimg div:nth-child(3)").addClass("sideIn_R");
//             $(".syumi p").addClass("tasyumi");
//         }
//     });
// }else{
//     $(".syumiimg div").css({"opacity":1});
//     $(".syumi p").addClass("tasyumi");
// }

});