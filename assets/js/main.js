// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
console.log('im alive');

// dichiarazione variabili
let basePrice;
let minorPrice;
let seniorPrice;
let age;
let distance;
let result;

// raccolta dati
age = Number(prompt('ciao, inserisci la tua età'));
distance = Number(prompt('quanti km devi fare?'));

// calcolo prezzo per km
basePrice = distance * 0.21;
console.log(basePrice + `€`); // TEST

// primi calcoli età

if (age < 18) {
    console.log('troppo piccolo'); // TEST
}
if (age >= 18) {
    console.log('prezzo pieno'); // TEST
}
if (age >= 65) {
    console.log('sei pensionato'); // TEST
}