const daysELement = document.getElementById('days');
const hoursELement = document.getElementById('hours');
const minutesELement = document.getElementById('minutes');
const secondsELement = document.getElementById('seconds');

const billeterie = 'July 15, 2022 0:00:00';

function countdown() {
    const billeterieDate = new Date(billeterie);
    const currentDate = new Date();

    const totalSeconds = (billeterieDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24); 
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;       

    daysELement.innerHTML = days;
    hoursELement.innerHTML = formatTime(hours);
    minutesELement.innerHTML = formatTime(mins);
    secondsELement.innerHTML = formatTime(seconds);
}

    function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);
