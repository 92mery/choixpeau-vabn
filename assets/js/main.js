const ecoles = [400, 401, 403, 404];

function randomElementIn(array) {
   return Math.floor(Math.random() * array.length);
}

function choixpeau() {
  return ecoles[randomElementIn(ecoles)];
}

function injectChoix() {
    let chapeau = document.getElementById("chapeau");
    chapeau.classList.remove("rotate-center");
    document.getElementById("resultat").innerText = "";

    setTimeout(function() {
      chapeau.classList.add("rotate-center");
    }, 500);

    setTimeout(function() {
      //your code to be executed after 1 second
      document.getElementById("resultat").innerText = choixpeau();
  }, 1500);
}
