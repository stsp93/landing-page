const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: "#navigation",
  triggerHook: 0
}).setPin('#navigation', { pushFollowers: false })
  .addTo(controller);


  $('.nav-link').on('click',function() {
    $('.navbar-collapse').collapse('hide');
  });