'use strict'


const elementNome= document.getElementById('nome');
const elementCognome= document.getElementById('cognome');
const elementColorepreferito= document.getElementById('colorepreferito');
let x = Math.random() * 100;
const elementPassword= elementCognome + elementNome + elementColorepreferito + x;



console.log(elementNome);
console.log(elementCognome);
console.log(elementColorepreferito);

elementNome.innerHTML = " Il tuo nome: ";
elementCognome.innerHTML = " Il tuo cognome: ";
elementColorepreferito.innerHTML = " Il tuo colore preferito: ";



elementNome.innerHTML += prompt('Inserisci il tuo nome');
elementCognome.innerHTML += prompt('Inserisci il tuo cognome');
elementColorepreferito.innerHTML += prompt('Inserisci il tuo colore preferito');





