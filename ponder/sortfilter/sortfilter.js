nums = [12, 10, 8, 3];

console.log(nums.sort(compareFn));

                
// Fruit array
const simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];
                
// Simple sort of fruit array that is out of order because of letter case.
let simpleSort = simpleList.sort();
console.log(simpleSort);

// Map to make the array all lower case. 
let lowerList = simpleList.map(function(fruit) {
    return fruit.toLowerCase();
})
    
// This makes it correctly alphabetically sorted
let lowerSort = lowerList.sort();
console.log(lowerSort);

// Search term filtering
let searchTerm = 'co';

let filterFruit = lowerSort.filter(searchFruit);

function searchFruit(fruit) {
    return fruit.includes(searchTerm);
}

console.log(filterFruit);

// - Compare function to sort numbers correctly
// function compareFn(a,b) {
//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   }
//  return 0;
// }

// Compare function to sort numbers correctly
// This edit sorts the particular list numerically by price
function compareFn(a,b) {
  if (a.productName < b.productName) {
    return -1;
  } else if (a.productName > b.productName) {
    return 1;
  }
 return 0;
}


// Products object array
const products = [
  {
    productName: "Wireless Mouse",
    price: 29.99
  },
  {
    productName: "Bluetooth Keyboard",
    price: 49.99
  },
  {
    productName: "Laptop Stand",
    price: 39.99
  }
];

let productSort = products.sort(compareFn);

console.log(productSort);

// Sis. Anderson said we're going to be using an object array with an array inside of each object

// Practice code for that below

// Animals array
const animals = [
  {
    name: "Lion",
    traits: ["brave", "strong", "fierce", "wild"]
  },
  {
    name: "Elephant",
    traits: ["large", "gentle", "smart", "wild"]
  },
  {
    name: "Fox",
    traits: ["sly", "quick", "clever", "wild"]
  },
  {
    name: "Dog",
    traits: ["loyal", "friendly", "playful", "cuddly"]
  },
  {
    name: "Cat",
    traits: ["quiet", "independent", "curious", "cuddly"]
  }
];

// Search filter for objects
let query = 'ox';

let filteredList = animals.filter(searchList);

function searchList(item) {
    return item.name.toLowerCase().includes(query.toLowerCase());
}

console.log(filteredList);


// Search filter for arrays within objects
let queryTrait = 'strong';

let filteredTraits = animals.filter(searchTraits);

function searchTraits(item) {
    return item.traits.find((trait) => trait.toLowerCase().includes(queryTrait.toLowerCase()));
}

console.log(filteredTraits);




              
                
