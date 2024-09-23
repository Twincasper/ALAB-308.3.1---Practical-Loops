// To begin, solve the following classic “Fizz Buzz” problem. There are a few different ways to do this - experiment with what you think is the most efficient. Once you have solved the problem, ask yourself if there could be another way; and if so, would it be better.
// Accomplish the following:
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

const fizzBuzz = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('Fizz Buzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

console.log(fizzBuzz(100));

function nextPrime(n) {
  n++;
  while (true) {
      let isPrime = true;
      
      for (let i = 2; i <= Math.sqrt(n); i++) {
          if (n % i === 0) {
              isPrime = false;
              break;
          }
      }
      if (isPrime) {
          return n;
      }
      n++;
  }
}

let n = 5;
console.log(nextPrime(n));

// Establish an empty array to push into, this will be our "row" and we'll reset it each time we go to the next line
// Same logic for each cell, but an empty string
// If current character is not a , or a \n, that means it is still part of the current cell, and we can add it to that cell string
// If current character is a ,that means it is the end of the current cell, so push that cell into the row, and reset the cell string
// If current character is a \n, that means it is the end of the current row, so push that row into the grid, and reset the cell string, console log the elements of our current row, and then reset the row for the next row


let csv = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"


let row = [];
let cell = "";

for (let i = 0; i < csv.length; i++) {
  if (csv[i] != "," && csv[i] != "\n") {
    cell += csv[i];
  } else if (csv[i] === ",") {
    row.push(cell);
    cell = "";
  } else {
    row.push(cell);
    cell = "";
    console.log(row[0], row[1], row[2], row[3]);
    row = [];
  }
}
