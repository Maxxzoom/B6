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
// const arr = ["first", 83, true, false, undefined, null];
// console.log(typeof arr,"type of array");

// 2
// const arr1 = [];
// arr1[0] = "umesh";
// arr1[2] = false;
// console.log(arr1);

// 3
// const arr2=new Array();
// arr2[2]=true;
// console.log(arr2);

// Methods in the array

// length
// console.log(arr.length);

// push();
// arr1.push(3);
// console.log(arr1);

// toString()
// console.log(arr1.toString());

// pop()
// console.log(arr1);
// console.log(arr1.pop());

// shift()
// console.log(arr1.shift());

// unshift()
// arr1.unshift("maxxzoom");
// console.log(arr1);

// splice()
// add new element into array at any specific index
// arr1.splice(1, 2, "tata", "altroz");
// arr1.splice(
//   "starting index",
//   "how many element you want to delete",
//   " if want to add some data(optional)"
// );
// console.log(arr1);

// concat();
// joining 2 arrays
// console.log(arr.concat(arr1));
// console.log(arr.concat(32));

// slice()
// recreate any array from the existing array
// console.log(arr.slice(1,4));

//Array - map,filter, find, reduce, foreach,indexOf, lastIndexOf

// Foreach()
const arr = ["headphone", "mobile", "laptop"];

// const arr1 = [2, 5, 6, 8, 74, 1, 66, 99];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i], "forloop");
// }

// arr.forEach((element) => {
//   console.log(element, "foreach");
// });

// map()
// by iterating each element we can modify the things & return new array

// const maparr = arr.map((ele, index) => {
//   return ele + "s", index;
// });

// console.log(arr);
// console.log(maparr);

// filter()

// const filterarr = arr1.filter((ele, index) => {
//   return ele > 10;
// 2>10 false
// 5 >10 false
// 74 >10 true
// });

// let students = [
//   {
//     id: 1,
//     name: "Rahul",
//     sports: "cricket",
//   },
//   {
//     id: 2,
//     name: "tejas",
//     sports: "basketball",
//   },
//   {
//     id: 3,
//     name: "suyash",
//     sports: "basketball",
//   },
//   {
//     id: 4,
//     name: "umesh",
//     sports: "cricket",
//   },
// ];

// let basketballplayers = students.filter((elem) => {
//   return elem.sports === "basketball";
// });

// console.log(basketballplayers);

// find()- ite will retrun whether element present or not at first index

// const arr1 = [2, 5, 6, 8, 74, 6, 6, 1, 66, 99];

// const is6 = arr1.find((ele) => {
//   return ele == 6;
// });
// console.log(is6);

// indexOf() - if we want to find element position in array
// const indexof = arr1.indexOf(6);
// console.log(indexof);

// lastindexof()-if we want to find element position in array - last
// const lastindexof = arr1.lastIndexOf(6);
// console.log(lastindexof);

// reduce() - it is combination of map, filter

// let reducearr = arr1.reduce((sum, ele) => {
//   return sum + ele;
//1 sum = 0 + 2 = 2
//2 sum= 2 + 5 = 7
// 3 sum =7+6 =13
// }, 4);

// console.log(reducearr);

// const names = ["John", "Alice", "Bob"];

// console.log(names.sort());

// const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

// const counts = fruits.reduce((acc, fruit) => {
//   acc[fruit] = acc[fruit] + 1;
// apple  acc[apple]=acc[apple]+1;        acc= {apple:1,banana:0,orange:0}
// banana  acc[banana]=acc[banana]+1;     acc= {apple:1,banana:1,orange:0}
// apple  acc[apple]=acc[apple]+1
// orange acc[orange]=acc[orange]+1
// banana acc[banana]=acc[banana]+1
// apple  acc[apple]=acc[apple]+1

// acc= {apple:3,banana:2,orange:1}

//   return acc;
// }, {});

// console.log(counts,"Fruits");

// Pass by value
// let a = 5;
// let b = 7;
// console.log(a, b);
// b = a;

// console.log(a, b);

// Pass by reference
// let obj1 = { name: "Tejas" };
// let obj2=obj1;
// console.log(obj1,obj2);
// obj2.name="Suyash";
// let obj3=obj2;
// console.log(obj1,obj2,obj3);
// obj3.name="Umesh";
// console.log(obj1,obj2,obj3);

const arr2 = [2, 5, 6, 8, 74, 6, 6, 1, 66, 99];

const object = { id: 1, name: "anuj", city: "pune" };

// for of => array
for (let value of arr2) {
  console.log(value);
}

// for in => object
for (let prop in object) {
  console.log(prop, object[prop]);
}

// Normal function
function myfun() {}
myfun();

const myfun2 = () => {};
myfun2()(
  // IIFE (immediate involke function execution)
  function () {
    console.log("IIFE");
  }
)();

// Callback function
function mappedfun(ele) {}

arr.map(() => {});

arr.map(function (ele) {
  console.log(ele);
});


// BOM & DOM
// Browser Objects Modal
// we  cant use js file bcoz node is global object
// Navigator
// pop up alert,confirm, prompt
// window
// location



