const ecoles = [400, 401, 403, 404];

function randomElementIn(array) {
   return Math.floor(Math.random() * array.length);
}

let ecoleChoisie = randomElementIn(ecoles);

function injectChoix() {
    document.getElementById("").innerText = ecoleChoisie;
}