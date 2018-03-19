function calculateScore(height, age){
    var score = height + age * 5;
    return score;
}

//should really just use dictionary
var johnHeight = 160;
var johnAge = 20;
var dougHeight = 170;
var dougAge = 23;
var bobHeight = 170;
var bobAge =22;

johnScore = calculateScore(johnHeight, johnAge);
dougScore = calculateScore(dougHeight, dougAge);
bobScore = calculateScore(bobHeight, bobAge);

var scores = [johnScore, dougScore, bobScore];

var winningNumber = Math.max(...scores);

var winnersArray = [];

for (i = 0; i < scores.length; i++) {
    if (scores[i] === winningNumber){
        winnersArray.push(i);
    }
}


if (winnersArray.length >= 2) {
    console.log('there is a tie!')
} else {
    for (i=0; i < winnersArray.length; i++) {
        switch (winnersArray[i]){
            case 0:
                var winner = 'john';
                break;
            case 1:
                var winner = 'doug';
                break;
            case 2:
                var winner = 'bob';
                break;
        }
    console.log(winner + ' has won the game!')
    }
}


