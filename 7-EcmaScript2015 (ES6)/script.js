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

//Lecture: Blocks
{
    const a = 1;
    let b = 2;
}

// console.log(a + b);  // {} can be used to create blocks, therefore this does not work as they variables
                    // are contained within the block

//Lecture: String
let firstName = 'Doug';
let lastName = 'Monsky';
const yearOfBirth = 1994;

function calcAge(year) {
    return 2018 - year;
}

//ES5
console.log('This is ' + firstName + ' ' + lastName);

//ES6
console.log(`This is ${firstName} ${lastName}.`);

const n = `${firstName} ${lastName}`;

console.log(n.startsWith('j'));
console.log(n.startsWith('d'));
console.log(n.startsWith('D'));

console.log(n.endsWith('y'));
console.log(n.includes(' '));
console.log(`${firstName} `.repeat(5));


//Lecture: Arrow functions
const years = [1990, 1994, 1965, 1982, 1937];

//ES5
var ages5 = years.map(function(current) {
    return 2018 - current;
});
console.log(ages5);

//ES6
let ages6 = years.map(current => 2018 - current);
console.log(ages6);

ages6 = years.map((current, index) => `Age element ${index + 1}: ${ 2018 - current}.`);
console.log(ages6);

ages6 = years.map((current, index) => {
    const now = new Date().getFullYear();
    const age = now - current;
    return `Age element ${index + 1}: ${ age}.`;
});
console.log(ages6);


//ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        var self = this;
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        })
    }
}
// box5.clickMe();

//ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        })
    }
}
box6.clickMe();




function Person(name) {
    this.name = name;
};

//ES5
Person.prototype.myFriends5 = function(friends) {
    var arr = friends.map(function(current) {
        return this.name + ' is friends with ' + current;
    }.bind(this));
    console.log(arr);
};

var friends = ['Chris', 'Mike', 'Jesse'];
var doug = new Person('Doug');
doug.myFriends5(friends);

//ES6
Person.prototype.myFriends6 = function(friends) {
    var arr = friends.map(current => 
        `${this.name} is friends with ${current}`
    );
    console.log(arr);
};

var friends = ['Chris', 'Mike', 'Jesse'];
var doug = new Person('Doug');
doug.myFriends6(friends);


//Lecture Destructing

//ES5
var john = ['John', 26];
// var name = john[0];
// var age = john[1];

//ES6
const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
    firstName: 'Doug',
    lastName: 'Monsky'
};

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);


function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1994);
console.log(age2);
console.log(retirement);

//Lecture Arrays

const boxes = document.querySelectorAll('.box');

//ES5 for each

var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(current) {
    current.style.backgroundColor = 'dodgerblue';
});

//ES6
const boxesArr6 = Array.from(boxes)
boxesArr6.forEach(current => 
    current.style.backgroundColor = 'dodgerblue');

//ES5 for of loop
for (i = 0; i < boxesArr5.length; ++i) {
    if (boxesArr5[i].className === 'box blue') {
        continue;
    } else {
        boxesArr5[i].textContent = 'I changed to blue!';
    }
}

//ES6 
for (const current of boxesArr6) {
    if (current.className.includes('blue')) {
        continue;
    } else {
        current.textContent = 'I changed to blue!';
    }
}



//ES5 index of
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(current) {
    return current >= 18;
});
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//ES6 findIndex and find 
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));

//Spread operator

function addFourAges(a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller =  ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Doug', ...familyMiller];
console.log(bigFamily);

const heading = document.querySelector('h1');
const boxes2 = document.querySelectorAll('.box');
const all = [heading, ...boxes2];
all.forEach(current => current.style.color = 'purple');

//Rest parameters

//ES5
/*function isFullAge5() {
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function(current) {
        console.log((2018 - current) >= 18);
    })
    console.log(arguments);
}

isFullAge5(1990, 1999, 1965, 2006);

//ES6
function isFullAge6(...years) {
    years.forEach(current => console.log((2018 - current) >=18));
}

isFullAge6(1990, 1999, 1965, 2006);*/


function isFullAge5(limit) {
    var argsArr = Array.prototype.slice.call(arguments, 1);

    argsArr.forEach(function(current) {
        console.log((2018 - current) >= limit);
    })
}

isFullAge5(21, 1990, 1999, 1965, 2006);

//ES6
function isFullAge6(limit, ...years) {
    years.forEach(current => console.log((2018 - current) >= limit));
}

isFullAge6(21, 1990, 1999, 1965, 2006);


//Default parameters

//ES5
function SmithPerson(firstName, lastName, yearOfBirth, nationality) {

    lastName === undefined  ? lastName = 'Smith': lastName;
    nationality === undefined  ? nationality = 'American' : nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', undefined, 1990);
console.log(john);

//ES6
function SmithPerson(firstName, lastName= 'Smith', yearOfBirth, nationality= 'American') {  // I assume you should really put Kwargs at end, just testing
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

let bob = new SmithPerson('Bob', undefined, 1990);
console.log(bob);


// Maps

const question = new Map();
question.set('question', 'What is the official name of the latest major JS version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer');
question.set(false, 'Incorrect');

console.log(question);

console.log(question.get('question'));
console.log(question.size);

// question.delete(4);
// question.has(4);
// question.clear();
question.forEach((value, key) => 
    console.log(`${key}: ${value}`))


for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`${key}: ${value}`)
    }
}

//Classes

//ES5
function Person5(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calcAge = function() {
    var age = new Date().getFullYear = this.yearOfBirth;
    console.log(age);
}

var doug5 = new Person5('Doug', 1994, 'programmer');

//ES6
// class Person6 {
//     constructor(name, yearOfBirth, job) {
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//     }
//     calcAge() {
//         var age = new Date().getFullYear() - this.yearOfBirth;
//         console.log(age);
//     }
//     static greeting() {
//         console.log('Hey there!');
//     }
// }

// doug6 = new Person6('Doug', 1994, 'programmer');
// doug6.calcAge();

// Person6.greeting();

//Inheritence

//ES5
function Person5(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calcAge = function() {
    var agePerson = new Date().getFullYear() - this.yearOfBirth;
    console.log(agePerson);
}


function Athlete5(name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}
Athlete5.prototype = Object.create(Person5.prototype);
Athlete5.prototype.wonMedal = function () {
    ++this.medals;
    console.log(this.medals);
}

var athlete5 = new Athlete5('Doug', 1994, 'Disk Thrower', 1, 1);
athlete5.calcAge();
athlete5.wonMedal();




//ES6
class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calcAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
    static greeting() {
        console.log('Hey there!');
    }
}


class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    wonMedal() {
        console.log(++this.medals);
    }
}

const athlete6 = new Athlete6('Doug', 1994, 'Disk Thrower', 1, 1);
athlete6.calcAge();
athlete6.wonMedal();


