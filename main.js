//  ______     __ __      ___     _           _    _____
// |  _ \ \   / / \ \    / (_)   | |         | |  / ____|
// | |_) \ \_/ /   \ \  / / _ ___| |__   __ _| | | (___
// |  _ < \   /     \ \/ / | / __| '_ \ / _` | |  \___ \
// | |_) | | |       \  /  | \__ \ | | | (_| | |  ____) |
// |____/  |_|        \/   |_|___/_| |_|\__,_|_| |_____/



// FOR SMOOTH SCROLLING TO ANCHOR
$(document).ready(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});

// $( document ).ready(function() {
//   if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
//     var h = $('header').height();
//     $('header').height(h);
//   }
// });

// Opening Sections
$(document).ready(function() {

    $('.section').click(function() {
        $('.section').not(this).addClass('sectionHovers').removeClass('sectionClick');
        $(this).toggleClass('sectionHovers').toggleClass('sectionClick');
    });

});

// // PARALLAX
// $(document).ready(function() {
//   var parallax = document.querySelectorAll("header"),
//   speed = 0.25;
//
//   window.onscroll = function(){
//     [].slice.call(parallax).forEach(function(el,i){
//
//       var windowYOffset = window.pageYOffset,
//       elBackgrounPos = "50% " + (windowYOffset * speed) + "px";
//
//       el.style.backgroundPosition = elBackgrounPos;
//
//     });
//   };
// });

// END OF LOADING
$(document).ready(function() {

	setTimeout(function(){
		$('body').addClass('loaded');
	}, 1000);

});
