import { navScene } from "./src/navScene.js";

const controller = new ScrollMagic.Controller();

navScene(controller);


$('section').each(function() {
  const scene = new ScrollMagic.Scene({
    triggerElement: this,
  }).addIndicators({
    colorStart:'red',
    colorEnd:'black',
    colorTrigger: 'blue'
  }).setClassToggle(this,'fade-in')
  .addTo(controller)

})
