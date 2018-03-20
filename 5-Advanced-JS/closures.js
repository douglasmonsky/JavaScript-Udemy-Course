//Lecture: Closures

function retirment(retirmentAge) {
    var a = ' years left until retirment.';
    return function (yearOfBirth) {
        var age = 2018 - yearOfBirth;
        console.log((retirmentAge - age) + a);
    }
}
    
var retirmentUS = retirment(66);
retirmentUS(1994);

retirment(66)(1994);

var retirmentGermany = retirment(65);
var retirmentIceland = retirment(67);

retirmentGermany(1994);
retirmentIceland(1994);


function interviewQuestion(job) {
    return function(name) {
        if (job ==='designer') {
            console.log(name + ' can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log(name + ', what subject do you teach?');
        } else {
            console.log( ' Hello ' + name + ' what do you do?')
        }
     }
}

interviewQuestion('teacher')('Doug');