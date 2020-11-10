$(document).ready(function () {
  jQuery.fn.clickOutside = function (callback) {
    var $me = this;
    $(document).mouseup(function (e) {
      if (!$me.is(e.target) && $me.has(e.target).length === 0) {
        callback.apply($me);
      }
    });
  };
  $("#large-screens .submenu-li").clickOutside(function () { 
    $("#large-screens .submenu-li ul").slideUp("fast")
  })
  $("#large-screens .languages a").click(function (e) {
    e.preventDefault();
    $("#large-screens .languages ul").show()
    $("#large-screens .languages.active ul").hide()
    $(this).parent().toggleClass("active")
  })
  $("#large-screens .submenu-li a.open-sub").click(function (e) {
    e.preventDefault();
    $(this).next().next().slideToggle("fast")
  })
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
  $(window).scroll(function () { 
    if (window.scrollY > 100) {
      $("#large-screens").addClass("active")
    }
    else{
      $("#large-screens").removeClass("active")
    }
  });
  $("#large-screens a").hover(
    function() {
      $("#large-screens .menu-a").addClass( "active" );
      $(this).removeClass( "active" );
    }, function() {
      $( "#large-screens a" ).removeClass( "active" );
    }
  );
});