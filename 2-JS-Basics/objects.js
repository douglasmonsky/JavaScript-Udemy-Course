//Section 2, Lecture 19: Objects

var doug = {
    name: 'Doug',
    lastName: 'Monsky',
    yearOfBirth: '1994',
    job: 'programmer',
    isMarried: false
};

console.log(doug.isMarried);
console.log(doug['lastName']);

var job = 'job';
console.log(doug[job]);

doug.job = 'psychologist';
doug[job] = 'programmer';
console.log(doug);

var jesse = new Object();
jesse.name = 'Jesse';
jesse.lastName = 'Spencer';
jesse['yearOfBirth'] = 1994;
jesse[job] = 'programmer';
jesse['isMarried'] = false;

console.log(jesse)