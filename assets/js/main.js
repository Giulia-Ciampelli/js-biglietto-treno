// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
console.log('im alive');

// dichiarazione variabili
let basePrice;
let minorDiscount;
let seniorDiscount;
let age;
let distance;
let result;

// raccolta dati
age = Number(prompt('ciao, inserisci la tua età'));
distance = Number(prompt('quanti km devi fare?'));

// calcolo prezzo per km
basePrice = distance * 0.21;
// console.log(basePrice.toFixed(2) + `€`); // TEST

// calcolo sconto prezzi per età
minorDiscount = basePrice - (basePrice * 0.2);
seniorDiscount = basePrice - (basePrice * 0.4);

// primi calcoli età
if (age < 18) {
    console.log(`Sconto per minorenni: ${minorDiscount.toFixed(2)} €`); // TEST
}
if (age >= 18 && age < 65) {
    console.log(`Prezzo pieno: ${basePrice.toFixed(2)} €`); // TEST
}
if (age >= 65) {
    console.log(`Sconto per pensionati: ${seniorDiscount.toFixed(2)} €`); // TEST
}