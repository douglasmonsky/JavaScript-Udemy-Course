//Section 2, Lecture 18: Arrays
var names = ['Doug', 'Jesse', 'Mike'];
var years = new Array(1994, 1994, 1993);  //less common way

console.log(names[0]);
console.log(years[0]);

names[1] = 'Chris';
console.log(names);

var doug = ['Doug', 'Monsky', 1994, 'programmer', false];

doug.push('orange');
doug.unshift('Mr.');

var lastValue = doug.pop();
var firstValue = doug.shift();

console.log(doug);

// alert(doug.indexOf('Monsky'));

if (doug.indexOf('teacher') === -1 ) {          //indexOf returns -1 if value is not found.
    console.log('Doug is not a teacher.')
}