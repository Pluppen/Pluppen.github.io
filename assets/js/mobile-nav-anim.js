$(document).ready(function(){
  $(".menu-btn").click(function(){
    $(this).animate({top: "-200px"}, 250);
    $(".mob-nav").animate({left: "0px"}, 500);
  });
  $(".icon-close").click(function(){
    $(".mob-nav").animate({left: "-100vw"}, 500);
    $(".menu-btn").animate({top: "20px"}, 500);
  });
});
