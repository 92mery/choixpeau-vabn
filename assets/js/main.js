const ecoles = [400, 401, 403, 404];

function randomElementIn(array) {
   return Math.floor(Math.random() * array.length);
}

function choixpeau() {
  return ecoles[randomElementIn(ecoles)];
}

function injectChoix() {
    document.getElementById("affichage").innerText = choixpeau();
}
