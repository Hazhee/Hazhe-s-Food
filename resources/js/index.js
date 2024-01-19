$(document).ready(function(){
    $(".features").waypoint(function(direction){
        if(direction=="down"){
            $("nav").addClass("sticky");
        }
        else{
            $("nav").removeClass("sticky");
        }
    },{
        offset:"60px"
    });
});

$(".btn-diactive").click(function(){
    $("html").animate({scrollTop: $(".features").offset().top},1000);
});

$(".main-nav a").click(function(){
    var className=$(this).attr("href");
    $("html").animate({scrollTop: $(className).offset().top},1000);
});

$(".js-animate").waypoint(function(direction){
  $(".js-animate").addClass("animated animate__fadeIn");  
},{
    offset:"50%"
});

$(".js-animate-2").waypoint(function(direction){
    $(".js-animate-2").addClass("animated animate__fadeInUp");  
  },{
      offset:"50%"
  });

  $(".js-animate-3").waypoint(function(direction){
    $(".js-animate-3").addClass("animated animate__pulse");  
  },{
      offset:"50%"
  });

//   $(".mobile-nav-icon").click(function(){
//       var nav=$(".main-nav");
//       nav.slideToggle(200);

//   });