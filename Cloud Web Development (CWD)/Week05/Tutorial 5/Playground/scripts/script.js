async function getValue() {
  try {
    let response = await fetch("https://randomuser.me/api/");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getValue();
