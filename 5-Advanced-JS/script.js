 // Function constructor

var doug = {
    name: 'Doug',
    yearOfBirth: 1994,
    job: 'programmer'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2018 - this.yearOfBirth);
};

Person.prototype.lastName = 'Monsky';

var doug = new Person('Doug', 1994, 'programmer');

doug.calculateAge();

var mike = new Person('Mike', 1993, 'engineer');
var jesse = new Person('Jesse', 1994, 'programmer');

mike.calculateAge();
jesse.calculateAge();

console.log(mike.lastName);

var Book = function(name, pages) {
    this.name = name;
    this.pages = pages;
    this.openBook = function() {
        console.log( this.name + ' has been opened to the first page.')
    }
}

var textbook = new Book('Math textbook', 600);

textbook.openBook();
console.log(textbook.pages);


Book.prototype.closeBook = function() {
    console.log(this.name + ' has been closed.')
}

textbook.closeBook();

document.getElementById('test').textContent = doug.name;


//Object.create

var personProto = {
    calculateAge: function() {
        console.log(2018 - yearOfBirth);
    }
}

var doug = Object.create(personProto);
doug.name = 'Doug';
doug.yearOfBirth = 1994;

var jane = Object.create(personProto, 
{
    name: {value: 'Jane' },
    yearOfBirth: {value: 1969 },
    job: {value: 'designer' }
});