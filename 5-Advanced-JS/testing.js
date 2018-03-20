var Game = function(title, cost, hoursPlayed) {
    this.title = title;
    this.cost = cost;
    this.hoursPlayed = hoursPlayed;
    this.playGame = function() {
        console.log('You are now playing ' + this.title);
    }
}

var league = new Game('League of Legends', 0, 4000);

league.playGame();

document.getElementById('test').textContent = 'You have played ' + league.hoursPlayed + ' hours of ' + league.title;
document.getElementById('change').addEventListener('click', function() {
    document.getElementById('test').textContent = document.getElementById('test').textContent = 'Nerd';
})