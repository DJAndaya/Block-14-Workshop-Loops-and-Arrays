// Only Odds

const array1 = [];
const oddOnly = [];

for ( let i = 0; i < array.length; i++) {
    const num = array[i];

    if (num % 2 === 1) {
        oddOnly.push(num)
    }
}

console.log(oddOnly)

// Vowel vs Consonant

const string = "";
let consonantCount =  0;
let vowelCount = 0;
const vowels = "aeiou"

for (let i = 0; i < string.length; i++) {
    const letter = string[i];

    if (vowels.includes(letter)) {
        vowelCount++;
    } else {
        consonantCount++;
    }
}

console.log(`${string} has ${consonantCount} consonants and ${vowelCount} vowels`)

// ReverseArray

const array2 = [];
const reversed = [];

for (let i = array2.length - 1; i >= 0; i--) {
    const num = array2[i];

    reversed.push(num);
}

console.log(reversed);

// FizzBuzz

const fizzBuzz = [];

for (let num = 1; num <= 100; num++ ) {
    
    if (num % 15 === 0) {
        fizzBuzz.push("FizzBuzz");
    } else if (num % 5 === 0) {
        fizzBuzz.push("Buzz")
    } else if (num % 3 === 0) {
        fizzBuzz.push("Fizz")
    } else {
        fizzBuzz.push(num)
    }
}

// console.log(fizzBuzz)