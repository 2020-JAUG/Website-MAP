
function nuevoTab(url) {

    let win = window.open(url, '_blank');
    win.focus();
}

let open = document.getElementById('open');
let show = document.getElementById('showcase');
let trello = document.getElementById('trello');
let consola = document.getElementById('consola');
let weather = document.getElementById('weather');


open.addEventListener('click', () => {
    nuevoTab('https://github.com/2020-JAUG');
});

show.addEventListener('click', () => {
    nuevoTab('https://github.com/2020-JAUG/ShowcaseDinamico');
});

trello.addEventListener('click', () => {
    nuevoTab('https://github.com/2020-JAUG/Trello-Tasks');
});

consola.addEventListener('click', () => {
    nuevoTab('https://github.com/2020-JAUG/Consola');
});

weather.addEventListener('click', () => {
    nuevoTab('https://github.com/2020-JAUG/Weather_With_React');
});

