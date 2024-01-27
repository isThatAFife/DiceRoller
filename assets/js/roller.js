let d4 = document.getElementById('d4');

d4.addEventListener('click', function() {
    let fourResult = Math.floor(Math.random() * 4 + 1);
    let fourAnswer = document.getElementById('fourResult')
    fourAnswer.innerHTML = `You rolled a ${fourResult}!`
});

let d6 = document.getElementById('d6');

d6.addEventListener('click', function() {
    let sixResult = Math.floor(Math.random() * 6 + 1);
    let sixAnswer = document.getElementById('sixResult')
    sixAnswer.innerHTML = `You rolled a ${sixResult}!`
});

let d8 = document.getElementById('d8');

d8.addEventListener('click', function() {
    let eightResult = Math.floor(Math.random() * 8 + 1);
    let eightAnswer = document.getElementById('eightResult')
    eightAnswer.innerHTML = `You rolled a ${eightResult}!`
});

let d10 = document.getElementById('d10');

d10.addEventListener('click', function() {
    let tenResult = Math.floor(Math.random() * 10 + 1);
    let tenAnswer = document.getElementById('tenResult')
    tenAnswer.innerHTML = `You rolled a ${tenResult}!`
});

let d12 = document.getElementById('d12');

d12.addEventListener('click', function() {
    let twelveResult = Math.floor(Math.random() * 12 + 1);
    let twelveAnswer = document.getElementById('twelveResult')
    twelveAnswer.innerHTML = `You rolled a ${twelveResult}!`
});

let d20 = document.getElementById('d20');

d20.addEventListener('click', function() {
    let twentyResult = Math.floor(Math.random() * 20 + 1);
    let twentyAnswer = document.getElementById('twentyResult')
    twentyAnswer.innerHTML = `You rolled a ${twentyResult}!`
});