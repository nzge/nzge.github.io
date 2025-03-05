//At the document ready event
$(function(){
  new WOW().init(); 
});

//also at the window load event
$(window).on('load', function(){

     new WOW().init(); 
});