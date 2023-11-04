'use strict'

/////////////////////////VARIABLES/////////////
const elementNome = document.getElementById('nome');
const elementCognome = document.getElementById('cognome');
const elementColorepreferito = document.getElementById('colorepreferito');
let generatedNumber = Math.floor(Math.random() * 100);
const elementPassword = document.getElementById('password');



console.log(elementNome);
console.log(elementCognome);
console.log(elementColorepreferito);

elementNome.innerHTML = " Il tuo nome: ";
elementCognome.innerHTML = " Il tuo cognome: ";
elementColorepreferito.innerHTML = " Il tuo colore preferito: ";
elementPassword.innerHTML = " La tua password:";

/////////////////////////PROMPT DATA/////////////
const insertedName = prompt('Inserisci il tuo nome');
elementNome.innerHTML += insertedName;
const insertedSurname= prompt('Inserisci il tuo cognome');
elementCognome.innerHTML += insertedSurname;
const insertedColor= prompt('Inserisci il tuo colore preferito');
elementColorepreferito.innerHTML += insertedColor;

//////////////////PASSWORD GENERATOR
const generatedPassword=insertedName+insertedSurname+insertedColor+generatedNumber;
elementPassword.innerHTML+=generatedPassword;









