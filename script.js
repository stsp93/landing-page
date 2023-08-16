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
    reverse: false,
  }).setClassToggle(this, 'fade-in')
    .addTo(controller)
});


const plane = $('.plane');
const runway = $('.runway');
const planeWidth = plane.width();
const runwayLength = $('.runway').width();

let flyTimeline = new gsap.timeline({ repeat: -1 });
flyTimeline.pause()
let landingTimeline = new gsap.timeline();
$('#flyBtn').on('click', function () {
  console.log(flyTimeline.isActive());
  if(flyTimeline.isActive()) return;
  if(flyTimeline.paused()) flyTimeline.restart();
  

  flyTimeline
    .fromTo(plane, 4, { x: 0 }, { x: runwayLength, ease: Power4.easeIn })
    .fromTo(plane, 1, { y: 5 }, { y: -100, scale: 0.6, ease: Power4.easeIn }, 3)
    .fromTo(plane, 1, { x: -planeWidth }, { x: runwayLength, ease: Power0.easeNone })
    .fromTo(plane, 1, { x: -planeWidth }, { x: runwayLength, ease: Power0.easeNone })
    .fromTo(plane, 1, { x: -planeWidth }, { x: runwayLength, ease: Power0.easeNone })
    .fromTo(plane, 1, { x: -planeWidth }, { x: runwayLength, ease: Power0.easeNone })
    .add('landing')
    .fromTo(plane, 5, { x: - planeWidth }, { x: runwayLength, scale: 1, ease: Power4.easeOut })
    .to(plane, 2, { y: 5, ease: Power4.easeOut }, 'landing');
})

$('#stopBtn').on('click', function () {
  if(landingTimeline.isActive()) return;

   

  let yToLand = (runway.height() - (plane.position().top + plane.height()))
  console.log(yToLand);
  yToLand > 30 ? yToLand -= 100 : '';
  landingTimeline.to(plane, 2, { y: yToLand, x: plane.offset().left + 100 })
  flyTimeline.pause();
})












