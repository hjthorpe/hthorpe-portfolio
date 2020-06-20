'use strict';
$().ready(function(){
  $('.menu-toggler').on('click', function(){
    $(this).toggleClass('open');
    $('.top-nav').toggleClass('open');
  })
});

$().ready(function(){
  $('.top-nav .nav-link').on('click', function(){
    $('.menu-toggler').removeClass('open');
    $('.top-nav').removeClass('open');
  })
});

$('#linkedin').on('click',function(event){
 window.open("https://www.linkedin.com/in/hannah-thorpe-b0a8531a3/", "_blank");
});


$('.up').on('click',function(event){
  window.scrollTo({top: 0,behavior: 'smooth'});
});
