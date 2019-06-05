const ecoles = [400, 401, 403, 404];

function randomElementIn(array) {
   return Math.floor(Math.random() * array.length);
}

// transforme l'index du tableau en sa valeur
function choixpeau() {
  return ecoles[randomElementIn(ecoles)];
}

function injectChoix() {
    let chapeau = document.getElementById("chapeau");
    let resultat = document.getElementById("resultat");

    // réinitialiser la rotation du chapeau + transparence résultat
    chapeau.classList.remove("rotate-center");
    resultat.classList.add("transparent");

  //  effacer le résultat précédent si besoin
    setTimeout(function() {
      document.getElementById("resultat").innerText = "";
    }, 500);

    // appliquer class animation rotation au chapeau
    setTimeout(function() {
      chapeau.classList.add("rotate-center");
    }, 500);

    // rendre résultat visible et appeler le résultat random
    setTimeout(function() {
      resultat.classList.remove("transparent");
      resultat.classList.add("visible");

      document.getElementById("resultat").innerText = choixpeau();
  }, 1500);
}
