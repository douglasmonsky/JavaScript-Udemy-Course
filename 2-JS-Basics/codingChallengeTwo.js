var birthdays = [1994, 2001, 1993, 1996, 1992, 1990, 2000];

var ages = [];

for (var i = 0; i < birthdays.length; i++) {
    var age = 2018 - birthdays[i];
    ages.push(age);
}

for (var i = 0; i < ages.length; i++) {
    if (ages[i] >= 18) {
        console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' and therefore, are an adult.');
    } else {
        console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' and therefore, are not an adult.');
    }
}

function printFullAge(birthdays){
    var ages = [];

    for (var i = 0; i < birthdays.length; i++) {
        var age = 2018 - birthdays[i];
        ages.push(age);
    }

    var output = [];
    for (var i = 0; i < ages.length; i++) {
        if (ages[i] >= 18) {
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' and therefore, are an adult.');
            output.push(true);
        } else {
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' and therefore, are not an adult.');
            output.push(false);
        }
    }
    return output;
}

var birthdays2 = [2000, 2006, 2010, 1990, 1994, 2007];

var full_1 = printFullAge(birthdays);
var full_2 = printFullAge(birthdays2);

console.log(full_1);
console.log(full_2);
