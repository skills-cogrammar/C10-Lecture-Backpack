let intervalID;

document.getElementById("start").addEventListener('click', 
    () => intervalID = setInterval(() => alert("Please take a study break!"),
    5000));

document.getElementById("stop").addEventListener("click",
    () => {clearInterval(intervalID); 
    alert("We have stopped your reminders :(.");});