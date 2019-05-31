

// days.textContent = t.days + ' ' + ((((dec = t.days % 100) >= 11 && dec <= 19) || (dec = t.days % 10) >= 5 || dec === 0) ? 'дней' : (dec === 1 ? 'день' : 'дня'));
//
// hours.textContent = t.hours + ' ' + ((((h = t.hours % 100) >= 11 && h <= 19) || (h = t.hours % 10) >= 5 || h === 0) ? 'часов' : (h === 1 ? 'час' : 'часа'));
// minutes.textContent = t.minutes + ' ' + ((((m = t.minutes % 100) >= 11 && m <= 19) || (m = t.minutes % 10) >= 5 || m === 0) ? 'минут' : (m === 1 ? 'минута' : 'минуты'));
// seconds.textContent = t.seconds + ' ' + ((((s = t.seconds % 100) >= 11 && s <= 19) || (s = t.seconds % 10) >= 5 || s === 0) ? 'секунд' : (s === 1 ? 'секунда' : 'секунды'));


'use strict';


console.log('Первая задача:');
let str, dec, n;

for(let i = 0; i <= 59; i++) {

    n = i;
    str = n + ' ' + ((((dec = n%100) >= 11 && dec <= 19) || (dec = n%10) >= 5 || dec === 0) ? 'минут' : (dec === 1 ? 'минута' : 'минуты'));
    console.log(str);

}

for(let i = 0; i <= 23; i++) {

    n = i;
    str = n + ' ' + ((((dec = n%100) >= 11 && dec <= 19) || (dec = n%10) >= 5 || dec === 0) ? 'часов' : (dec === 1 ? 'час' : 'часа'));
    console.log(str);

}

for(let i = 0; i <= 31; i++) {

    n = i;
    str = n + ' ' + ((((dec = n%100) >= 11 && dec <= 19) || (dec = n%10) >= 5 || dec === 0) ? 'дней' : (dec === 1 ? 'день' : 'дня'));
    console.log(str);

}
