window.onload = function() {
  let chiffre = 9;
  let resultat = calculeDouble(9);
  alert("le double de " + chiffre + " est " + resultat);
};

function calculeDouble(unChiffre) {
  return 2 * unChiffre;
}
