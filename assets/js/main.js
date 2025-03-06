//At the document ready event
document.addEventListener("DOMContentLoaded", function () {
  new WOW().init();
});

//also at the window load event
$(window).on('load', function(){
     new WOW().init(); 
});

// JavaScript function to go back to the previous page
function goBack() {
    window.history.back();
}
