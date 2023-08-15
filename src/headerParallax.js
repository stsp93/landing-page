export function heroParallax(controller) {
  const landingScene = new ScrollMagic.Scene({
    triggerElement: '#header',
    triggerHook: 0,
    duration: '50%',
    reverse: false,
  })
    .setTween(TweenMax.to('#header .landing', 0.1, { x: "100%", y: '50%', scale: 0.3, ease: Power0.easeInOut }))
    .on('end', function () {
      
      const departingScene = new ScrollMagic.Scene({
        triggerElement: '#header',
        triggerHook: 0,
        duration: '50%',
        reverse: true,
      }).setTween(TweenMax.from('#header .departing', 0.1, { x: "200%", y: '100%', scale: 0.1, ease: Power0.easeNone }).reverse(true))
        .addTo(controller);
    })
    .addTo(controller);


  const parallaxText = new ScrollMagic.Scene({
    triggerElement: '#header',
    triggerHook: 0,
    duration: '20%',
  }).setTween(TweenMax.to('#header div', 0.1, { y: "-100%", ease: Power0.easeNone }))
    .addTo(controller);
    
}