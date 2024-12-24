var randomNumber1= Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSrc= "images/" + randomDiceImage;
var randomNumber2= Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSrc2= "images/" + randomDiceImage2;
var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];
image1.setAttribute("src",randomDiceImage);
image2.setAttribute("src",randomDiceImage2);
var winner = document.querySelectorAll("h3")[0];
if(randomNumber1 == randomNumber2){
    winner.innerText = "No Winner. Same Score!!";

}
else if(randomNumber1 > randomNumber2){
    winner.innerText = "Player 1 is Winner!!";

}else{
    winner.innerText = "Player 2 is Winner!!";

}