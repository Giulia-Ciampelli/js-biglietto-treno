// dichiarazione variabili
let basePrice;
let minorDiscount;
let seniorDiscount;
let age;
let distance;

// raccolta dati
age = Number(prompt('ciao, inserisci la tua età'));
distance = Number(prompt('quanti km devi fare?'));

// calcolo prezzo per km
basePrice = distance * 0.21;

// calcolo sconto prezzi per età
minorDiscount = basePrice - (basePrice * 0.2);
seniorDiscount = basePrice - (basePrice * 0.4);

// elaborazione dati
if (age < 18) {
    console.log(`Sconto per minorenni: ${minorDiscount.toFixed(2)} €`);
    alert(`Sconto per minorenni: ${minorDiscount.toFixed(2)} €`);
}
if (age >= 18 && age < 65) {
    console.log(`Prezzo pieno: ${basePrice.toFixed(2)} €`);
    alert(`Prezzo pieno: ${basePrice.toFixed(2)} €`);
}
if (age >= 65) {
    console.log(`Sconto per pensionati: ${seniorDiscount.toFixed(2)} €`);
    alert(`Sconto per pensionati: ${seniorDiscount.toFixed(2)} €`);
}