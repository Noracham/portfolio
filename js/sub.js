$(function(){





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
    onEnter:batch => gsap.to(batch,{opacity:1,x:0,y:0,duration:0.5,delay:0.9,rotation:-40}),trigger:"worksmob",start:"top 80%",once:true
});

gsap.set(".worksinfo",{opacity:0,x:-100});

ScrollTrigger.batch(".worksinfo",{
    onEnter:batch => gsap.to(batch,{opacity:1,x:0,delay:1.1,duration:.5}),start:"top 80%",trigger:"worksmob",once:true
});



});
