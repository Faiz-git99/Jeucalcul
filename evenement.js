// 1. Récupère un élément de type input texte qui est le nom

const elementInputNom = document.querySelector("#nom");
console.log(elementInputNom);

// 2. Écouter l'évenèment change puis exécuter le code

elementInputNom.addEventListener("change", () =>{
    console.log("=== J'ai entendu change :-)");
});

const elementInputPrenom = document.querySelector("#prenom");
console.log(elementInputPrenom);

// Obtenir l'heure actuelle
let time;
const heureactuelle = new Date();
const heure = heureactuelle.getHours();
const minute = heureactuelle.getMinutes(); 
console.log(heure + ":"+minute);

//Déterminer le message de bonjour ou bonsoir en fonction du temps
if(heureactuelle < 12){ // si l'heure est inférieure à 12h, alors le message affiche 'Bonjour'
    time = "Bonjour";
}else{ // si l'heure est supérieur à 12h, alors le message affiche 'Bonsoir'
    time = "Bonsoir";
}

// récupérer l'élément sur HTLM
let messageSalutation;
const elementMessageSalutation = document.querySelector("#voirmessage");
elementInputPrenom.addEventListener("change", (event)=> { 
    messageSalutation= `${time} ${event.target.value}`;
elementMessageSalutation.textContent = messageSalutation;
});

