var x = Math.floor((Math.random() * 6) + 1);
var y = Math.floor((Math.random() * 6) + 1);

console.log(x);
console.log(y);

document.getElementsByClassName("img1")[0].src = "images/dice"+x+".png";

document.getElementsByClassName("img2")[0].src = "images/dice"+y+".png";
if(x > y){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}else if(x <y){

    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}else{

    document.querySelector("h1").innerHTML = "Its a Draw!";
}

