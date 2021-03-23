// 1. Write a function that will iterate over an alphabetized string and return the 
// missing letter.If there isn't a missing letter, return "no missing letters".
//Example:
// input: 'qrsuv'
// output: 't'
// Example:
// input: 'cdefghi'
// output: 'no missing letters'
// Hint: Utilize the string prototype method charCodeAt and generic method fromCharCode

function letterChecker(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let startingPoint = alphabet.indexOf(str[0]);

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== alphabet[startingPoint + i]) {
            return alphabet[startingPoint + i];
        }
    }
    let none ='no missing letters'
    return none
}


// ------------------------------------------


// 2. Given an array of numbers and a target number, determine if any two numbers in the 
// array can add up to the value of the target number.Return true or false
// Example:
// input: [2,4,6,3], 7
// output: true (because 4+3)

function sumEqualsTarget(arr, target) {
  let total = 0;
  let ans = false
  for (let x = 0; x < arr.length; x++) {
  for (let i = 0; i < arr.length; i++) {
    let total = arr[i] + arr[x]
    if(total === target){
      ans = true
      return ans
    }else{
      continue
    }
  }
}
return ans
}


// ------------------------------------------


// 3. Given an array of numbers, sort the array such that all even numbers don't change 
// their position but all odd numbers are sorted in ascending order.Return the sorted array.
// Example: 
// input:  [2, 9, 4, 3, 6, 6, 1, 5, 8]
// output: [2, 1, 4, 3, 6, 6, 5, 9, 8]

function oddAscender(arr) {
  const odds = arr
        .filter(x => x%2)
        .sort((a, b) => a - b);
        
    return arr
    .map(x => x%2 ? odds.shift() : x);
  return arr
}