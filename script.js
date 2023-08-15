import { arrivalScene } from "./src/arrivalScene.js";
import { heroParallax } from "./src/headerParallax.js";
import { navScene } from "./src/navScene.js";

const controller = new ScrollMagic.Controller();

navScene(controller);
heroParallax(controller);
arrivalScene(controller);

// section reveal
$('section').each(function () {
  const scene = new ScrollMagic.Scene({
    triggerElement: this,
  }).setClassToggle(this, 'fade-in')
    .addTo(controller)
});


// set local time

const now = new Date();
const hours = now.getHours().toString().padStart(2, '0');
const minutes = now.getMinutes().toString().padStart(2, '0');

$('#time').text(`${hours}:${minutes}`);

console.log((hours/12)*360);
const minutesDeg = (minutes/60) * 360;
const hoursDeg = (hours/12)*360 + minutesDeg/12 ;
$('.hoursArrow').css({
  transform:`translate(-50%, -100%) rotateZ(${hoursDeg}deg)`
})
$('.minutesArrow').css({
  transform:`translate(-50%, -100%) rotateZ(${minutesDeg}deg)`
})

const clockScene = new ScrollMagic.Scene({
  triggerElement: '#section2',
  duration: "30%",
}).setTween(TweenMax.to('.clock',0.1, {rotationX:720, ease: Power0.easeNone})).addIndicators({
  colorStart: 'blue',
  colorEnd: 'red',
  colorStart: 'yellow',
}).addTo(controller)
  





