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
// box6.clickMe();




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
