// Calculer l'âge automatiquement

let AnneeNaissance = document.querySelector("#dateNaissance");
 console.log(AnneeNaissance);

 // la fonction calculAge qui va peremttre de faire le calcul pour ensuite nous retourner le résultat 
function calculAge(anneeEnCours, datedeNaissance){
let age = anneeEnCours - datedeNaissance;
console.log("Age calculé :", age);
return age;

}

// Déclarer une variable qui va recupérer les ID de chaque balise
let monNom = document.querySelector("#nom");
console.log(monNom);

let monPrenom = document.querySelector("#prenom");
console.log(monPrenom);

// Récupère l'année automatiquement pour l'afficher sur le footer
let recupAnnee = document.querySelector("#afficheAnnee")
const date = new Date();
recupAnnee.innerHTML += date.getFullYear();

let elementSpan = document.querySelector("#affichage");


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
const elementsituation = document.querySelectorAll('input[name="situation"]');
console.log(elementsituation);
//console.log(elementsituation[0].checked);
//console.log(elementsituation[1].checked);

let situationCochee;
for(let i = 0; i < elementsituation.length; i++){

   if(elementsituation[i].checked){
      console.log(elementsituation[i].value);
      situationCochee = elementsituation[i].value;
      break
   }

}
elementSpan.innerHTML += `Vous êtes ${situationCochee}.`;
// calcul pour récuperer l'année et afficher le résultat après avoir cliqué le bouton 'valider'
let AnneeSaisie = AnneeNaissance.value;
console.log("Année naissance :", AnneeSaisie);

//récupérer l'âge automatiquement et le message 
let age = calculAge(2024, AnneeSaisie);
 elementSpan.innerHTML += `vous avez ${age} ans.`; /* inner.HTML += veut dire d'insérer le message dans cette balise HTML */

 // afficher la condition si on est majeur ou mineur (règle 3 et 4)
 if(age > 18){
   elementSpan.innerHTML += `Vous êtes majeur.`;
 } else{ // avec else, on ne déclare plus la condition
   elementSpan.innerHTML += `Vous êtes mineur.`;
 }
  
});

// je crée une variable date à partir de l'objet Date()
// const date = new Date() je l'avais déclaré en haut pour récupérer l'année automatiquement
console.log("Date :",date);

// pour afficher l'année en cours
console.log("Année en cours :",date.getFullYear());

// pour afficher le mois
console.log("Le mois en cours :", date.getMonth());

// pour afficher le jour
console.log("Aujourd'hui :", date.getDay());