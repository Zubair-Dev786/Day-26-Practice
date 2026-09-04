// function reverseString(str) {

//     let reverse = "";
//     for(let i = str.length -1; i >= 0; i--){
//         reverse += str[i];

//     }

//     return reverse
// }

// let reverseText = reverseString("JavaScript");
// console.log(reverseText);

// function removeDuplicates(array) {
//     let newArray = [];

//     for(let i = 0; i < array.length; i++){
//         if (!newArray.includes(array[i])) {
//             newArray.push(array[i])
//         }
//     }

//     return newArray
// }

// let callFunction = removeDuplicates([1,2,6,3,9,2,8,5,7,9]);
// console.log(callFunction);

// let username = prompt("Please Enter your Name!");

// console.log("Hello " + username + "! Welcome to JavaScript Practice.");

// let student = {
//     name: "Zubair",
//     marks: 83,

//     result:function(){
//         if (this.marks >= 50) {
//             console.log(this.name, "passed");

//         }else{
//             console.log(this.name, "Failed");

//         }
//     }
// }

// student.result()

// let increase = document.getElementById("increase");
// let decrease = document.getElementById("decrease");
// let reset = document.getElementById("reset");
// let counter = document.getElementById("count");

// let count = 0;

// function increament() {
//     count++;
//     counter.textContent = count;
// }

// function decreament() {
//     if (count <= 0) {
//         count = 0;
//     } else {
//         count--;
//         counter.textContent = count;
//     }
// }

// function resetCounter() {
//     count = 0;
//     counter.textContent = count;
// }

// increase.onclick = increament;
// decrease.onclick = decreament;
// reset.onclick = resetCounter;


// let search = document.getElementById("search");
// let button = document.getElementById("check");
// let result = document.getElementById("result");

// function findProduct() {

//     let products = [
//         "Laptop",
//         "Mobile",
//         "Headphones",
//         "Keyboard",
//         "Mouse",
//     ];

//     let input = search.value.trim();

//     if (input === "") {
//         result.textContent = "Please Enter a Product";
//         return
//     }

//     let isFound = false;
//     let foundProduct = [];

//     for(let i = 0; i < products.length; i++){

//         if (products[i].toLowerCase().includes(input.toLowerCase().trim())) {
//             isFound = true;
//             foundProduct.push(products[i]);
//         }
//     }

//     if (isFound === true) {
//         result.textContent = foundProduct;
//     } else {
//         result.textContent = "Product Not Found!";
//     }
// }

// button.onclick = findProduct;

// let name = "Zubair";
// let city = "Karachi";

// console.log(`My name is ${name} and i live in ${city}`);

// let price = 500;
// let quantity = 4;

// console.log(`Total Price: ${price * 4}`);

// let student = "Ali";
// let marks = 75;

// console.log(`${student} scored ${marks} marks`);

// let product = "Laptop";
// let price = 85000;
// let category = "Electronics";

// console.log(`Product : ${product} \nprice Rs. ${price} \nCategory: ${category}`);

// let username = document.getElementById("name");
// let button = document.getElementById("btn");
// let result = document.getElementById("result");

// function showName() {
//     if (username.value.trim() === "") {
//         result.textContent = "Please Enter a Name!";
//     } else {
//         result.textContent = `Hello ${username.value.toUpperCase()}! Welcome to our website.`
//         username.value = "";
//     }
// }

// button.onclick = showName;


// let search = document.getElementById("name");
// let button = document.getElementById("btn");
// let result = document.getElementById("result");

// function checkProduct() {
//     const products = [
//         "Smartphone",
//         "Laptop",
//         "Wireless Headphones",
//         "Smartwatch",
//         "Bluetooth Speaker",
//         "Gaming Mouse",
//         "Mechanical Keyboard",
//         "Power Bank",
//         "USB Flash Drive",
//         "External Hard Drive",
//         "LED Monitor",
//         "Wi-Fi Router",
//         "Fitness Tracker",
//         "DSLR Camera",
//         "Graphic Tablet"
//     ];

//     let isFound = false;
//     let foundProduct = [];

//     let input = search.value.trim();

//     if (input === "") {
//         result.innerHTML = `Please Enter a Product Name!`;
//         return
//     }
    
//     for (let i = 0; i < products.length; i++) {
//         if (products[i].toLowerCase().includes(input.toLowerCase().trim())) {
//             isFound = true;
//             foundProduct.push(products[i]);
//         }
//     }

//     if (isFound === true) {
//         result.innerHTML = `${foundProduct}`;
//     } else {
//         result.innerHTML = `Product Not Found`;
//     }

// }

// button.onclick = checkProduct;
