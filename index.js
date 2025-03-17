// 1. Extract the last four characters from the string below;"extravaganza"

const str = "extravaganza";
const lastFourCharacters = str.slice(-4);
console.log(lastFourCharacters);

// 2. Insert the following string at the fourth index of the below variable:"eat"const food = "The quick fox jumped over the lazy dog"

const food = "The quick fox jumped over the lazy dog";
const resultString = food.slice(0,4) + "eat " + food.slice(4);
console.log(resultString);