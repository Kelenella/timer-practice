import './sass/main.scss';


// console.log(new Date("1995-12-17T03:24:00"));

// for (let i = 3; i > 0; i--) {
//     setTimeout(() => console.log(i), i * 1000);
// }
///////////////////////////////////////////////////////

class StopWatch {
    constructor() {
        this.refs = {
            start: document.querySelector('#start'),
            stop: document.querySelector('#stop'),
            sec: document.querySelector('.seconds'),
            min: document.querySelector('.minutes'),
            hours: document.querySelector('.hours'),
        };

        this.id = null;
        this.startDate = null;
        this.timerStart = this.timerStart.bind(this)
        this.timerStop = this.timerStop.bind(this)
        
    }
    calc = () => {
        const currentDate = Date.now();
        const delta = currentDate - this.startDate;
        const convertResult = delta / 1000;
        const sec = Math.floor(convertResult % 60);
        const min = Math.floor(convertResult / 60);
        const hours = Math.floor(convertResult / 60 / 60);
        console.log(hours);
        this.refs.sec.textContent = sec < 10 ? `0${sec}` : sec;
        this.refs.min.textContent = min < 10 ? `0${min}` : min;
    }
    timerStart = () => {
        this.startDate = Date.now();
        this.id = setInterval(this.calc, 1000);
};
    timerStop = () => {
        clearInterval(this.id)
};
    init() {
        this.refs.start.addEventListener('click', this.timerStart);
        this.refs.stop.addEventListener('click', this.timerStop);
    }
}

const watch = new StopWatch();
watch.init();

// const refs = {
//     start: document.querySelector('#start'),
//     stop: document.querySelector('#stop'),
//     sec: document.querySelector('.seconds'),
//     min: document.querySelector('.minutes'),
// }
// зафиксировать дату старта
// посчитать сколько времени прошло от старта

// let id = null;
// let startDate = null;

// function calc() {
//     const currentDate = Date.now();
//     const delta = currentDate - startDate;
//     const convertResult = delta / 1000;
//     const sec = Math.floor(convertResult % 60);
//     const min = Math.floor(convertResult / 60);
//     refs.sec.textContent = sec < 10 ? `0${sec}` : sec;
//     refs.min.textContent = min < 10 ? `0${min}` : min;
//     // console.log(Math.floor(delta/1000));
// }

// function timerStart() {
//     startDate = Date.now();
//     id = setInterval(calc, 1000);
// }
// function timerStop() {
//     clearInterval(id)
// }

// refs.start.addEventListener('click', timerStart)
// refs.stop.addEventListener('click', timerStop)