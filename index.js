
function randomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

let randomNumber1 = randomNumber();
let player1Dice = "images/dice" + randomNumber1 + ".png";
let randomNumber2 = randomNumber();
let player2Dice = "images/dice" + randomNumber2 + ".png";

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "🚩 Player 1 Win" ;
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerText = "Player 2 Win 🚩" ;
} else {
    document.querySelector("h1").innerText = "Draw!" ;
}

document.querySelector(".img1").setAttribute("src", player1Dice);
document.querySelector(".img2").setAttribute("src", player2Dice);