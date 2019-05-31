
    'use strict';

//timer

    let deadline = '2020-01-01';

    function timeRemain(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / 1000 / 60 / 60 ) % 24),
            days = Math.floor((t / (1000 * 60 * 60*24)));

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function clock(id, endTime) {
        let timer = document.getElementById(id),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);


        function updateClock() {
            let t = timeRemain(endTime), dec,s,m,h;
            days.textContent = t.days + ' ' + ((((dec = t.days % 100) >= 11 && dec <= 19) || (dec = t.days % 10) >= 5 || dec === 0) ? 'дней' : (dec === 1 ? 'день' : 'дня'));

            hours.textContent = t.hours + ' ' + ((((h = t.hours % 100) >= 11 && h <= 19) || (h = t.hours % 10) >= 5 || h === 0) ? 'часов' : (h === 1 ? 'час' : 'часа'));
            minutes.textContent = t.minutes + ' ' + ((((m = t.minutes % 100) >= 11 && m <= 19) || (m = t.minutes % 10) >= 5 || m === 0) ? 'минут' : (m === 1 ? 'минута' : 'минуты'));
            seconds.textContent = t.seconds + ' ' + ((((s = t.seconds % 100) >= 11 && s <= 19) || (s = t.seconds % 10) >= 5 || s === 0) ? 'секунд' : (s === 1 ? 'секунда' : 'секунды'));

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    clock('timer', deadline);





