

var randomNumber1 = Math.floor(Math.random() *6) + 1;



var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;
var image1  = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

var randomNumber2 = Math.floor(Math.random() *6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll('img')[1];
image2.setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "player 2 you are a dissapointment";
}
else if(randomNumber1 === randomNumber2){
  document.querySelector("h1").innerHTML = "lets call it a day";
}
else{
  document.querySelector("h1").innerHTML = "player 1 your life is sad man";
}
