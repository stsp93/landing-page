const cities = ['Pittsburgh',
    'Alexandria',
    'Birmingham',
    'Sacramento',
    'Vancouver',
    'Montevideo',
    'Philadelphia',
    'Johannesburg'];


export const currentCity = cities[Math.floor(Math.random() * cities.length)].toUpperCase();
let intervalId;

export function arrivalScene(controller) {
    $('clock')
    const arrivalScene = new ScrollMagic.Scene({
        triggerElement: '#section1',
        offset: 200,
        duration: 1000,
    }).on('enter', function (e) {
        const spanEl = $('#section1 span');

        if (spanEl.text() === currentCity) return;
        let index = 0;
        intervalId = setInterval(function () {
            if (index < currentCity.length + 5) index++;
            spanEl.html(generateCityChars(index));
        }, 200)
    }).on('end', function () {
        clearInterval(intervalId);
        $('#section1 span').html(currentCity.split('').map(c => `<strong>${c}</strong>`));
    })
        .addTo(controller);
}

function generateCityChars(index) {
    let cityString = '';
    const uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    for (let i = 0; i < currentCity.length; i++) {
        if (i > index) {
            cityString += `<strong>&nbsp;</strong>`;
        } else if (i <= index && i >= index - 5) {
            const randomIndex = Math.floor(Math.random() * currentCity.length);
            cityString += `<strong>${uppercaseAlphabet[randomIndex]}</strong>`;
        }
        else {
            cityString += `<strong>${currentCity[i]}</strong>`;
        }
    }

    return cityString;
}

