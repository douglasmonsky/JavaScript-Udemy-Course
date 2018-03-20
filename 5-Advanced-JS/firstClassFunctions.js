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