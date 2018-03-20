/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/



var scores, roundScore, sixRolled, activePlayer, gameRunning, winningScore;

function newGame(){
    winningScore = document.querySelector(".winning-score").value;
    if (winningScore) {
        gameRunning = true;
        scores = [0, 0];
        roundScore = 0;
        activePlayer = 0;
        sixRolled = false;
        document.querySelector(".dice").style.display = 'none';
        document.querySelector(".dice2").style.display = 'none';
        for (i = 0; i < 2; i++) {
            document.getElementById("score-" + i).textContent = 0;
            document.getElementById("current-" + i).textContent = 0;
            document.getElementById('name-' + i).textContent = 'Player ' + (i + 1);
            document.getElementById("alert-" + i).textContent = '';
            document.querySelector('.player-' + i + '-panel').classList.remove('winner');
            document.querySelector('.player-' + i + '-panel').classList.remove('active');
        }
        document.querySelector('.player-0-panel').classList.add('active');
    } else {
        alert('Enter Winning Score, then hit New Game.')
    }
}


function endRound(){
    roundScore = 0;
     document.getElementById("current-" + activePlayer).textContent = roundScore;
     document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
     document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('active');
     sixRolled = false;
     // document.querySelector('.dice').style.display = 'none';

}

document.querySelector(".dice").style.display = 'none';
document.querySelector(".dice2").style.display = 'none';

var x = document.querySelector("#current-0").textContent;
console.log(x);


document.querySelector(".btn-new").addEventListener('click', newGame);

document.querySelector(".btn-roll").addEventListener('click', function() {
    if (gameRunning) {
        document.getElementById("alert-0").textContent = '';
        document.getElementById("alert-1").textContent = '';
        // Random Number
        var dice = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        //Display result
        var diceDOM = document.querySelector(".dice");
        var dice2DOM = document.querySelector(".dice2");
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        dice2DOM.style.display = 'block';
        dice2DOM.src = 'dice-' + dice2 + '.png';
        document.querySelector("#current-" + activePlayer).textContent = dice + dice2;
        //Update the round score if the rolled number != 1
        if (dice !== 1 && dice2 !== 1) {
            roundScore += dice + dice2;
            document.getElementById("current-" + activePlayer).textContent = roundScore;
        } else {
            document.getElementById("alert-" + activePlayer).textContent = 'You rolled a one!';
            endRound();
        }
        if (dice === 6 || dice2 === 6) {
            if (sixRolled) {
                 scores[activePlayer] = 0;
                document.getElementById("score-" + activePlayer).textContent = 0;
                document.getElementById("alert-" + activePlayer).textContent = 'You rolled two sixes in a row!';
                endRound();
            } else {
                sixRolled = true;
            }
        }
    }
});


document.querySelector(".btn-hold").addEventListener('click', function() {
    if (gameRunning) {
        scores[activePlayer] += roundScore;
        document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
        if (scores[activePlayer] >= winningScore){
            document.getElementById('name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gameRunning = false;
        } else {
            endRound();
        }
    }
});
  