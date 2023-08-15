import { arrivalScene } from "./src/arrivalScene.js";
import { clocksScene } from "./src/clocksScene.js";
import { heroParallax } from "./src/headerParallax.js";
import { navScene } from "./src/navScene.js";

const controller = new ScrollMagic.Controller();

navScene(controller);
heroParallax(controller);
arrivalScene(controller);
clocksScene(controller);

// section reveal
$('section').each(function () {
  const scene = new ScrollMagic.Scene({
    triggerElement: this,
  }).setClassToggle(this, 'fade-in')
    .addTo(controller)
});








  





