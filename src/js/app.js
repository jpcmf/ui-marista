//
// js files
// --------------------

// import 'bootstrap/js/modal.js';
// import 'jquery/dist/jquery.js';

//
// stylesheet files
// --------------------

// import '../css/style.css';
// import '../styl/main.styl';
import '../sass/main.scss';

//
// magic goes here
// --------------------

;(function(window, document){
  $('h1').click(() => alert('It\'s only a test'));
})(window, document);

$(document).ready(function() {

  // // breakpoint and up
  // $(window).resize(function () {
  //   if ($(window).width() >= 980) {

  //     // when you hover a toggle show its dropdown menu
  //     $(".navbar-secondary .dropdown-toggle").hover(function () {
  //       $(this).parent().toggleClass("show");
  //       $(this).parent().find(".dropdown-menumega").toggleClass("show");
  //     });

  //     // hide the menu when the mouse leaves the dropdown
  //     $(".navbar-secondary .dropdown-menumega").mouseleave(function () {
  //       $(this).removeClass("show");
  //     });

  //     // do something here
  //   }
  // });

  // open subnav of megamenu items on hover
  // --------------------------------------
  $(".nav-item--collapse").hover(
    function () {
      $(this).children('.collapse').collapse('show');
    }, function () {
      $(this).children('.collapse').collapse('hide');
    }
  );

  // multi carousel home
  // --------------------------------------
  $('.next').click(function () { $('.carousel--multi').carousel('next'); return false; });
  $('.prev').click(function () { $('.carousel--multi').carousel('prev'); return false; });
  // $('.carousel--multi').carousel({
  //   interval: false
  // });

  // $('.carousel--multi .carousel-item').each(function () {
  //   var next = $(this).next();
  //   if (!next.length) {
  //     next = $(this).siblings(':first');
  //   }
  //   next.children(':first-child').clone().appendTo($(this));

  //   if (next.next().length > 0) {
  //     next.next().children(':first-child').clone().appendTo($(this));
  //   } else {
  //     $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  //   }
  // });

});
