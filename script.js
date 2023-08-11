const controller = new ScrollMagic.Controller();


// nav scene
const navScene = new ScrollMagic.Scene({
  triggerElement: "#landingBtn",
  triggerHook: 0
}).addTo(controller);

navScene.on("enter", function (event) {
  $('.navigation').css({
    position: 'fixed',
    top: 0,
    opacity: 0.9,
  })
});

navScene.on("leave", function (event) {
  $('.navigation').css({
    position: 'relative',
  })
});

// collapse nav on link click
$('.nav-link, .navbar-brand').on('click', function () {
  $('.navbar-collapse').collapse('hide');
});