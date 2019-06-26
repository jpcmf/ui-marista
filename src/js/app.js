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
  $('.next1').click(function () { $('.carousel--multi').carousel('next'); return false; });
  $('.prev1').click(function () { $('.carousel--multi').carousel('prev'); return false; });

  // tabs bs
  // ---------------------------------------
  // $('#ourPresenceTabs a').on('click', function (e) {
    //   e.preventDefault()
    //   $(this).tab('show')
    // })

  // news carousel
  // --------------------------------------
  // $('#carouselExample').on('slide.bs.carousel', function (e) {

  //   var $e = $(e.relatedTarget);
  //   var idx = $e.index();
  //   var itemsPerSlide = 4;
  //   var totalItems = $('.carousel-item').length;

  //   if (idx >= totalItems - (itemsPerSlide - 1)) {
  //     var it = itemsPerSlide - (totalItems - idx);
  //     for (var i = 0; i < it; i++) {
  //       // append slides to end
  //       if (e.direction == "left") {
  //         $('.carousel-item').eq(i).appendTo('.carousel-inner');
  //       }
  //       else {
  //         $('.carousel-item').eq(0).appendTo('.carousel-inner');
  //       }
  //     }
  //   }
  // });


})(window, document);

$(document).ready(function () {
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

});
