var elBody = document.getElementsByClassName("body")[0];

// Your first task is to build a product page that displays all brands of dog food, the different types, with the price and size for each container volume
function	getData () {
	var data = JSON.parse(event.target.responseText);
	var currentType = " ";
	var currentVolume = "";  	
	var currentBrand = " ";
	var currentPrice = " ";
	var brand;
	var type;
	var volume;
	var price;
// Loop through dog_brands
	for (i = 0; i < data.dog_brands.length; i++) {
		// variable to hold obj prop
		brand = data.dog_brands[i].name;
		// create div wih unique id
		currentBrand += `<div>`;
		currentBrand += `<h1 id="b${i + 1}" class="brand">`;
		currentBrand += `${brand}`;
		currentBrand += `</h1>`;
		// repeat till we get through object
		for (j = 0; j < data.dog_brands.length; j++) {
			type = data.dog_brands[i].types[j].type;
			currentBrand += `<div class="infoDiv">`;
			currentBrand += `<h2>`;
		  currentBrand += `${type} :`;
		  currentBrand += `</h2>`;
	 	  for (x = 0; x < data.dog_brands.length; x++) {
				volume = data.dog_brands[i].types[j].volumes[x].name;
				price = data.dog_brands[i].types[j].volumes[x].price;
				currentBrand += `<div>`;
				currentBrand += `<h2>`;
		  	currentBrand += `${volume} `;
		  	currentBrand += `$ ${price}`;
	 	  	currentBrand += `</h2>`;
				currentBrand += `</div>`;
	 	  }
				currentBrand += `</div>`;

		}	
				currentBrand += `</div>`;
	}
	document.body.innerHTML = currentBrand;
}


function displayError() {
	alert("ERROR");
}


var requestProduct = new XMLHttpRequest();

requestProduct.addEventListener("load", getData);
requestProduct.addEventListener("error", displayError);

requestProduct.open("GET", "dog_brands.json");
requestProduct.send();
