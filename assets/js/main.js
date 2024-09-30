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
let distanceKm;
let result;

// raccolta dati
age = prompt('ciao, inserisci la tua età');
distance = Number(prompt('ora inserisci la distanza'));

// calcolo prezzo per km
distanceKm = distance * 0.21;
console.log(distanceKm + `€`);

// primi calcoli età
if (age < 18) {
    console.log('troppo piccolo');
}
if (age >= 18) {
    console.log('prezzo pieno');
}
if (age >= 65) {
    console.log('sei pensionato');
}