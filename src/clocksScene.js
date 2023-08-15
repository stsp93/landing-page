
import { currentCity } from './arrivalScene.js';

const cityTimezones = {
    'PITTSBURGH': 'America/New_York',
    'NEW YORK': 'America/New_York',
    'LONDON': 'Europe/London',
    'ALEXANDRIA': 'Africa/Cairo',
    'BIRMINGHAM': 'Europe/London',
    'SACRAMENTO': 'America/Los_Angeles',
    'VANCOUVER': 'America/Vancouver',
    'MONTEVIDEO': 'America/Montevideo',
    'PHILADELPHIA': 'America/New_York',
    'JOHANNESBURG': 'Africa/Johannesburg'
};

export function clocksScene(controller) {
    const animations = [
        { rotationX: -350, rotationY: 10, ease: Power0.easeNone },
        { rotationX: -700, rotationY: 10, scale: 0.5, ease: Power0.easeNone },
        { rotationX: -10, rotationY: 700, scale: 1.4, ease: Power4.easeIn },
    ]
    $('.clock').each(function(i){
        const clockScene = new ScrollMagic.Scene({
            triggerElement: '#section2',
            duration: "70%",
        }).setTween(TweenMax.to(`.clock${i+1}`, 0.1,animations[i] ))
            .addTo(controller)
    }) 
    
}

// set clock times
const clockCities = [currentCity, 'NEW YORK', 'LONDON']
$('.carousel-item').each((i, el) => {
    const { hours, minutes } = getCityTime(cityTimezones[clockCities[i]]);

    $(el).find('#time').text(`${hours}:${minutes}`);
    $(el).find('#city').text(clockCities[i]);
    $(el).find('.hoursArrow').css({
        transform: `translate(-50%, -100%) rotateZ(${calculateRotationDeg({ hours, minutes }).hoursDeg}deg)`
    })

    $(el).find('.minutesArrow').css({
        transform: `translate(-50%, -100%) rotateZ(${calculateRotationDeg({ hours, minutes }).minutesDeg}deg)`
    })
})




function calculateRotationDeg({ hours, minutes }) {
    const minutesDeg = (minutes / 60) * 360;
    const hoursDeg = (hours / 12) * 360 + minutesDeg / 12;

    return { hoursDeg, minutesDeg }
}



function getCityTime(timeZone) {
    const options = {
        timeZone: timeZone,
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
    };

    const currentTime = new Date().toLocaleTimeString('en-US', options);
    const [hours, minutes] = currentTime.split(':');

    return {
        hours: hours,
        minutes: minutes
    };
}
