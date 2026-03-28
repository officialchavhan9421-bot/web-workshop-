//  let connect = document.querySelector("h1")
// connect.innerText="JS is connected succesfully"
// connect.style.color = "red"

//  in vscode dom does not work like we cannot see the output in console but we can see the output in browser console because dom is a part of browser and it does not work in vscode but it works in browser so we can see the output in browser console.

let accountEmail = "piyushchavhan@gmail.com"
const accountPassword = "piyush123"
var accountCity = "pune"
var accountID = "1234567890"
let accountState ; 
  
accountEmail = "officialchavhan9421@gmail.com"
// accountPassword = "anythingwhatyouwant"

// notes
// if javascript work here it will give error because we cannot change the value of constant variable
// here we will use Comment to avoid error and we can see the output 
// let declares the variable which is not a global variable which means we can not acces it globally but const is a global variable which means we can access it globally but we cannot change the value of constant variable

 console.log(accountEmail);
 console.log(accountPassword);
 console.log(accountCity);
 console.log(accountID);

//  prefer not to use var because it is a global variable and it can be accessed globally and it can be changed anywhere in the code which can lead to bugs and errors in the code. so it is better to use let and const instead of var.it blocks the scope of the variable to the block in which it is defined and it does not allow to change the value of the variable which can lead to less bugs and errors in the code.

console.log(accountState);

// if we try to access the variable which is not defined it will give us undefined because it is not defined and it does not have any value assigned to it. so it will give us undefined.

console.table({accountEmail, accountPassword, accountCity, accountID, accountState});

// console.table is a method which is used to display the data in a tabular format in the console. it takes an object as an argument and it displays the data in a tabular format. it is very useful to display the data in a tabular format because it is easy to read and understand the data.

