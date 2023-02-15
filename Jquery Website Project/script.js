let index = 0;

const totalWorkItems = $(".work-item").length;

$(document).ready(function(){
$(window).on("load",function(){
    $(".preloader").addClass("loaded");
});
$(".nav-toggle").click(function(){
    $(".header .nav").slideToggle();
})
});
$(".header .nav a").click(function(){
    if($(window).width()<768){
        $(".header .nav").slideToggle();
    }
})
$(window).scroll(function(){
    if($(this).scrollTop()>100){
        $(".header").addClass("fixed");
    }else{
        $(".header").removeClass("fixed")
    }
})
$("a").on('click',function(event){
    if(this.hash !== ""){
        event.preventDefault();
        var hash = this.hash;
        $('html,body').animate({
            scrollTop : $(hash).offset().top
        },800,function(){
            window.location.hash = hash;
        })
    }
})
$("#button").click(function(){
    $("#dialog").dialog("open");
})
$("#dialog").dialog({
    title: "Thank you for contacting",
    closeOnEscape: false,
    modal: true,
    autoOpen: false
})