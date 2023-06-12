window.onload = function() {
  // Affichage à l'écran
  //alert("Hello World");
  //alert("Hello " + "David. Comment va David ?");
  // Déclaration d'une variable
  let prenom = "David";
  //alert("Hello " + prenom + ". Comment va " + prenom + " ?");
  let anneeNaissance = 1980;
  let anneeActuelle = 2023;
  let age = anneeActuelle - anneeActuelle;
  //alert("David a " + age + " ans.");
  anneeNaissance = 1930;
  //alert("David a " + age + " ans.");
  age = anneeActuelle - anneeNaissance;
  //alert("David a " + age + " ans.");
  //calculAge(1920, 2023);
  age = calculAge(anneeNaissance, anneeActuelle)
  alert("David a " + age + " ans.");
};

// Déclaration d'un fonction avec deux paramètres (aussi appelés arguments) : anneeDeNaissance et anneeAujourdhui
function calculAge(anneeDeNaissance, anneeAujourdhui) {
  return anneeAujourdhui - anneeDeNaissance;
}
