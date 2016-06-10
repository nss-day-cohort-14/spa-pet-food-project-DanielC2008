var catContainer = document.getElementById("forCats");
// Your first task is to build a product page that displays all brands of dog food, the different types, with the price and size for each container volume
function	getDataCats () {
	var data = JSON.parse(event.target.responseText);
	var currentBrand = "";
	var brand;
	var type;
	var volume;
	var price;
	var breed;

// Loop through cat_brands
	for (i = 0; i < data.cat_brands.length; i++) {
		// variable to hold obj prop
		brand = data.cat_brands[i].name;
		breed = data.cat_brands[i].breeds.join(", ");
		// create div wih unique id
		currentBrand += `<div>`;
		currentBrand += `<h1 id="b${i + 1}" class="brand">`;
		currentBrand += `${brand}`;
		currentBrand += `<h2 class="breed">`;
		currentBrand += `Breeds: ${breed}`;
		currentBrand += `</h2>`;
		currentBrand += `</h1>`;
		// repeat till we get through object
		for (j = 0; j < data.cat_brands.length; j++) {
			type = data.cat_brands[i].types[j].type;
			currentBrand += `<div class="infoDiv">`;
			currentBrand += `<h2>`;
		  currentBrand += `${type} :`;
		  currentBrand += `</h2>`;
	 	  for (x = 0; x < data.cat_brands[i].types[j].volumes.length; x++) {
				volume = data.cat_brands[i].types[j].volumes[x].name;
				price = data.cat_brands[i].types[j].volumes[x].price;
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
	catContainer.innerHTML = currentBrand;
}


function displayError() {
	alert("ERROR");
}

var requestProduct = new XMLHttpRequest();

requestProduct.addEventListener("load", getDataCats);
requestProduct.addEventListener("error", displayError);

requestProduct.open("GET", "cat.json");
requestProduct.send();
