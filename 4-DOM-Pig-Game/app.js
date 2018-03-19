/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/



var scores, roundScore, activePlayer;

function newGame(){
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    document.querySelector(".dice").style.display = 'none';
    for (i = 0; i < 2; i++){
        document.getElementById("score-" + i).textContent = 0;
        document.getElementById("current-" + i).textContent = 0;
        document.getElementById('name-' + activePlayer).textContent = 'Player ' + i;
    }
}


function endRound(){
    roundScore = 0;
     document.getElementById("current-" + activePlayer).textContent = roundScore;
     document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
     document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
     document.querySelector('.dice').style.display = 'none';

}

newGame();

var x = document.querySelector("#current-0").textContent;
console.log(x);


document.querySelector(".btn-new").addEventListener('click', function() {
    newGame();
});


document.querySelector(".btn-roll").addEventListener('click', function() {
    // Random Number
    var dice = Math.floor(Math.random() * 6) + 1;
    //Display result
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    document.querySelector("#current-" + activePlayer).textContent = dice;
    //Update the round score if the rolled number != 1
    if (dice !== 1) {
        roundScore += dice;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    } else {
        endRound();
    }
});


document.querySelector(".btn-hold").addEventListener('click', function() {
    scores[activePlayer] += roundScore;
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
    if (scores[activePlayer] >= 100){
        document.getElementById('name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
         document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    } else {
        endRound();
    }
});
