//Section 2, Lecture 16

function calculateAge(yearOfBirth) {
    var age = 2018 - yearOfBirth;
    return age
}

var ageDoug = calculateAge(1994);
var ageKyle = calculateAge(1993);
console.log(ageDoug);
console.log(ageKyle);

function yearsUntilRetirement(name, yearOfBirth) {
    var age = calculateAge(yearOfBirth);
    var retirment = 65 - age;
    if (retirment > 0) {
        console.log(name + ' retires in ' +  retirment + ' years.');
    } else {
        console.log(name + ' has already retired!');
    }
}


yearsUntilRetirement('Doug', 1994);
yearsUntilRetirement('Jon', 1940);