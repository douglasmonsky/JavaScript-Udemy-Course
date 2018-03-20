//Lecture: Bind, Call and Apply

var doug = {
    name: 'Doug',
    age: 23,
    job: 'programmer',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log(' Good ' + timeOfDay + ' ladies and gentleman! I\'m '  + this.name + 
                        ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log(' Hey, what\'s up? I\'m '  + this.name + 
                        ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' 
                        + timeOfDay + '.');
        }
    }
};


var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};


doug.presentation('friendly', 'morning');

doug.presentation.call(emily, 'friendly', 'afternoon');

doug.presentation.apply(emily, ['friendly', 'afternoon']);

var dougFriendly = doug.presentation.bind(doug, 'friendly');

dougFriendly('morning');
dougFriendly('night');

var emilyFriendly = doug.presentation.bind(emily, 'friendly');

emilyFriendly('night');




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

function isOfAge(limit, age) {
    return age >= limit;
}


var ages = arrayCalc(years, calculateAge);

var americaOfAge = isOfAge.bind(this, 18);

var fullAges = arrayCalc(ages, americaOfAge);
console.log(ages);
console.log(fullAges);