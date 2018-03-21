(function() {
    function Question(question, answer, choices) {
        this.question = question;
        this.answer = answer;
        this.choices = choices;
    }

    Question.prototype.displayQuestion = function() {
            console.log(this.question)
            for (var i = 0; i < this.choices.length; ++i) {
                console.log(i + ': ' + this.choices[i])
            }
        }
    

    var questionOne = new Question('Who made this quiz?', 'Doug', ['Doug', 'Jesse', 'Mike', 'None of the above'])
    var questionTwo = new Question('Who is the tallest?', 'Jesse', ['Doug', 'Jesse', 'Mike', 'None of the above'])
    var questionThree = new Question('Who is the oldest?', 'Mike', ['Doug', 'Jesse', 'Mike', 'None of the above'])

    var questions = [questionOne, questionTwo, questionThree];
    
    var correct = (function() {
            var counter = 0;
            return function() {
                return ++counter;
            }
        })();


    
    while (true) {
        var randomQuestion = questions[Math.floor(Math.random() * questions.length)]
        randomQuestion.displayQuestion();
        var playerChoice = prompt('Enter your answer choice');
        if (randomQuestion.choices[playerChoice] === randomQuestion.answer) {
            correctTotal = correct();
            console.log('That is correct, current score: ' + correctTotal);
        } else if (playerChoice === 'exit') {
            break;
           console.log('Final Score: ' + correctTotal);
        } else {
            console.log('That is the wrong answer, current score: ' + correctTotal); 
        }
    };
})();
