import { heroParallax } from "./src/headerParallax.js";
import { navScene } from "./src/navScene.js";

const controller = new ScrollMagic.Controller();

navScene(controller);
heroParallax(controller);

// section reveal
$('section').each(function () {
  const scene = new ScrollMagic.Scene({
    triggerElement: this,
  }).setClassToggle(this, 'fade-in')
    .addTo(controller)
});

function getLocalTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

$('#time').text(getLocalTime());




