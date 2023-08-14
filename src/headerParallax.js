export function heroParallax(controller) {
    const parallaxPlane = new ScrollMagic.Scene({
        triggerElement: '#header',
        triggerHook: 0,
        duration:'50%',
        reverse:false,
      }).setTween(TweenMax.to('#header img', 0.1, { x:"50%",y:'10%',scale:0.3, ease:Power0.easeInOut}))
        .addTo(controller);
      
        const parallaxText = new ScrollMagic.Scene({
        triggerElement: '#header',
        triggerHook: 0,
        duration:'20%',
      }).setTween(TweenMax.to('#header div', 0.1, {y:"-100%", ease:Power0.easeNone}))
        .addTo(controller);
}