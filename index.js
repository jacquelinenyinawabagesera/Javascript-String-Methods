// 1. Extract the last four characters from the string below;"extravaganza"

const str = "extravaganza";
const lastFourCharacters = str.slice(-4);
console.log(lastFourCharacters);

// 2. Insert the following string at the fourth index of the below variable:"eat"const food = "The quick fox jumped over the lazy dog"

const food = "The quick fox jumped over the lazy dog";
const resultString = food.slice(0,4) + "eat" + " " + food.slice(4);
console.log(resultString);

// 3. Count how many times the following string appears in the string variable:1. "the"2."brown"const story= "The quick brown fox jumps over the lazy dog"
const story = "The quick brown fox jumps over the lazy dog";
const countWords = story.toLowerCase().split(" ")

let countThe = 0;
let countBrown = 0;

countWords.forEach(word => {
    if (word === "the"){
        countThe++
    }
    else if(word === "brown"){
        countBrown++
    }
});
console.log(` the appears ${countThe} times`);
console.log(`brown appears ${countBrown} times`);


//4.Using JavaScript, find the following words from the following strings:1. "are"const string1 = "The pupils are reading in the library";2. "sitting"const string2 = "The child was sitting on the table before it fell"
const string1 = "The pupils are reading in the library";
const string2 = "The child was sitting on the table before it fell";
const areIncluded = string1.includes('are');
console.log(areIncluded);
const sittingIncluded = string2.includes('sitting');
console.log(sittingIncluded);


//5.Convert the following strings into the specified format:1. UpperCase: "wonderful"2. LowerCase: "amazing", "UndERneath"3. Title case "A wonderful world"

const str1 = "wonderful";
console.log(str1.toUpperCase());
const str2 = "amazing";
console.log(str2.toLowerCase());
const str3 = "UndERneath";
console.log(str3.toLowerCase());

const originalString = "A wonderful word";
const textWords = originalString.toLowerCase();
const newString = textWords.split(" ");

newString.forEach((word, index) => {
    newString[index] = word.charAt(0).toUpperCase() + word.slice(1);
});

console.log(newString.join(" "));
