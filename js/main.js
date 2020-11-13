$(document).ready(function () {
  jQuery.fn.clickOutside = function (callback) {
    var $me = this;
    $(document).mouseup(function (e) {
      if (!$me.is(e.target) && $me.has(e.target).length === 0) {
        callback.apply($me);
      }
    });
  };

  $("#about .play-video").click(function (e) {
    e.preventDefault();
    $(this).find("img").addClass("active")
    $(this).parent().find("iframe").addClass("d-block")
  })
  $('#slider .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dots: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    dots: true
  });
  $('#brands .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:3,
            nav:true
        },
        768:{
            items:5,
            nav:true
        },
        1000:{
            items:8,
            nav:true
        }
    }
  });
  $(window).scroll(function () { 
    if (window.scrollY > 100) {
      $("#large-screens").addClass("active")
    }
    else{
      $("#large-screens").removeClass("active")
    }
  });
  $("#large-screens .menu-a").hover(
    function() {
      $("#large-screens .menu-a").parent().addClass( "active" );
      $(this).parent().removeClass( "active" );
    }, function() {
      $( "#large-screens a" ).parent().removeClass( "active" );
      $(this).removeClass("hovered")
    }
  );
  $("#large-screens .submenu").hover(
    function() {
      $("#large-screens .menu-a").parent().addClass( "active" );
      $(this).parent().removeClass( "active" );
      $(this).parent().find("a").addClass("hovered")
    }, function() {
      $( "#large-screens a" ).parent().removeClass( "active" );
      $(this).parent().find("a").removeClass("hovered")
    }
  );
  $("footer .menu a").hover(
    function() {
      $("footer .menu a").addClass( "active" );
      $(this).removeClass( "active" );
    }, function() {
      $("footer .menu a").removeClass( "active" );
    }
  );
  $("#small-screens .open-menu").click(function (e) {
    e.preventDefault();
    $("#small-screens nav").toggleClass("active")
    $(this).find(".close-img").toggleClass("d-none")
    $(this).find(".open-img").toggleClass("d-none")
  })
  $("#small-screens a.open-sub").click(function (e) {
    e.preventDefault()
    $(this).next().slideToggle("fast")
    $(this).find("i").toggleClass("active")
    $("body").addClass("hidden")
    $("body").toggleClass("hidden")
  })
  $("#small-screens a.open-sub").clickOutside(function () {
    $("#small-screens .submenu").slideUp("fast")
    $(this).find("i").removeClass("active")
    $("body").removeClass("hidden")
  })
});