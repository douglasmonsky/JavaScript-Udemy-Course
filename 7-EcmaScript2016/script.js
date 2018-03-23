//Lecture: let and const

//ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';

console.log(name5);

//ES6
const name6 = 'Jane Smith'; //non mutable
let age6 = 23;  //mutable


//ES%

function driversLicense5(passedTest) {
    if (passedTest) {
        var firstName = 'Doug';
        var yearOfBirth = 1994;
    }
    console.log(firstName + ' is allowed to drive now. They were born in ' 
                    + yearOfBirth)
}

driversLicense5(true);

//ES6


function driversLicense6(passedTest) {
    let firstName;
    const yearOfBirth = 1994;

    if (passedTest) {
        firstName = 'Doug';
    }
    console.log(firstName + ' is allowed to drive now. They were born in ' 
                    + yearOfBirth)
}

driversLicense6(true);


let i =23;

for (let i = 0; i < 5; ++i) {
    console.log(i);
}

console.log(i);