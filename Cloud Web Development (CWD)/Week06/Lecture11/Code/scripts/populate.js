let students = sessionStorage.getItem("numberPeople");
document.getElementById("people").innerHTML = students;

let person = JSON.parse(sessionStorage.getItem("person"));
console.log(person);
