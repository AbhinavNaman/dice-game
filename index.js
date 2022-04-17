
var randomNum= Math.floor(Math.random()*6)+1;
var randomDiceImg= "images/dice" + randomNum + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImg);

var randomNum2= Math.floor(Math.random()*6)+1;
var randomDiceImg2= "images/dice" + randomNum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImg2);


if(randomNum > randomNum2){
    document.querySelector("h1").innerHTML="Player1 won";
}
else if(randomNum < randomNum2){
    document.querySelector("h1").innerHTML="Player2 won";
}
else{
    document.querySelector("h1").innerHTML="tie";
}
