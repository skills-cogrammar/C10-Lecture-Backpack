// The MERN Stack Consists Of:
// MongoDB
// Express.js
// React
// Node.js

// let element = document.getElementById("mernStack");
// console.log(element);
// element.innerHTML = "<li>Testing</li><li>Testing2</li>";

// for (let i = 0; i < element.children.length; i++) {
//   element.children[i].innerText += "!!!";
// }

// let value = document.getElementsByClassName("oddItem");
// value[0].outerText = "Testing";
// console.log(value[0].outerText);

// let item = document.querySelector("ul > li:nth-child(2)");
// console.log(item);

// let test = document.querySelector(".oddItem");
// console.log(test);

// let test = document.querySelector("#mainHeading");
// console.log(test);

let mern = ["MongoDB", "Express.js", "React", "Node.js", "Perl"];
let list = document.getElementById("mernStack");

mern.forEach((value, index) => {
  let item = document.createElement("li");
  item.innerText = value;

  // if (index % 2 == 0) {
  //   item.className = "evenItem";
  // } else {
  //   item.className = "oddItem";
  // }

  // variable = codition ? true : false;
  item.className = index % 2 == 0 ? "evenItem" : "oddItem"; // Hint - classList
  item.setAttribute("id", `listItem${index}`);
  // item.onclick = alert(`Item ${index}`);

  item.addEventListener("click", function (e) {
    console.log(`${this.className} ${this.innerText}`);
    item.setAttribute("class", "clicked");
    console.log(e);
    e.target.innerHTML += ` - has been clicked`;
    // e.target.parentNode.innerHTML = "";
  });

  item.addEventListener("mouseover", function () {
    // console.log(`${this.className} ${this.innerText}`);
    item.setAttribute("class", "over");
  });

  item.addEventListener("mouseout", function () {
    // console.log(`${this.className} ${this.innerText}`);
    item.className = index % 2 == 0 ? "evenItem" : "oddItem";
  });

  list.appendChild(item);
});

document.querySelector("h2").setAttribute("id", "head2");
//remove() method deletes element from DOM tree
document.getElementById("listItem4").remove();
// console.log(mern[4]);
//hidden property makes element invisible
// document.getElementById("listItem4").hidden = true;

function over() {
  console.log("over");
}

let myform = document.forms;
console.log(myform);

myform[0].addEventListener("submit", function (e) {
  e.preventDefault();

  console.log("Default stopped");
  // Obtain password, validate with server, if valid proceed else display error message
});
