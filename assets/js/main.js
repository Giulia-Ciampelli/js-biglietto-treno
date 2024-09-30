// dichiarazione variabili
let basePrice;
let age;
let distance;

// raccolta dati
age = Number(prompt('ciao, inserisci la tua età'));
distance = Number(prompt('quanti km devi fare?'));

// calcolo prezzo per km
basePrice = distance * 0.21;

// elaborazione dati con calcolo discount

// sconto minorenni
if (age < 18) {
    basePrice = basePrice - (basePrice * 0.2);
    console.log(`Sconto per minorenni: ${basePrice.toFixed(2)} €`);
    alert(`Sconto per minorenni: ${basePrice.toFixed(2)} €`);
}

// sconto pensionati
else if (age >= 65) {
    basePrice = basePrice - (basePrice * 0.4);
    console.log(`Sconto per pensionati: ${basePrice.toFixed(2)} €`);
    alert(`Sconto per pensionati: ${basePrice.toFixed(2)} €`);
}

// prezzo pieno
else {
    console.log(`Prezzo pieno: ${basePrice.toFixed(2)} €`);
    alert(`Prezzo pieno: ${basePrice.toFixed(2)} €`);
}