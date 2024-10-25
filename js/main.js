let inputNameUser = document.getElementById("nameUser");
let nameUserValueEl = prompt("Come ti chiami?");
console.log("name: ", nameUserValueEl);
inputNameUser.setAttribute("value", nameUserValueEl);

let inputkmToDo = document.getElementById("kmToDo");
let kmToDoValueEl = parseInt(prompt("Quanti km percorrerai?"));
console.log("km: ", kmToDoValueEl);
inputkmToDo.setAttribute("value", kmToDoValueEl);

let inputAgeSelect = document.getElementById("ageSelect");
let ageUserValueEl = parseInt(prompt("Quanti anni hai?"));
console.log("età: ", ageUserValueEl);

if (ageUserValueEl < 18) {
	inputAgeSelect.value = "minorenne";
} else if (ageUserValueEl > 65) {
	inputAgeSelect.value = "over65";
} else {
	inputAgeSelect.value = "maggiorenne";
}

const executeButton = document.getElementById("generaBiglietto");
const outputCard = document.getElementById("output-card");

executeButton.addEventListener("click", () => {
	const nameUser = inputNameUser.value;
	const kmToDo = inputkmToDo.value;
	const ageSelect = inputAgeSelect.value;

	let price = 0;
	let discountEur = 0;
	let finalPrice = 0;
	const discountPercUnder18 = 20;
	const discountPercOver65 = 40;
	let pricePerKm = 0.21;
	let outputMessage = "";

	//calcolo il prezzo
	price = kmToDo * pricePerKm;

	//SE l'età del passeggero è <18
	if (ageSelect === "minorenne") {
		//calcolo lo sconto minorenni
		discountEur = (price * discountPercUnder18) / 100;
		finalPrice = price - discountEur;
		//setto messaggio di output sconto per i minorenni
		outputMessage += `
In quanto Under 18 hai diritto ad uno sconto del ${discountPercUnder18}%. 
Lo sconto è pari ad un ammontare di € ${discountEur.toFixed(2)}.
Il prezzo finale è pari a € ${finalPrice.toFixed(2)}.`;
		console.log(outputMessage);
	}

	//SE il passeggero è >65
	else if (ageSelect === "over65") {
		//calcola lo sconto over65
		discountEur = (price * discountPercOver65) / 100;
		finalPrice = price - discountEur;
		//setto messaggio di output sconto per over65
		outputMessage += `
In quanto Over 65 hai diritto ad uno sconto del ${discountPercOver65}%. 
Lo sconto è pari ad un ammontare di € ${discountEur.toFixed(2)}.
Il prezzo finale è pari a € ${finalPrice.toFixed(2)}.`;
		console.log(outputMessage);
	}

	//calcolo il prezzo scontato SE l'età è valida E non è <18 E  >65
	else if (ageSelect === "maggiorenne") {
		finalPrice = kmToDo * pricePerKm;
		outputMessage =
			"Non hai diritto a nessuno sconto, dovrai pagare " +
			finalPrice.toFixed(2) +
			" €";
		console.log(outputMessage);
	}

	//!OUTPUT
	//stampa il messaggio
	alert(outputMessage);

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
					<td id="offerta">biglietto standard</td>
					<td>5</td>
					<td>39582820</td>
					<td>${finalPrice.toFixed(2)} €</td>
				</tr>
			</tbody>
		</table>
    </div>
    `;
	outputCard.innerHTML = ticketCard;

	const offerta = document.getElementById("offerta");

	//SE il passeggero è minorenne
	if (ageSelect === "minorenne") {
		offerta.innerHTML = "offerta ridotta";
	}

	//SE il passeggero è >65
	else if (ageSelect === "over65") {
		offerta.innerHTML = "offerta premium";
	}
});

const annullaButton = document.getElementById("annulla");

annullaButton.addEventListener("click", () => {
	//display none ticket
	outputCard.classList = "d-none";

	inputNameUser.value = "";
	inputkmToDo.value = "";
	inputAgeSelect.value = "minorenne";
});
