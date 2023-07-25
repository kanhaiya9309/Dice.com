var radomNumber1=Math.floor(Math.random()*6)+1;  //1-6

var randomDiceImage="dice" +radomNumber1 +".png";

var randomImageSource="images/"+randomDiceImage;

var image1=document.querySelectorAll("img")[0];;

image1.setAttribute("src",randomImageSource);


var randomNumber2=Math.floor(Math.random()*6)+1;

var randomDiceSource2="images/dice" +randomNumber2+".png";

var images2=document.querySelectorAll("img")[1];
images2.setAttribute("src",randomDiceSource2);

if( radomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML=" 🚩Player  1 Wins!";
}
else if(randomNumber2> radomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}