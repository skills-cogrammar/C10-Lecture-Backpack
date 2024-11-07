// async function getValue() {
//   try {
//     let response = await fetch("https://randomuser.me/api/");
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

let people = document.getElementById("people");
let count = 0;

document.getElementById("addPerson").addEventListener("click", async () => {
  try {
    let response = await fetch("https://randomuser.me/api/");
    let data = await response.json();

    count++;

    let results = data.results[0];
    let first = results.name.first;
    let last = results.name.last;
    let email = results.email;
    let picture = results.picture.large;
    let cell = results.cell;

    let div = document.createElement("div");
    div.setAttribute("class", "person");

    let img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", `Photo of ${first} ${last}`);

    let h3 = document.createElement("h3");
    h3.innerHTML = `${first} ${last}`;

    let firstHead4 = document.createElement("h4");
    firstHead4.innerText = "Email";

    let paragraph1 = document.createElement("p");
    paragraph1.innerHTML = `${email}`;

    let secondHead4 = document.createElement("h4");
    secondHead4.innerText = "Cell";

    let paragraph2 = document.createElement("p");
    paragraph2.innerHTML = `${cell}`;

    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(firstHead4);
    div.appendChild(paragraph1);
    div.appendChild(secondHead4);
    div.appendChild(paragraph2);

    people.appendChild(div);

    console.log(`Counter: ${count}`);
  } catch (error) {
    console.log(error);
  }
});

// {
//     "results": [
//         {
//             "gender": "male",
//             "name": {
//                 "title": "Mr",
//                 "first": "Kirk",
//                 "last": "George"
//             },
//             "location": {
//                 "street": {
//                     "number": 629,
//                     "name": "Paddock Way"
//                 },
//                 "city": "Sunshine Coast",
//                 "state": "New South Wales",
//                 "country": "Australia",
//                 "postcode": 9187,
//                 "coordinates": {
//                     "latitude": "-85.1888",
//                     "longitude": "-104.6218"
//                 },
//                 "timezone": {
//                     "offset": "+4:00",
//                     "description": "Abu Dhabi, Muscat, Baku, Tbilisi"
//                 }
//             },
//             "email": "kirk.george@example.com",
//             "login": {
//                 "uuid": "94919c36-af9a-4892-a0b2-dd33987a7ecc",
//                 "username": "saddog882",
//                 "password": "51505150",
//                 "salt": "P9KOGJky",
//                 "md5": "885ad32f230005221107e5cf1425bd23",
//                 "sha1": "cdab0cfaf7da1b533b11271164a8eff67edc00ee",
//                 "sha256": "d692fdaea22b0ee6ed7999de2cc5e87278b9b4dfee102cb3b004a166a7f1ae2d"
//             },
//             "dob": {
//                 "date": "1992-04-29T19:06:25.872Z",
//                 "age": 32
//             },
//             "registered": {
//                 "date": "2006-08-27T14:38:26.750Z",
//                 "age": 18
//             },
//             "phone": "05-5464-9771",
//             "cell": "0463-839-700",
//             "id": {
//                 "name": "TFN",
//                 "value": "114668574"
//             },
//             "picture": {
//                 "large": "https://randomuser.me/api/portraits/men/21.jpg",
//                 "medium": "https://randomuser.me/api/portraits/med/men/21.jpg",
//                 "thumbnail": "https://randomuser.me/api/portraits/thumb/men/21.jpg"
//             },
//             "nat": "AU"
//         }
//     ],
//     "info": {
//         "seed": "bbb55c056c8f3a11",
//         "results": 1,
//         "page": 1,
//         "version": "1.4"
//     }
// }
