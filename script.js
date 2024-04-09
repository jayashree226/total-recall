// Section 1

// 1. Variables & Data types

// A. Variables =============================================================================

// Declare a new constant variable called myName and assign it your name?
const myName = "Jayshree";

// Declare a variable called favoriteLanguage and assign it the value of Python?
let favoriteLanguage = "Python";

// Declare a new variable called newFavoriteLanguage and assign it JavaScript;
let newFavoriteLanguage = "JavaScript";

// Assign the value of newFavoriteLanguage to favoriteLanguage referencing each other.
favoriteLanguage == newFavoriteLanguage;

// Finally log or print a message using a Literal String, make use of the variables myName and favoriteLanguage.
console.log(myName);
console.log(favoriteLanguage);

// B. Strings ===============================================================================

// Create a variable called firstVariable
let firstVariable;

// Assign it the value of the string "Hello World"
firstVariable = "Hello World";

// Change the value of this variable to some number
firstVariable = 1234;

// Store the value of firstVariable in a new variable called secondVariable

let secondVariable = firstVariable;

// Change the value of secondVariable to any string.
secondVariable = "Welcome";

// What is the value of firstVariable? Log it!
console.log(firstVariable);

// Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated. ex: Hello, my name is Jean Valjean
let yourName = "Jayshree";
console.log(`Hello my name is`, yourName);


// C. Booleans ==============================================================================

// Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console:

  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('name' == "name");
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log( true || false);
  console.log(false && false && false && false && false || true);
  console.log(false == false)
  console.log(e === 'Kevin');
  console.log(a != b != c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a == a != d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');


//   D. The farm ====================================================================================

// Declare a variable animal. Set it to be either "cow" or something else
let animal = "cow";
// Write code that will print out "mooooo" if the it is equal to cow
console.log(animal);
if (animal = "cow") {
    console.log(`mooooo`);
}
else{
    console.log('Not cow');
}
// Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow." Commit
// let animal1 = " "
//  let animaresponse = prompt(`Enter animal name: `);
//  animal1 = animaresponse;
// if (animal1 == "cow") {
//     console.log(`you are cow`);
//     console.log(animal1);
// }
// else{
//     console.log('Hey! You are not a cow');
//     console.log(animal1);
// }


// E. Driver's Ed =========================================================================================

// Make a variable that holds a person's age; be semantic
let age = 10;

// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

if(age >= 16){
    console.log("Here are the keys!");
}
else{
    console.log("Sorry, you're too young.");
}

//III. Arrays & Control flow

// F. Biggie Smalls
// Create a variable that contains an integer.
let abc = 11;

// Write an if ... else statement that:

// console.log() "little number" if the number is entered is less than 100
// console.log()  big number if the number is greater than or equal to 100.
if(abc<=100){
    console.log("little number");
}
else{
    console.log("Big number");
}

// G. Monkey in the Middle
// Write an if ... else if ... else statement:
// console.log() "little number" if the number entered is less than 5.
// If the number entered is more than 10, log "big number".
// Otherwise, log "monkey".
if(abc < 5){
    console.log("Little number");
}
else if (abc > 10){
    console.log("Big number");
}
    else {
        console.log("Monkey");
    }



//  Section-II. Loops ==================================================================
// Remember: USE let when you initialize your for loops!

// This is GOOD: for(let i = 0; i < 100; i++)

// This is NO GOOD: for(i = 0; i < 100; i++)

// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive
let n = 0;
do{
    n++;
    console.log(n);
}while(n < 10);

// Write a loop that will print out all the numbers from 10 up to and including 400
let x = 10;
do{
    x++;
    console.log(x);
}while(x < 400);

// Write a loop that will print out every third number starting with 12 and going no higher than 4000
// for(let y = 12 ; y <= 4000 ; y= y+3)
// {
//     console.log(y);
// }

// let y = 12;
// do{
//    y += 3;
//     console.log(y);
// }while(y < 4000)

// B. Get even ============================================================================

// Print out the numbers that are within the range of 1 - 100
for(let p = 1 ; p<=100 ; p++)
{
    console.log(p);
}
// Adjust your code to add a message next to even numbers only that says: "is an even number"
for(let p = 1 ; p<=100 ; p++)
{
    if(p % 2 == 0){
        console.log(`${p} Is an even number `);
    } else{
        console.log(p);
    }
   
}

// C. Give me Five =====================================================================

// For the numbers 0 - 100, print out "I found a <number>. High five!" if the number is a multiple of five Example Output:
// I found a 5. High five!
// I found a 10. High five!
for(let y = 0 ; y<=100 ; y++){
    if(y % 5 ==0 && y !== 0)
    {
        console.log(`I found a ${y} High five!`);
    }
    // else{
    //     console.log(y);
    // }
}
// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three Example Output:
// I found a 3. Three is a crowd
// I found a 5. High five!
// I found a 6. Three is a crowd
// I found a 9. Three is a crowd
// I found a 10. High five!

//For numbers divisible by both three and five, be sure your code prints both messages

// for(let y = 0 ; y<=100 ; y++){
//     if(y % 5 ==0 && y !== 0)
//     {
//         console.log(`I found a ${y} High five!`);
//     }if(y % 3 == 0 ){
//         console.log(`There is a crowd ${y}`);
//     }
// }


// D. Savings account =====================================================================
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// let bank_account 
// for(let sum = 1 ; sum <= 10 ; sum++){
// bank_account += sum
// console.log(bank_account);
// }


// Check your work! Your bank_account should have $55 in it.

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.

// Check your work! Your bank_account should have $10,100 in it.