///////////////////////////////////////
// Lecture: Hoisting

calculateAge(1994);

function calculateAge(year) {
    console.log(2018-year);
}


// retirment(1994);  Does not work because below is a function expression, 
//it works above when doing a function decleration.

var retirment = function(year) {
    console.log(65 - (2018 - year));
}

retirment(1994);

//variables

console.log(age);  //returns undefined, because it knows variable exists but, has not yet been defined at this point.
var age = 23;
console.log(age);

function foo() {
    console.log(age); //undefined
    var age = 65;
    console.log(age);
}
foo();
console.log(age);


///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









