// About
// Document Objects Modal
// => methods -> doc.getElementById, class,bytagName
// => properties -> doc.getElementById("h1").style, .innerHTML, .src, .href, .class
// => events -> onclick, onmouseover, onmouseup, onhover, onmousedown etc

// doc.getElementById()
// doc.getElementByClassName()
// doc.getElementByTagName()
// doc.write()
// doc.forms[formId]

// Events

// -hover  - mouseup   - mousedown  - click  - onload   -scroll  - focus  - onmouseup  -toggle

// const para = document.getElementById("para");
// function myfun() {
//   para.innerHTML = "calling from script2";
//   para.style.color = "red";
//   para.style.padding = "20px";
//   para.style.fontSize = "30px";
// }

// function onloadfun() {
//   const ele = document.getElementById("demo");
//   const navlinks = document.getElementById("nav-links");
//   const li = document.getElementsByTagName("li");
//   console.log(li.length);
//   navlinks.style.color = "red";
//   ele.className="headerclass"

// }

// Changing the text/style of the element

// const header = document.getElementById("header");
// header.innerHTML = "Hello";
// header.style.color = "red";

// const descriptions = [
//   {
//     text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum fugit nulla voluptatem voluptates eum cum, hic sed aspernatur iusto culpa",
//   },
//   {
//     text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum fugit nulla voluptatem voluptates eum cum, hic sed aspernatur iusto culpa",
//   },
//   {
//     text: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum fugit nulla voluptatem voluptates eum cum, hic sed aspernatur iusto culpa",
//   },
// ];

// query selector
const container = document.querySelector("#container");
const allPara = document.querySelectorAll("p");
console.log(container, allPara);


// 
