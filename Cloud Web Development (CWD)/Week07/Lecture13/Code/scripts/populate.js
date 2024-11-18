function Student(first, last, email, picture, cell) {
  this.first = first;
  this.last = last;
  this.email = email;
  this.picture = picture;
  this.cell = cell;
  this.marks = [];
}

let people = document.getElementById("people");

if (sessionStorage.getItem("loaded")) {
  let students = JSON.parse(sessionStorage.getItem("students"));
  students.forEach((element) => {
    let stud = new Student(
      element.first,
      element.last,
      element.email,
      element.picture,
      element.cell
    );

    let div = document.createElement("div");
    div.setAttribute("class", "person");

    let img = document.createElement("img");
    img.setAttribute("src", stud.picture);
    img.setAttribute("alt", `Photo of ${stud.first} ${stud.last}`);

    let h3 = document.createElement("h3");
    h3.innerHTML = `${stud.first} ${stud.last}`;

    let firstHead4 = document.createElement("h4");
    firstHead4.innerText = "Email";

    let paragraph1 = document.createElement("p");
    paragraph1.innerHTML = `${stud.email}`;

    let secondHead4 = document.createElement("h4");
    secondHead4.innerText = "Cell";

    let paragraph2 = document.createElement("p");
    paragraph2.innerHTML = `${stud.cell}`;

    let addBtn = document.createElement("button");
    addBtn.setAttribute("type", "button");
    addBtn.setAttribute("class", "add-exam-btn");
    addBtn.innerHTML = "Wrote Exams";

    addBtn.addEventListener("click", (e) => {
      if (e.isTrusted) {
        let students = JSON.parse(sessionStorage.getItem("students"));
        students.push(stud);
        sessionStorage.setItem("students", JSON.stringify(students));
      }
    });

    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(firstHead4);
    div.appendChild(paragraph1);
    div.appendChild(secondHead4);
    div.appendChild(paragraph2);
    div.appendChild(addBtn);

    people.appendChild(div);
  });
} else {
  people.innerHTML = "Please add students";
}
