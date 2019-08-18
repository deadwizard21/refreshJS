///////////////////////////////////////
// Lecture: Hoisting

/*
function calculateAge(year){
  console.log(2016-year);
}
calculateAge(1965);
*/
//arguments object is created, containing all the arguments
//that were passed into the function
//stored 1965 'argument' for calculatedAge

// then scan for function declerations
//and they are set as a property in the VO
// calculatedAge is found


//code is scanned for variable declerations and are set as a property
// in the VO and set to undefined

//note:
//function calculated age is in the global executing
// then calculatedage(1965) calls the function
//and then add a executiong context ont top of the global
//executing context in the'executing stack'

/*
var retirement = function(year){
  console.log(65-(2016-year));
}
retirement(1996);
*/
//argument object is created and the 1996 argument is stores for
//retirement

//function declerations
//NA

//variable declerations are saved in the VA as propertys
// but set to undefined until the creating phase is done
// and we enter the executing phase

/*
retirement(1996);
var retirement = function(year){
  console.log(65-(2016-year));
}
*/
// argument object and arguments are saved
// retirement
//1996

// function declerations are creted as propertys
//NA
//retirment set to undefined

//then it executes line by line
//retirment is not a function but a varaible with a values
/*
  var age=65;
function foo(){
  console.log(age);
  var age=65;
};
foo();
*/

//argument has been something
//age is undefined
//prints undefined







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
    //console.log(a + b + c + d);
	console.log(c);
}
*/



///////////////////////////////////////
// Lecture: The this keyword


var john = {
	name: 'john',
	yearOfBirth: 1990,
	calculateAge: function(){
		console.log(2016- this.yearOfBirth);
	
	}
};


var mike = {
	name: 'mike',
	yearOfBirth: 1984,
}

mike.calculateAge = john.calculateAge;
mike.calculateAge();

//john.calculateAge();
//console.log(this);














