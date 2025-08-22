var random1 = Math.floor(Math.random() * 6) + 1;
var random2 = Math.floor(Math.random() * 6) + 1;

var left = "./images/dice" + random1 + ".png";
document.querySelector(".img1").setAttribute("src", left);

var right = "./images/dice" + random2 + ".png";
document.querySelector(".img2").setAttribute("src", right);

if(random1 == random2)  document.querySelector("h1").innerHTML = "Draw!";
else if(random1 > random2)  document.querySelector("h1").innerHTML = "Player1 Wins!";
else    document.querySelector("h1").innerHTML = "Player2 Wins!";