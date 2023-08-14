export function navScene(controller) {
    
  $('section').each(function() {
    const navScene = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0
  }).addTo(controller);

  navScene.on("enter", function () {
    $('.navigation').css({
      'background-color': generateRGB(),
      top: 0,
      opacity: 0.8,
    })
  });

  navScene.on("leave", function () {
    $('.navigation').css({
      opacity: 1,
    })
  });
  })

  
 
  
  function generateRGB() {
    const r = Math.round(Math.random() * 64 + 191);
    const g = Math.round(Math.random() * 64 + 191);
    const b = Math.round(Math.random() * 64 + 191);
  
    return `rgb(${r}, ${g}, ${b})`
  }
  

  
  // collapse nav on link click
  $('.nav-link, .navbar-brand').on('click', function () {
    $('.navbar-collapse').collapse('hide');
    $('.nav-link').removeClass('active')
    $(this).addClass('active')
  });
}