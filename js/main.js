const inputNameUser = document.getElementById((id = "nameUser"));
const inputkmToDo = document.getElementById((id = "kmToDo"));
const inputAgeSelect = document.getElementById((id = "ageSelect"));
const inputGeneraBigliettoButton = document.getElementById(
	(id = "generaBiglietto")
);
/*
const nameUserEl = document.getElementById("nameUser");
const nameUserValueEl = prompt("Come ti chiami?");
console.log(nameUserValueEl);
nameUserEl.setAttribute("value", nameUserValueEl);

const kmToDoEl = document.getElementById("kmToDo");
const kmToDoValueEl = parseInt(prompt("Quanti km percorrerai?"));
console.log(kmToDoValueEl);
kmToDoEl.setAttribute("value", kmToDoValueEl);
*/

let ageUserEl = document.getElementById("ageSelect");
let ageUserValueEl = parseInt(prompt("Quanti anni hai?"));
console.log(ageUserValueEl);
ageUserEl.setAttribute("value", ageUserValueEl);

if (ageUserValueEl < 18) {
	ageUserEl.setAttribute("value", "minorenne");
} else if (ageUserEl > 18) {
	ageUserEl.setAttribute("value", "maggiorenne");
}

const executeButton = document.getElementById("generaBiglietto");

/*executeButton.addEventListener("click", () => {
	const kmToDoValue = parseInt(prompt("Quanti km percorrerai?"));
	console.log(kmToDoValue);
});
*/

/*

//!RACCOLTA DATI
//chiedi (number) numero km
const userDistance = parseInt(prompt("Quanti km percorrerai?"));

//chiedi (number) età
const userAge = parseInt(prompt("Quanti anni hai?"));

//prepara (number) prezzo, sconto, prezzo finale, sconto percentuale over65, sconto percentuale under 18
let price = 0;
let discountEur = 0;
let finalPrice = 0;
const discountPercUnder18 = 20;
const discountPercOver65 = 40;
let pricePerKm = 0.21;

//prepara (string) messaggio output
let outputMessage = "";

//!ELABORAZIONE
//calcola validità numero di km
const isUserDistanceValid = !isNaN(userDistance) && userDistance > 0;

//calcola validità età
const isUserAgeValid = !isNaN(userAge) && userAge >= 0;

//SE tutti i valori sono validi
if (isUserDistanceValid && isUserAgeValid) {
	//calcolo il prezzo
	price = userDistance * pricePerKm;

	//setta il messaggio di output prezzo pieno
	outputMessage = `Il prezzo del biglietto è di € ${price.toFixed(2)}`;

	//SE l'età del passeggero è <18
	if (userAge < 18) {
		//calcolo lo sconto minorenni
		discountEur = (price * discountPercUnder18) / 100;
		finalPrice = price - discountEur;
		//setto messaggio di output sconto per i minorenni
		outputMessage += `
In quanto Under 18 hai diritto ad uno sconto del ${discountPercUnder18}%. 
Lo sconto è pari ad un ammontare di € ${finalPrice.toFixed(2)}.
Il prezzo finale è pari a € ${finalPrice.toFixed(2)}.`;
	}

	//SE il passeggero è >65
	if (userAge > 65) {
		//calcola lo sconto over65
		discountEur = (price * discountPercOver65) / 100;
		finalPrice = price - discountEur;
		//setto messaggio di output sconto per over65
		outputMessage += `
In quanto Over 65 hai diritto ad uno sconto del ${discountPercOver65}%. 
Lo sconto è pari ad un ammontare di € ${finalPrice.toFixed(2)}.
Il prezzo finale è pari a € ${finalPrice.toFixed(2)}.`;
	}
} else {
	//setta il messaggio di output di errore
	outputMessage = "Errore";
	if (!isUserDistanceValid) {
		outputMessage += `\n- distanza non valida`;
	}
	if (!isUserAgeValid) {
		outputMessage += `\n- età non valida`;
	}
}

//!OUTPUT
//stampa il messaggio
alert(outputMessage);
*/
