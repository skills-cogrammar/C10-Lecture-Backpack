let intervalID = [];

document.getElementById("start").addEventListener('click', 
    () => intervalID.push(setInterval(() => alert("Please take a study break!"),
    5000)));

document.getElementById("stop").addEventListener("click",
    () => {intervalID.map(id => clearInterval(id));
    alert("We have stopped your reminders :(.");});