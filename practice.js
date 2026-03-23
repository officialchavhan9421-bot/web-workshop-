let user = {
  name: "Piyush",
  age: 20,
  skill: "JavaScript"
};

document.getElementById("title").innerText = user.name
document.getElementById("profile").innerText = user.skill
if(user.age>=18){
    document.getElementById("statusText").innerText = `it is adult with age ${user.age} `
}else{
    document.getElementById("statusText").innerText = `it is not adult with age ${user.age} `
}

let fruits = ["apple", "banana", "mango", "kiwi"];
let result=""
for(let i = 0 ; fruits.length>i; i++){
    result += `${fruits[i]}<br>`
}

document.getElementById("desc").innerHTML = result
    let products = [
  { title: "Shoes", price: 1999 },
  { title: "Watch", price: 2999 },
  { title: "Bag", price: 1499 }
];
let total = 0 
let results=""
for(let i = 0 ; i < products.length;i++){
    total = total+products[i].price

   results+=`${products[i].title} - ${products[i].price}  <br>`
}

 document.getElementById("Output").innerHTML=results 
document.getElementById("output").innerText = `${total}`

function showWelcome(name) {
  document.getElementById("title").innerText=`Welcome ${name}`
}

showWelcome("piyush")

let names = ["Piyush", "Ram", "Aman", "Om", "Vaishnavi"];
let fixed = ""
for(let i = 0;names.length>i ; i++){
    if(names[i].length>4){
      fixed += `${names[i]}-longterm <br>`
    }

    else{
        fixed += `${names[i]}-shortterm <br>`
        
    }
    
}

document.getElementById("statusText").innerHTML = fixed
let btn = document.getElementById("btn");
let statusText = document.getElementById("statusText");

btn.addEventListener("click", function () {
  statusText.innerText = "Button clicked!";
});

let nameInput = document.getElementById("nameInput");
let greetText = document.getElementById("greetText");

nameInput.addEventListener("input", function () {
  greetText.innerText = `Hello ${nameInput.value}`;
});

let button = document.getElementById("button")
button.addEventListener("click",function(){
  button.style.backgroundColor="red";

  document.body.style.backgroundColor="green"

  button.innerText = `button clicked`
})

 let buttons = document.getElementById("toggle-btn")
 let isdark = false
 buttons.addEventListener("click",function(){
 if(isdark){
  document.body.style.backgroundColor = "white"
  document.body.style.color = "white"
  buttons.innerText = `dark mode`
  isdark = false
 }

 else {
  document.body.style.backgroundColor = "black"
  document.body.style.color = "white"
  buttons.innerText = `light mode`
  isdark = true
 }
 })


 
