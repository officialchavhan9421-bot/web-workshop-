// prompt("Enter a number: ");
// let Name = prompt("Enter your name: ");
// console.log(typeof Name);

// let change = Number(Name);
// console.log(typeof change);     because of prompt it will not work
// console.log( change);

let rollNumber = "12345"
console.log(typeof rollNumber);

let changeRollNumber = Number(rollNumber);
console.log(typeof changeRollNumber);
console.log(changeRollNumber);


// this code is used to convert the string value of Name to a number using the Number() function.
//  it will return NaN because the value of Name is not a numeric value and it cannot be converted to a number. so it will return NaN which stands for Not a Number
//  it is a special value which represents the result of an invalid mathematical operation. it is used to indicate that the result of a mathematical operation is not a valid number.
// but in the case of rollNumber it will return 12345 because the value of rollNumber is a numeric value and it can be converted to a number. so it will return 12345 which is the numeric value of rollNumber.
// for value of rollNumber is changed and if it is Boolean,null,or undefined it will return 0 because it cannot be converted to a number. so it will return 0 which is the numeric value of Boolean,null,or undefined. but in the case of Name it will return NaN because it cannot be converted to a number. so it will return NaN which is the numeric value of Name. 

let isloggedIn = true
console.log(typeof isloggedIn);
let changeIsLoggedIn = Number(isloggedIn);
console.log(typeof changeIsLoggedIn);
console.log(changeIsLoggedIn);

// in this case we can see that the value of isloggedIn is true which is a boolean value and it can be converted to a number. so it will return 1 which is the numeric value of true. if the value of isloggedIn is false it will return 0 which is the numeric value of false. but in the case of Name it will return NaN because it cannot be converted to a number. so it will return NaN which is the numeric value of Name.


// ------------------------------------------------------------------------------------------------------------------------------------------------------------operatorsin-------------------------------------------------------------javascript----------------------------------------------------------------------------------------------------------------------------------------------

let a = 10
let b = 20
console.log(a + b); // addition operator
console.log(a - b); // subtraction operator
console.log(a * b); // multiplication operator
console.log(a / b); // division operator
console.log(a % b); // modulus operator
console.log(a ** b); // exponentiation operator



