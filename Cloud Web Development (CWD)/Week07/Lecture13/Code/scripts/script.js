// Create sessionStorage
if (!sessionStorage.getItem("loaded")) {
  sessionStorage.setItem("loaded", JSON.stringify(true));
  sessionStorage.setItem("students", JSON.stringify([]));
}

function Student(first, last, email, picture, cell) {
  this.first = first;
  this.last = last;
  this.email = email;
  this.picture = picture;
  this.cell = cell;
  this.marks = [];

  this.addMarks = function () {};
}

let people = document.getElementById("people");

document.getElementById("addPerson").addEventListener("click", async () => {
  try {
    let response = await fetch("https://randomuser.me/api/");
    let data = await response.json();

    // Create an object
    let results = data.results[0];

    let stud = new Student(
      results.name.first,
      results.name.last,
      results.email,
      results.picture.large,
      results.cell
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
  } catch (error) {
    console.log(error);
  }
});

// {"results":[{"gender":"male","name":{"title":"Mr","first":"Elmer","last":"Rogers"},"location":{"street":{"number":1267,"name":"Oak Lawn Ave"},"city":"Bowral","state":"Northern Territory","country":"Australia","postcode":9685,"coordinates":{"latitude":"-89.6131","longitude":"-125.4321"},"timezone":{"offset":"-1:00","description":"Azores, Cape Verde Islands"}},"email":"elmer.rogers@example.com","login":{"uuid":"4c62925a-10a0-40b5-abb4-5612c0852f24","username":"sadfish422","password":"polaris","salt":"fcNdbQwy","md5":"06cb66a816b11820f807a64668a5e4a3","sha1":"a333219c0ad664b5803dc6b0f8aaf4155bcdaf80","sha256":"9e0395f64841103541884bc837d92bc1d0f93304c2d438f1631315eb13205c16"},"dob":{"date":"1966-08-04T13:24:23.988Z","age":58},"registered":{"date":"2003-08-11T21:12:34.468Z","age":21},"phone":"07-0531-9129","cell":"0496-499-935","id":{"name":"TFN","value":"685413615"},"picture":{"large":"https://randomuser.me/api/portraits/men/16.jpg","medium":"https://randomuser.me/api/portraits/med/men/16.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/16.jpg"},"nat":"AU"}],"info":{"seed":"30a8f660613e8cce","results":1,"page":1,"version":"1.4"}}
