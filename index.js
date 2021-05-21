//console.log('this is my index.js file');
let a;
let date;
let time;

setInterval(() => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    a = new Date();
    date = a.toLocaleDateString(undefined, options);
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    document.getElementById('time').innerHTML = time + '<br>on' + date;
}, 1000);


let brouse = document.getElementById('brouse')
brouse.addEventListener('click', function (e) {
    const options = { hours: 'numeric', minutes: 'numeric', seconds: 'numeric'};
    setInterval(() => {
    a = new Date();
    let time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    time = a.toLocaleTimeString(undefined , options);
    let badge = document.getElementById('badge');
    badge.innerHTML = time;
}, 1000);
})