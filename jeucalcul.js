// Calculer l'âge automatiquement

let AnneeNaissance = document.querySelector("#dateNaissance");
 console.log(AnneeNaissance);

 // la fonction calculAge qui va peremttre de faire le calcul pour ensuite nous retourner le résultat 
function calculAge(anneeEnCours, datedeNaissance){
let age = anneeEnCours - datedeNaissance;
console.log("age calculé :", age);
return age;

}

// Déclarer une variable qui va recupérer les ID de chaque balise
let monNom = document.querySelector("#nom");
console.log(monNom);

let monPrenom = document.querySelector("#prenom");
console.log(monPrenom);

let maSituation = document.querySelector("#salarie");
console.log(maSituation);

// Déclarer un bouton qui permet d'actionner un mouvement
let elementBoutonValider = document.querySelector("#ageAuto");
console.log(elementBoutonValider);

// la fonction addEvenListener permet de lister les actions prévus au  moment du cliquage grâce à la valeur 'click'
elementBoutonValider.addEventListener("click", () => {
console.log("Vous avez cliqué sur le bouton Valider.");

// On récupère seulement la valeur qui se trouve dans l'input 'nom' après avoir cliquer sur le bouton 'valider'
let saisirSonNom = monNom.value;
console.log("Mon nom est :", saisirSonNom);

// On récupère seulement la valeur qui se trouve dans l'input 'prénom' après avoir cliquer sur le bouton 'valider'
let saisirSonPrenom = monPrenom.value;
console.log("Mon prénom est :", saisirSonPrenom);

// On récupère seulement la valeur qui se trouve dans l'input 'situation sociale' après avoir cliquer sur le bouton 'valider'
let mySituation = maSituation.value;
console.log("Je suis ", maSituation);

// calcul pour récuperer l'âge auto. et afficher le résultat après avoir cliqué le bouton 'valider'
let AnneeSaisie = AnneeNaissance.value;
console.log("Année saisie :", AnneeSaisie);

calculAge( 2024, AnneeSaisie);

});
