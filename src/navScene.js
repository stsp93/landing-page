export function navScene(controller) {
    
const navScene = new ScrollMagic.Scene({
    triggerElement: "#landingBtn",
    triggerHook: 0
  }).addTo(controller);
  
  navScene.on("enter", function (event) {
    $('.navigation').css({
      position: 'fixed',
      'background-color': generateRGB(),
      top: 0,
      opacity: 0.9,
    })
  });
  
  function generateRGB() {
    const r = Math.round(Math.random() * 64 + 191);
    const g = Math.round(Math.random() * 64 + 191);
    const b = Math.round(Math.random() * 64 + 191);
  
    return `rgb(${r}, ${g}, ${b})`
  }
  
  navScene.on("leave", function (event) {
    $('.navigation').css({
      position: 'relative',
    })
  });
  
  // collapse nav on link click
  $('.nav-link, .navbar-brand').on('click', function () {
    $('.navbar-collapse').collapse('hide');
    $('.nav-link').removeClass('active')
    $(this).addClass('active')
  });
}