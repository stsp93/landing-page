
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
    'JOHANNESBURG': 'Africa/Johannesburg',
    'SOFIA': 'Europe/Sofia',
    'TOKYO': 'Asia/Tokyo',
};

export function clocksScene(controller) {
    const tweenVars = [
        {y:'-100%',x:"-200%", rotationX:90, rotationY:120, ease:Power1.easeIn},
        {transform: 'scale3d(0.6,0.6,0.6) rotateX(120deg) rotateY(30deg) rotateZ(360deg)' ,ease:Power3.easeOut},
        {y:'-200%', rotationX:90, rotationY:120},
        {transform: 'scale3d(1.5,1.5,1.5) rotateX(290deg) rotateY(230deg) rotateZ(360deg) translateX(-100px) translateY(-50px)' , ease:Power1.easeInOut},
        {y:'-200%', rotationX:90, rotationY:-120, }
    ]
    $('.clock').each(function(i) {
        const clocksScene = new ScrollMagic.Scene({
            triggerElement:this,
            duration:'100%',
            offset: -100
        }).setTween(TweenMax.to(this, 0.1, tweenVars[i]))
        .addIndicators({
            colorStart:'black',
            colorEnd:'black',
            colorTrigger:'black',
        }).addTo(controller)
    })
}

// set clock times
const clockCities = [currentCity, 'NEW YORK', 'LONDON', 'SOFIA', 'TOKYO'];
$('.clock-wrapper').each((i, el) => {
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
