const inputNameUser = document.getElementById("nameUser");
const nameUserValueEl = prompt("Come ti chiami?");
console.log(nameUserValueEl);
inputNameUser.setAttribute("value", nameUserValueEl);

const inputkmToDo = document.getElementById("kmToDo");
const kmToDoValueEl = parseInt(prompt("Quanti km percorrerai?"));
console.log(kmToDoValueEl);
inputkmToDo.setAttribute("value", kmToDoValueEl);

const inputAgeSelect = document.getElementById("ageSelect");
let ageUserValueEl = parseInt(prompt("Quanti anni hai?"));
console.log(ageUserValueEl);

if (ageUserValueEl < 18) {
	inputAgeSelect.value = "minorenne";
} else {
	inputAgeSelect.value = "maggiorenne";
}

const executeButton = document.getElementById("generaBiglietto");
const outputCard = document.getElementById("output-card");

executeButton.addEventListener("click", () => {
	const nameUser = inputNameUser.value;
	const kmToDo = inputkmToDo.value;
	const ageSelect = inputAgeSelect.value;

	const ticketCard = `
    <div class="p-5">
        <table class="table">
			<thead>
				<tr>
					<th scope="col">Nome passeggero</th>
					<th scope="col">Offerta</th>
					<th scope="col">Carrozza</th>
					<th scope="col">Codice cp</th>
					<th scope="col">Costo biglietto</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>${nameUser}</th>
					<td>biglietto standard</td>
					<td>5</td>
					<td>39582820</td>
					<td>2.10€</td>
				</tr>
			</tbody>
		</table>
    </div>
    `;
	outputCard.innerHTML = ticketCard;
});

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
