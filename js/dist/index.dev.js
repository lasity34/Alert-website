"use strict";

document.querySelectorAll('#tabs>li').forEach(function (el, index) {
  return el.addEventListener('click', function () {
    document.querySelector('#about-tabs-container>.active').classList.remove('active');
    document.querySelector("#about-tabs-container>:nth-child(".concat(index + 1, ")")).classList.add('active');
  });
});
jQuery(document).ready(function () {
  var navHeight = jQuery('.navbar-fixed-top').height();
  jQuery('body').scrollspy({
    target: '#navbar-main',
    offset: 200
  });
  jQuery('#navbar-main [href=#]').click(function (e) {
    e.preventDefault();
  });
});
jQuery(document).ready(function () {
  jQuery('body').scrollspy('refresh');
});
jQuery('.navbar-default').addClass('opaqued');
var windowsHeight = $(window).height();
$('#headerwrap').css('height', windowsHeight + 'px');
$('#headerwrap').backstretch(["./images/developments/tamb 4.jpeg", "./images/developments/tamb 5.jpeg", "./images/developments/tamb 3.jpeg"], {
  duration: 4000,
  fade: 1350
});
jQuery(document).ready(function () {
  jQuery('.service-icon-wrapper, .fade-up, .fade-down, .team-image-wrapper').addClass('no-display');
  jQuery('.service-icon-wrapper').one('inview', function () {
    jQuery(this).addClass('animated bounceIn');
  });
  jQuery('.counter').counterUp({
    delay: 10,
    time: 1000
  });
  jQuery('#single-post-nav a').tooltip();
  jQuery('.team-image-wrapper').one('inview', function () {
    jQuery(this).addClass('animated bounceIn');
  });
  jQuery('.fade-up').one('inview', function () {
    jQuery(this).addClass('animated fadeInUp');
  });
  jQuery('.fade-down').one('inview', function () {
    jQuery(this).addClass('animated fadeInDown');
  });
  var serviceWidth = $('.service-icon-wrapper').width() + 30;
  $('.service-icon-wrapper .icon').css('line-height', serviceWidth + 'px');
  $("#logo-slider").owlCarousel({
    items: 6,
    pagination: true,
    navigationText: ["<i class='el-icon-chevron-left icon-white'></i>", "<i class='el-icon-chevron-right icon-white'></i>"]
  });
  $("#portfolio-carousel").owlCarousel({
    items: 3,
    pagination: false,
    navigation: true,
    navigationText: ["<i class='el-icon-chevron-left icon-white'></i>", "<i class='el-icon-chevron-right icon-white'></i>"]
  });
  $('.launch-lb').magnificPopup({
    type: 'image',
    mainClass: 'mfp-fade'
  });
  $("body").niceScroll({
    cursorcolor: '#202020',
    cursorwidth: 15,
    cursorborderradius: 0,
    cursorborder: '0px solid #fff'
  });
});
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

function myFunction(x) {
  x.classList.toggle("change");
}
/* testimonials */
// vars


'use strict';

var testim = document.getElementById("testim"),
    testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
    touchStartPos,
    touchEndPos,
    touchPosDiff,
    ignoreTouch = 30;
;

window.onload = function () {
  // Testim Script
  function playSlide(slide) {
    for (var k = 0; k < testimDots.length; k++) {
      testimContent[k].classList.remove("active");
      testimContent[k].classList.remove("inactive");
      testimDots[k].classList.remove("active");
    }

    if (slide < 0) {
      slide = currentSlide = testimContent.length - 1;
    }

    if (slide > testimContent.length - 1) {
      slide = currentSlide = 0;
    }

    if (currentActive != currentSlide) {
      testimContent[currentActive].classList.add("inactive");
    }

    testimContent[slide].classList.add("active");
    testimDots[slide].classList.add("active");
    currentActive = currentSlide;
    clearTimeout(testimTimer);
    testimTimer = setTimeout(function () {
      playSlide(currentSlide += 1);
    }, testimSpeed);
  }

  testimLeftArrow.addEventListener("click", function () {
    playSlide(currentSlide -= 1);
  });
  testimRightArrow.addEventListener("click", function () {
    playSlide(currentSlide += 1);
  });

  for (var l = 0; l < testimDots.length; l++) {
    testimDots[l].addEventListener("click", function () {
      playSlide(currentSlide = testimDots.indexOf(this));
    });
  }

  playSlide(currentSlide); // keyboard shortcuts

  document.addEventListener("keyup", function (e) {
    switch (e.keyCode) {
      case 37:
        testimLeftArrow.click();
        break;

      case 39:
        testimRightArrow.click();
        break;

      case 39:
        testimRightArrow.click();
        break;

      default:
        break;
    }
  });
  testim.addEventListener("touchstart", function (e) {
    touchStartPos = e.changedTouches[0].clientX;
  });
  testim.addEventListener("touchend", function (e) {
    touchEndPos = e.changedTouches[0].clientX;
    touchPosDiff = touchStartPos - touchEndPos;
    console.log(touchPosDiff);
    console.log(touchStartPos);
    console.log(touchEndPos);

    if (touchPosDiff > 0 + ignoreTouch) {
      testimLeftArrow.click();
    } else if (touchPosDiff < 0 - ignoreTouch) {
      testimRightArrow.click();
    } else {
      return;
    }
  });
};
//# sourceMappingURL=index.dev.js.map
