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


// set local time
$('#time').text(function () {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
});


// arrival scene

const cities = ['Pittsburgh',
  'Alexandria',
  'Birmingham',
  'Sacramento',
  'Vancouver',
  'Montevideo',
  'Philadelphia',
  'Johannesburg'];
const currentCity = cities[Math.floor(Math.random() * cities.length)].toUpperCase();
let intervalId;

const arrivalScene = new ScrollMagic.Scene({
  triggerElement: '#section1',
  duration: '60%',
  offset: -100,
}).addIndicators({
  colorStart: 'blue',
  colorEnd: 'red',
  colorStart: 'yellow',
}).on('enter', function (e) {
  const spanEl = $('#section1 span');
  
  if(spanEl.text() === currentCity) return;
  let index = 0;
  intervalId = setInterval(function () {
    if(index < currentCity.length + 3) index++;
    spanEl.html(generateCityChars(index));
  }, 250)
}).on('leave', function () {
  clearInterval(intervalId);
  $('#section1 span').html(currentCity.split('').map(c => `<strong>${c}</strong>`));
})
.addTo(controller);

function generateCityChars(index) {
  let cityString = '';
  const uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  for (let i = 0; i < currentCity.length; i++) {
    if(i > index ) {
      cityString += `<strong>&nbsp;</strong>`;
    } else if(i <= index && i >= index-3) {
      const randomIndex = Math.floor(Math.random() * currentCity.length);
      cityString += `<strong>${uppercaseAlphabet[randomIndex]}</strong>`;
    }
    else {
      cityString += `<strong>${currentCity[i]}</strong>`;
    }
  }

  return cityString;
}



