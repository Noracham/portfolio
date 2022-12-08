$(function(){
    /*ABOUT*/
$(window).on("scroll",function(){
    $('.Ename').each(function(){

        let position = $(".Jname").offset().top;
        let scroll = $(window).scrollTop();
        let windowHeight = $(window).height();

        if (scroll > position - windowHeight){
          $(".EnameAnime1").addClass('linearfirst');
          $(".EnameAnime2").addClass('linearsecond');
          $(".EnameAnime3").addClass('blurthird');
        }
    });
});

let n=0;

$(window).on("scroll",function(){
    $('.Jname').each(function(){

        let position = $(".Jname").offset().top;
        let scroll = $(window).scrollTop();
        let windowHeight = $(window).height();

        if (scroll > position - windowHeight){
        $(".ryuimg").addClass('blurfirst');
          $(".ryu p").addClass('linearfirst');
          $(".uma img").addClass("blursecond");
          $(".uma p").addClass("linearsecond");
        }
    });
});
});