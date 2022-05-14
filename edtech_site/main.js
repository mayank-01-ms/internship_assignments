const daysDiv = document.getElementById('days');
const hoursDiv = document.getElementById('hours');
const minutesDiv = document.getElementById('minutes');
const secondsDiv = document.getElementById('seconds');

const eventDate = new Date("June 1, 2022 00:00:00");

const timer = setInterval(() => {
    const now = new Date().getTime();
    const timeleft = eventDate - now;

    if(timeleft < 0){
        clearInterval(timer);
        return;
    }
    
    daysDiv.innerHTML = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    hoursDiv.innerHTML = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutesDiv.innerHTML = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    secondsDiv.innerHTML = Math.floor((timeleft % (1000 * 60)) / 1000);
}, 1000);