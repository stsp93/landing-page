import { navScene } from "./src/navScene.js";

const controller = new ScrollMagic.Controller();

navScene(controller);

// section reveal
// $('section').each(function () {
//   const scene = new ScrollMagic.Scene({
//     triggerElement: this,
//   }).setClassToggle(this, 'fade-in')
//     .addTo(controller)

// })

//header parallax effect

const parallaxPlane = new ScrollMagic.Scene({
  triggerElement: '#header',
  triggerHook: 0,
  duration:'50%',
}).addIndicators({
  colorStart: 'red',
  colorEnd: 'black',
  colorTrigger: 'blue'
}).setTween(TweenMax.to('#header img', 0.1, {y:"20%", x:"50%", ease:Power0.easeInOut}))
  .addTo(controller);

  const parallaxText = new ScrollMagic.Scene({
  triggerElement: '#header',
  triggerHook: 0,
  duration:'50%',
}).addIndicators({
  colorStart: 'red',
  colorEnd: 'black',
  colorTrigger: 'blue'
}).setTween(TweenMax.to('#header div', 0.1, {y:"-150%", ease:Power0.easeNone}))
  .addTo(controller);

