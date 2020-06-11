// Part 1: Create a function called getItems that simply returns the items array from the google product object.


var getItems = function(products) {
  var itemsOfProducts = products["items"];

  // console.log(itemsOfProducts);
  return itemsOfProducts;
}

var items = getItems(products);


// Part 2: Create a function called getItemsByBrand that takes an item array returns a new array of all items of a specified brand.


function getItemsByBrand(items, brand) {
  let brandArray = [];
  for (let i=0; i<items.length; i++) {
    var itemBrand = items[i].product.brand;
    if (itemBrand.toLowerCase() === brand.toLowerCase()) {
      brandArray.push(items[i].product.title);
    } else {
      console.log("No results found.")
    }
  }
  console.log(brandArray);
}
console.log("Test brand function");
getItemsByBrand(items, "nikon");
getItemsByBrand(items, "randombrand"); // no results found


// Part 3: Create a function called getItemsByAuthor that takes an item array and returns a new array of all items by a specified author.

function getItemsByAuthor(items, author) {
  let authorArray = [];
  for (let i=0; i<items.length; i++) {
    var itemAuthor = items[i].product.author.name;
    if (itemAuthor.toLowerCase().includes(author.toLowerCase())) {
      authorArray.push(items[i].product.title);
    } else {
      console.log("No results found.")
    }
  }
  console.log(authorArray);
}

console.log("Test author function");
getItemsByAuthor(items, "ebay");
getItemsByAuthor(items, "randomauthor"); // no results found

// Part 4: Create a function called getAvailableProducts that takes an item array returns a new array of all items that are available.

function getAvailableProducts(items) {
  let availableProductsArray = [];
  for (let i=0; i<items.length; i++) {
    var availability = items[i].product.inventories[0].availability;
    if (availability === "inStock") {
      availableProductsArray.push(items[i].product.title);
    }
  }
  console.log(availableProductsArray);
}

console.log("Test availability function");
getAvailableProducts(items);

// Ask the user if they want to do or see the following things, then do that thing based on what the user entered:

// The number of product items
function numberOfProducts(items) {
  let totalProducts = 0;
  for (let i=0; i<items.length; i++) {
    totalProducts ++
  }
  console.log(totalProducts);
}

console.log("Test number of products");
numberOfProducts(items);

// The country of each item
function getItemsByCountry(items, country) {
  let countryArray = [];
  for (let i=0; i<items.length; i++) {
    var itemCountry = items[i].product.country;
    if (itemCountry.toLowerCase() === (country.toLowerCase())) {
      countryArray.push(items[i].product.title);
    } else {
      console.log("No results found.")
    }
  }
  console.log(countryArray);
}

console.log("Test country function");
getItemsByCountry(items, "US");
getItemsByCountry(items, "randomcountry"); // no results found

// Total price of all inventory
function totalPriceOfProducts(items) {
  let totalPrice = 0;
  let priceArray = [];
  for (let i=0; i<items.length; i++) {
    priceArray.push(items[i].product.inventories[0].price)
  }
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  
  console.log(priceArray.reduce(reducer));
}

console.log("Test total price of products");
totalPriceOfProducts(items);

// Search for one of the things above: brand, author, available products
function userSearch(type, query) {
  if (type === "brand") {
    getItemsByBrand(items, query);
  } else if (type === "author") {
    getItemsByAuthor(items, query);
  } else if (type === "available") {
    getAvailableProducts(items);
  } 
}

console.log("Test user search");
userSearch("brand", "Canon");

// Let the user enter in a maximum or minimum price. Only show them items that correspond.
function maxPrice(items, maxPrice) {
  var maxPrice = maxPrice;
  var maxPriceItemsArray = [];
  for (let i=0; i<items.length; i++) {
    if (items[i].product.inventories[0].price < maxPrice) {
      maxPriceItemsArray.push(items[i].product.title);     
    } 
  }
  console.log(maxPriceItemsArray);
}

console.log("Test max price");
maxPrice(items, 10);

function minPrice(items, minPrice) {
  var minPrice = minPrice;
  var minPriceItemsArray = [];
  for (let i=0; i<items.length; i++) {
    if (items[i].product.inventories[0].price > minPrice) {
      minPriceItemsArray.push(items[i].product.title);     
    } 
  }
  console.log(minPriceItemsArray);
}

console.log("Test min price");
minPrice(items, 1000);

// Let the user enter in a maximum and minimum price. Only show them items that correspond.
function minMaxPrice(items, minPrice, maxPrice) {
  var minPrice = minPrice;
  var maxPrice = maxPrice;
  var minMaxPriceItemsArray = [];
  for (let i=0; i<items.length; i++) {
    if (items[i].product.inventories[0].price < maxPrice && items[i].product.inventories[0].price > minPrice) {
      minMaxPriceItemsArray.push(items[i].product.title);     
    } 
  }
  console.log(minMaxPriceItemsArray);
}

console.log("Test min max price range");
minMaxPrice(items, 10, 500);
