const firstLoad = () => {
    const entryElement = document.getElementById("entry");
    const gameElement = document.getElementById("game");
    if (gameElement.hidden == true) {
        entryElement.hidden = true;
        gameElement.hidden = false;
    }
}

const rollDice = () => {
    var x = Math.floor((Math.random() * 6) + 1);
    var y = Math.floor((Math.random() * 6) + 1);

    if(x > y) {
        document.getElementById("result").innerHTML = "🚩Player 1 Wins!";
    } else if(x < y) {

        document.getElementById("result").innerHTML = "Player 2 Wins!🚩";
    } else {

        document.getElementById("result").innerHTML = "Its a Draw!";
    }

    document.getElementById("dice-1").src = "images/dice"+x+".png";
    document.getElementById("dice-2").src = "images/dice"+y+".png";
}

document.getElementById("start-btn").addEventListener("click", () => {
    firstLoad();
    rollDice();
})

document.getElementById("reroll-btn").addEventListener("click", () => {
    rollDice();
})