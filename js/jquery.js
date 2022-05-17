$(function(){
    new Vivus("firstCircleImg", {
        duration: 150,
        start: "autostart",
        type: "oneByOne",
        animTimingFunction: Vivus.EASE
    });

    setTimeout(function(){
        $('.start-img').fadeIn(1600)
    },3000);
    setTimeout(function(){
        $('.start').fadeOut(1000)
    },7000);
})