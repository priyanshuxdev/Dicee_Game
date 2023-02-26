const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomAddress1 = "images/dice" + randomNumber1 + ".png";
const image_1 = document.querySelectorAll("img")[0].setAttribute("src" , randomAddress1);
const winner = document.querySelector("h1");

const randomNumber2 = Math.floor(Math.random() * 6) + 1;
const randomAddress2 = "images/dice" + randomNumber2 + ".png";
const image_2 =  document.querySelectorAll("img")[1].setAttribute("src", randomAddress2);

if(randomAddress1 > randomAddress2) {
    winner.textContent = "🚩Player 1 Wins!";
}
else if(randomAddress2 > randomAddress1){
    winner.textContent = "Player 2 Wins!🚩";
}
else {
    winner.textContent = "Draws!";
}