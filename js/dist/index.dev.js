"use strict";

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
$('#headerwrap').backstretch(["./images/home images/ImageHeader.jpeg", "images/bg2.jpg", "images/bg3.jpg"], {
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
//# sourceMappingURL=index.dev.js.map
