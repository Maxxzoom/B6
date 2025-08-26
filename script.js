// JS

// Js is a scripting langauage for web applications

// Benifits
//  - JS provides end-to-end development frontend(JS, React etc) and backend(Nodejs, expressJs etc)
// JS is lightweight language

// var name
// var Name

// What we can do using JS
//  - Manupulating HTML pages
//  - Validation
//  - Data handle
//  - Event handling
//  - Backend data loading
//  - Server management

// Execuation Context
// 1.Creation Phase           2. Execuation Phase

// Funcational Context
// 1.Creation Phase           2. Execuation Phase

// var
// it is  Global scope
// it can be reassign the value and it can redeclare the variable
// var e = "Maxxzoom";
// var e = "zoom";
// var f = "Limited";
// function add() {
//   var g = e + f;
//   console.log(g);
// }

// add();

// let
// it is block scope
// it can be reassign the value but we cannot redeclare the same variable
// let i = 5;
// // i = 6;
// let j = 34;
// function add2() {
//   let k = i + j;
//   console.log(k);
// }
// console.log(k);

// var a = 34;
// let b = 78;

// const
// it is block scope
// it cannot be reassign and it cannot be redeclare
// const PI = 3.14;
// console.log(PI);

// function add() {
//   let c = 54;
//   console.log(a + b);
// }

// add();

// JS operators

// Assignment operator (=)
// let d = 30;
// Variable variablename =  value;

// Addition operator
// let f = 5;
// let g = 7;
// let h = f + g;

// Subtraction
// Multiplication

// let f = 5;
// let g = 7;
// console.log(f * g);

// Exponentiation
// let f = 2;
// let g = 3;
// console.log(f ** g);

// Division(/)
// Modulus (%)

// Increment
// let i = 2;

// console.log(i++);
// console.log(i);

// Decrement
// let i = 2;

// console.log(i--);
// console.log(i);

// Addition Assignment operator
// let j=3;
// j+=2; /* j=j+2 */
// console.log(j);

// Comparison operators
// equal to
// let a = 5;
// let b = 6;
// if (a == b) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// equal value and equal type
// let a = 6;
// let b = "6";
// if (a === b) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// let a = true;
// let b ="true";
// if (a == b) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// Functions

// Funcation are fundamental building blocks in all programing lang
// Funcation are resuable block of code

function add(a, b, c = 0) {
  console.log(a + b + c);
}

// Arrow function
const addition = (x, y) => {
  console.log(x, y);
};

// addition(4, 5);

// add(5, 6, 9);
// add(6, 8);
// add(6, 8);
// add(6, 8);
// add(6, 8);
// add(6, 8);
// add(6, 8);
// add(6, 8);
// add(6, 8);
// add(6, 8);
// add(6, 8);
// add(6, 8);
// add(6, 8);

// Objects
// an object is a collection of properties

const mobile = {
  model: "iphone",
  memory: 128,
  screen: "6.7",
  camera: "8 mega pixel",
  getScreenandMemory: function () {
    return (
      "Screen size is" +
      " " +
      this.screen +
      " " +
      "and memory is" +
      " " +
      this.memory
    );
  },
};

// console.log(mobile.model);
// console.log(mobile.memory);
// console.log(mobile.getScreenandMemory());

// Update/add property
// mobile.memory = 256;
// mobile.sdmemory = 64;
// console.log(mobile.memory);
// console.log(mobile.sdmemory);

// delete properties
// delete mobile.memory;
// console.log(mobile.memory);

// Array
// This is special kind of object
// is not fixed length

// 3 ways of arr

// 1
const arr = ["first", 83, true, false, undefined, null];
// console.log(typeof arr,"type of array");

// 2
const arr1 = [];
arr1[0] = "umesh";
arr1[2] = false;
// console.log(arr1);

// 3
// const arr2=new Array();
// arr2[2]=true;
// console.log(arr2);

// Methods in the array

// length
// console.log(arr.length);

// push();
arr1.push(3);
// console.log(arr1);

// toString()
// console.log(arr1.toString());

// pop()
console.log(arr1);
// console.log(arr1.pop());

// shift()
// console.log(arr1.shift());

// unshift()
// arr1.unshift("maxxzoom");
// console.log(arr1);

// splice()
// add new element into array at any specific index
arr1.splice(1, 2, "tata", "altroz");
// arr1.splice(
//   "starting index",
//   "how many element you want to delete",
//   " if want to add some data(optional)"
// );
// console.log(arr1);

// concat();
// joining 2 arrays
console.log(arr.concat(arr1));
console.log(arr.concat(32));


// slice()
// recreate any array from the existing array
console.log(arr.slice(1,4));



//Array - map,filter, find, reduce, foreach,indexOf, lastIndexOf 
