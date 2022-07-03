function play() {
var randomNumber1 = (Math.floor(Math.random() * 6)) + 1;

document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");

var randomNumber2 = (Math.floor(Math.random() * 6)) + 1;

document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
document.querySelector("h1").innerHTML = "&#127942; Игрок 1 выиграл";
} else if (randomNumber1 < randomNumber2) {
document.querySelector("h1").innerHTML = "Игрок 2 выиграл &#127942;";
}
else { document.querySelector("h1").innerHTML = "Ничья &#129309;";}
document.querySelector("#button").value = "Сыграть ещё?";
}