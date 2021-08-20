import './sass/main.scss';


// console.log(new Date("1995-12-17T03:24:00"));

// for (let i = 3; i > 0; i--) {
//     setTimeout(() => console.log(i), i * 1000);
// }
///////////////////////////////////////////////////////
const refs = {
    start: document.querySelector('#start'),
    stop: document.querySelector('#stop')
}
// зафиксировать дату старта
// посчитать сколько времени прошло от старта

let id = null;
let startDate = null;

function logger() {
    console.log('run');
}
function timerStart() {
    startDate = Date.now()
    id = setInterval(logger, 1000);
    console.log(startDate);
}
function stopTimer() {
    clearInterval(id)
}

refs.start.addEventListener('click', timerStart)
refs.stop.addEventListener('click', stopTimer)