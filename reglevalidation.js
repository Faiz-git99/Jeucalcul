// LES RÈGLES DE FORMULAIRE

// Créer une fonction qui verifie la valeur de champs
function verifierChamp(champ){
    if(champ.value === ""){
        console.log("Le champ est vide. ");
    }else{
        console.log("Le champ nom est rempli. ");
    }
}

// Objectif : Vérifier que le Nom est rempli
const elementFormulaire = document.querySelector("form");
console.log(elementFormulaire);

// J'ajoute addEventListener pour écouter l'évènement submit
elementFormulaire.addEventListener("submit", (event) => {
    /* empêche le comportement par défaut de l'évènement submit */
    /* event.preventDefaut(); permet d'éviterun rechargement de la page */

    event.preventDefault();

    // Récupère l'élement qui contient le nom et le prénom
    const elementnom = document.querySelector("#nom");
    const elementprenom = document.querySelector("#prenom");

    // Vérifie le champs (rempli ou vide)
    verifierChamp(elementnom);
    verifierChamp(elementprenom);
    
})