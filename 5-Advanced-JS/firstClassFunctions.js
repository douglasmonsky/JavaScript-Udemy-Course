//Lecture: Passing functions as arguments

var years = [1990, 1965, 1936, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(yearOfBirth) {
    return 2018 - yearOfBirth;
}

function isOfAge(age) {
    return age >= 18;
}

function maxHeartRate(age) {
    if (age >= 18 && age <= 81 ) {
        return Math.round(206.9 - (0.67 * age));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isOfAge);
var maxHeartRates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(maxHeartRates);

//Lecture: Functions returning functions

function interviewQuestion(job) {
    if (job ==='designer') {
        return function(name) {
            console.log(name + ' can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log(name + ', what subject do you teach?');
        }
    } else {
        return function(name) {
            console.log( ' Hello ' + name + ' what do you do?')
        }
     }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('Doug');

//Lecture: Immediately Invoked Function Expressions(IIFE)
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

(function () {    //this is actual IIFE, previous is the decleration equivalent.
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

(function (goodluck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodluck);
})(5);

(showName = function (name) {console.log(name || "No Name")}) (); // No Name​
showName ("Rich"); // Rich​
showName (); // No Name