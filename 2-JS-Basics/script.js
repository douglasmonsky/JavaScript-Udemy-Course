// Lecture: variables
/*
var name = 'Doug';
console.log(name);

var lastName = 'Monsky';
console.log(lastName);

var age = 23;
console.log(age);

var fullAge = true;
console.log(fullAge)
*/

// Lecture: variables 2
// var name = 'Doug';
// var age = 24;
// console.log(name + age);
// console.log(age + age);

// var job, isMarried;
// console.log(job);

// job = 'programmer';
// isMarried = false;
// // console.log(job);
// // console.log(isMarried);

// console.log(name + ' is a ' + age + ' year old '
//      + job + '. Is he married? ' + isMarried + '.');

// age = 'thirty-six';
// job = 'psychologist';

// console.log(name + ' is a ' + age + ' year old '
//      + job + '. Is he married? ' + isMarried + '.');

// var lastName = prompt('What is the last name?');
// console.log(lastName);

// alert(name + ' is a ' + age + ' year old '
//      + job + '. Is he married? ' + isMarried + '.');


// //Lecture: operators
// var Now = 2018;
// var age = 23;
// var birthYear = Now - age;

// console.log(birthYear);

// var ageDoug = 23;
// var ageMike = 24;

// // Lectur: if else statements

// var name = 'Doug';
// var age = 23;
// var isMarried = false;

// if (isMarried){
//     console.log(name + ' is married!');
// } else {
//     console.log(name + ' is not married!');
// }

// Lecture: boolean logic and switch

var name = 'Doug';
var age = 1;

 if (age <= 12) {
     console.log(name + ' is a child.')
 } else if (age > 12 && age < 20) {
     console.log(name + ' is a teenager.');
 } else if (age >= 20 && age < 30){
     console.log(name + ' is an young adult.');
 } else {
     console.log(name + ' is an adult.')
 }

 if (name == 'Bob' || name == 'Doug') {
    console.log('Correct person.')
 } else {
    console.log('Not valid.')
 }


function test (job, invalid) {
     switch (job) {
        case 'teacher':
            console.log(name + ' teaches kids.');
            invalid = false;
            break;
        case 'driver':
            console.log(name + ' drives a cab in Lisbon.');
            invalid = false;
            break;
        default:
            console.log(name + ' is a ' + job + '.');
    }
    return invalid;
}

invalid = true;
var job = prompt('Is ' + name + " a teacher or a driver?");

while (invalid) {
    invalid = test(job, invalid);
    if (invalid){
        var job = prompt('Please enter a valid option. (teacher or driver)')
    }
}