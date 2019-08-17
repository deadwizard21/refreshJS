//test again

/********************
*variable types
*/
/*
console.log('hello');
undefined when a variable is printed but it has no value
string boolean number
*/




/*********************
*variable mutation and type coercion
*/
/*
var firstName, lastName, age;
firstName = 'grim';
lastName = 'reaper';
age = 666;
age = prompt('what is your age');
console.log('Hi, my name is'+ ' '+ firstName+ ' '+lastName+ ' '+'and i am'+' '+age)
*/







/*********************
*basic operators
*/
/*
var now, yearCarlos, fullAge;
now =2019;
yearCarlos = 1994;
fullAge = 21;

console.log((now - yearCarlos) >= fullAge)

var x, y;
x = y = (3+5) * 4 - 6; // 8
console.log(x);
console.log(y);
x+=2
x++ // this adds 1 to x
*/






/************************
*coding challenge 1
*/
/*
var markMass, markHeight, markBMI, johnMass, johnHeight, johnBMI, markWin;
markMass = 78;
markHeight = 1.69;
markBMI = markMass / (markHeight**2)

johnMass = 92;
johnHeight = 1.95;
johnBMI = johnMass / (johnHeight**2)

markWin = markBMI > johnBMI;
console.log('Is mark\'s BMI higher than john?'+ ' '+markWin);
*/











/***************************
* if else statements
*/
/*
var firstName, civilStatus;
firstName = 'john';
civilStatus = 'single';

if (civilStatus === 'married'){
    console.log(firstName + ' is married!')
} else{
    console.log(firstName + ' is single!')
}


var ismarried = false;
if (ismarried){
    console.log(firstName + ' is married!')
} else{
    console.log(firstName + ' is single!2222')
}




var markMass, markHeight, markBMI, johnMass, johnHeight, johnBMI, markWin;
markMass = 78;
markHeight = 1.69;
markBMI = markMass / (markHeight**2)

johnMass = 192;
johnHeight = 1.95;
johnBMI = johnMass / (johnHeight**2)

if (markBMI > johnBMI){
  console.log('mark\'s BMI is higher than johns');
}else{
  console.log('johns\'s BMI is higher than mark');
}
//markWin = markBMI > johnBMI;
//console.log('Is mark\'s BMI higher than john?'+ ' '+markWin);
*/








/************************************
* Boolean Logic
*/
/*
var firstname, age;
firstName = 'John';
age = 16;

if (age < 13){
  console.log(firstName + ' is a boy.')
//}else if (13 <= age < 20){   //between 13 and 20
}else if (age >=13 && age <20){   //between 13 and 20
  console.log(firstname + ' is a teen')
}else if(age >= 20 && age < 30){
  console.log(firstName + ' is a young man')
}else{
  console.log(firstName + ' is a man')
}
*/











/*****************************************
*the ternary operator and switch statements
*/
/*
var firstName, age;

firstName = 'john';
age = 22;

//ternary operators
age >= 18 ? console.log(firstName+' drinks beer')
: console.log(firstName+' drinks juice.');

var drink =  age >= 21 ? 'beer' : 'juice';
console.log(drink);

//switch statements
var job = 'cop';
switch (job){
	case 'teacher':
	case 'cop':
		console.log('the teacher teaches');
		break;
	case 'ux':
		console.log('ux makes good experiences');
		break;
	default:
		console.log('no case apply then this fires');
}
*/

/* converting previous if els to a switch statement*/
/*
var firstname, age;
firstName = 'John';
age = 16;

if (age < 13){
  console.log(firstName + ' is a boy.')
//}else if (13 <= age < 20){   //between 13 and 20
}else if (age >=13 && age <20){   //between 13 and 20
  console.log(firstname + ' is a teen')
}else if(age >= 20 && age < 30){
  console.log(firstName + ' is a young man')
}else{
  console.log(firstName + ' is a man')
}
*/

/*
var firstName, age;
firstName = 'John';
age = 16;
switch (true){
	case age < 13:
		console.log(firstName + ' is a boy.');
		break;
	case age >=13 && age <20:
		console.log(firstName + ' is a teen');
		break;
	case age >= 20 && age < 30:
		console.log(firstName + ' is a young man');
		break;
	default:
		console.log(firstName + ' is a man')



}
*/

/************************************************
*Truthy and falsy values and Equality operators
*/


/********************************
* challenge
*/
/*
console.log('test');


var johnAVG, mikeAVG, marryAVG;

johnAVG = ((89+120+102)/3);
mikeAVG = ((116+94+123)/3);
marryAVG = ((116+94+123)/3);

switch (true){
	//all tie
	case (johnAVG === mikeAVG && johnAVG === marryAVG && marryAVG === mikeAVG):
		//() ?
		//:
		console.log('It\'s a 3 way tie.');
		break;
	// john and mike tie
	case ((johnAVG < marryAVG)&&(mikeAVG < marryAVG)&&(johnAVG === mikeAVG)):
		//() ?
		//:
		console.log('marry and mike tie');
		break;
	//john and marry tie
	case ((johnAVG > mikeAVG)&&(marryAVG > mikeAVG)&&(johnAVG === marryAVG)):
		//() ?
		//:
		console.log('john and marry tied');
		break;
	// mike and marry tie
	case ((johnAVG < mikeAVG)&&(johnAVG < marryAVG)&&(mikeAVG === marryAVG)):
		//() ?
		//:
		console.log('marry and mike tie');
		break;
	//john wins
	case ((johnAVG > mikeAVG)&&(johnAVG > marryAVG)):
		(((johnAVG - mikeAVG)>10)&& ((johnAVG -marryAVG)>10)) ? console.log('Excellent job john')
		: console.log('good job john');
		console.log('john wins');
		console.log(johnAVG);
		break;
	//mike wins
	case ((johnAVG < mikeAVG)&&(mikeAVG > marryAVG)):
		(((mikeAVG - johnAVG)>10)&& ((mikeAVG -marryAVG)>10)) ? console.log('Excellent job mike')
		: console.log('good job mike');
		console.log('mike wins');
		console.log(mikeAVG);
		break;
	//marry wins
	case ((johnAVG < marryAVG)&&(mikeAVG < marryAVG)):
		(((marryAVG - johnAVG)>10)&& ((marryAVG -mikeAVG)>10)) ? console.log('Excellent job marry')
		: console.log('good job marry');
		console.log('marry wins');
		console.log(marryAVG);
		break;
	default:
		console.log('error somewhere');

}
*/



/*************************************************
*Functions
*/
/*
function calculateAge(birthYear){
	return 2019 - birthYear;
}


function yearsUntilRetirement (year, firstName){
	var age = calculateAge(year)
	var retirement = 65 - age;

	if (retirement > 0){
		console.log(firstName + ' will retire in '+retirement+' years');
	} else{
		console.log(firstName + ' is already retired.');
	}

}

yearsUntilRetirement(1900, 'John');

*/







/*****************************************************
*Function statements and expressions
*/
// function expressions
/*
var whatDoYouDo = function(job, firstName){
	switch(job){
		case 'teacher':
			return (firstName + ' teaches to kids');
		case 'driver':
			return (firstName + ' drives a cab in lisbon.');
		case 'designer':
			return (firstName + ' designs beutiful websites');
		default:
			return (firstName + ' does something else');
	}
}

console.log(whatDoYouDo('teacher','john'));
*/













/***********************************************************
*Arrays
*/
//initialize new array
/*
var names = [ 'john','mike','jane'];
var years = new Array(1990,1995,1948); //not really used


console.log(names[0]);
console.log(names.length);


//mutate array data
names[0] = 'ben'
console.log(names);
names [names.length] = 'marry'; //this will add marry to the end


names.push('jacob'); // added a value to the end of the array
names.unshift('kyle'); //adds a value to the start of the array
names.pop();  // deleted the last value in the array
names.shirt(); // deleted the first value of the array
console.log(names);


var richPoor = names.indexOf('carlos') === -1 ? ' he is rich' : 'he is poor';
console.log(richPoor);
*/



//some random practice code
/*
var information= ['mike','engineer', '55000'];

function updateSalaryInformation(newAmount){
	information.pop();
	information.push(newAmount);
	console.log('information has been updated');


};

function checkInformation(){
	console.log('Your information looks like its up to date');
};



var updateinformation = function (salary){
	information.indexOf(salary) === -1 ? updateSalaryInformation(salary): checkInformation();
};


var askSalary= prompt('what is your salary?');
updateinformation(askSalary);
console.log(information);
*/




 /****************************
 *code 3
 */
/*
var johnTips, johnFinalPaid, billAndTip, tip;
johnTipsAmounts = []; //contains all 3 tip amouns, 1 for each bill
johnFinalPaid = [];  //contains all 3 final paid amounts, this includes tip and food bill


//function decleration not a function expression,,, this uses a if statement
function tipCalculator(amountDue){
	if (amountDue < 50){
		tip = .2 * amountDue;
		billAndTip = amountDue + tip;
		johnTipsAmounts.push(tip);
		johnFinalPaid.push(billAndTip);
		//console.log('1');
	}else if(amountDue >= 50 && amountDue < 200){
		tip = .15 * amountDue;
		billAndTip = amountDue + tip;
		johnTipsAmounts.push(tip);
		johnFinalPaid.push(billAndTip);
		//console.log('2');
	}else if(amountDue >= 200){
		tip = .1 * amountDue;
		billAndTip = amountDue + tip;
		johnTipsAmounts.push(tip);
		johnFinalPaid.push(billAndTip);
		//console.log('3');
	}else{
		//above elseif can be removed and placed in this else staement
	}
}
//function decleration, not a function expression,,,this uses a switch
function tipCalculator2(amountDue){
	switch(true){
		//
		case(amountDue < 50):
			tip = .2 * amountDue;
			billAndTip = amountDue + tip;
			johnTipsAmounts.push(tip);
			johnFinalPaid.push(billAndTip);
			//console.log('1');
			break;
		//
		case (amountDue >= 50 && amountDue < 200):
			tip = .15 * amountDue;
			billAndTip = amountDue + tip;
			johnTipsAmounts.push(tip);
			johnFinalPaid.push(billAndTip);
			//console.log('2');
			break;
		//
		case (amountDue >= 200):
			tip = .1 * amountDue;
			billAndTip = amountDue + tip;
			johnTipsAmounts.push(tip);
			johnFinalPaid.push(billAndTip);
			//console.log('3');
			break;
		//
		default:
			console.log('Error');
	}

}

tipCalculator2(124);
tipCalculator2(48);
tipCalculator2(268);
console.log('The tip(s) John\'s family left: '+ johnTipsAmounts);
console.log('The final amount(s) John\'s family spent: '+johnFinalPaid);
*/



//function decleration w/ a switch
/*
function tipCalculator3(amountDue){
	var tipPercent;
	switch(true){
		case (amountDue <50):
			tipPercent = .2;
			return (tipPercent * amountDue);
			break;
		case (50 <= amountDue && amountDue < 200):
			tipPercent = .15;
			return (tipPercent * amountDue);
			break;
		case (amountDue >=200):
			tipPercent = .1;
			return (tipPercent * amountDue);
			break;
		default:
			console.log('Error');
	}

}

//var bills, tips, finalDueAmount;
var bills = [124,48,268];
var tips = [tipCalculator3(bills[0]),
			tipCalculator3(bills[1]),
			tipCalculator3(bills[2])
			];
var finalDueAmount = [bills[0]+tips[0],
				      bills[1]+tips[1],
					  bills[2]+tips[2]
					  ];

console.log(tips);
console.log(finalDueAmount);
*/









/************************************************************8
*objects and propeties
*/



/*
var cars ={
	model: 'S',
	year:2019,
	make:'Tesla',
	electric: true,
	founders: ['Nikola Telsa', 'Elon Musk']
};


cars.year = 2018;
cars['year'] = 2017;
var x = 'year';
cars[x] = 2016;


console.log(cars);


var shoes = new Object();
shoes.brand = 'jordan';
shoes['price']=25000;

console.log(shoes);
*/











/***************************************
* Objects and methods
*/
/*
var shoes = new Object();
shoes.brand = 'jordan';
shoes['price']=25000;
//shoes['usedPrice'] = function(price){return price -5000;}
shoes['usedPrice'] = function(){this.discountedVersion = this.price -5000};


//console.log(shoes['usedPrice']);
//console.log(shoes.usedPrice(shoes.price));
//console.log(shoes.usedPrice());

//shoes.discountedVersion=shoes.usedPrice();
//console.log(shoes.discountedVersion);
shoes.usedPrice();
console.log(shoes);
*/













/****************************************
* 4
*/
/*
var markMass, markHeight, markBMI, johnMass, johnHeight, johnBMI, markWin;
markMass = 78;
markHeight = 1.69;
markBMI = markMass / (markHeight**2)

johnMass = 92;
johnHeight = 1.95;
johnBMI = johnMass / (johnHeight**2)

markWin = markBMI > johnBMI;
console.log('Is mark\'s BMI higher than john?'+ ' '+markWin);
*/
/*
var john = {
	fullName: 'john',
	mass: 110,
	height: 1.95,
	calculateBMI: function(){
					this.BMI = this.mass / (this.height**2);
					return this.BMI;
	}
};



var mark = {
	fullName: 'mark',
	mass: 78,
	height: 1.69,
	calculateBMI: function(){
					this.BMI = this.mass / (this.height**2);
					return this.BMI;
	}
};




function winnerBMI(){
	//var winner;
	if (mark.calculateBMI() > john.calculateBMI()){
		return (mark.fullName+' has a higher BMI:'+mark.BMI);
	}else if(mark.BMI < john.BMI){
		return (john.fullName+' has a higher BMI:'+john.BMI);
	}else{
		return 'its a tie';
	}

};



console.log(winnerBMI());
*/







/*********************************************************
* Loops and iterations
*/


//for (i=0; i < 10; i++){
//console.log(i);}

// for loop
/*
var john= ['John', 'Smith', 1998, 'designer', false];

for (var i =0; i < john.length; i++){
	console.log(john[i]);
}


//while loop
i=0
while (i< john.length){
	console.log(john[i]);
	i++;
}
*/


//continute and break statements

//var john= ['John', 'Smith', 1998, 'designer', false,'1'];
/*

//continue
for (var i =0; i < john.length; i++){
	if (typeof john[i] !== 'string') continue;
	console.log(john[i]);
}


//break
for (var i =0; i < john.length; i++){
	if (typeof john[i] !== 'string') break;
	console.log(john[i]);
}
*/



//loop backwards
/*
for (var i= john.length-1; i >= 0; i--){
	//if (typeof john[i] !== 'string') continue;
	console.log(john[i]);
};
*/

/******************
* part 5
*/
/*

// VERSION 1
var john;
john = new Object;
john = {
	fullName: 'john smith',
	bills: [124, 48, 268, 180, 42],
	//method function to calulate and add to arrays above^
	calTip: function(){
		for (var i=0; i < this.bills.length; i++){
			var tips= [];
			var billsTips=[];
			var percent;

			if (this.bills[i] <50){
				percent = .2;
			}else if (this.bills[i] >= 50 && this.bills[i] < 200){
				percent = .15;
			}else{
				percent = .1;
			}
			this.tips[i] = percent * this.bills[i];
			this.billsTips[i] = this.tips[i] + this.bills[i];







			switch (true) {
				case (this.bills[i] < 50):
					//add to tip array here
					var tempTip;
					tempTip = .2 * this.bills[i];
					this.tips.push(tempTip);
					//add to billsTip array here
					var tempTipBill;
					tempTipBill = tempTip + this.bills[i];
					this.billsTips.push(tempTipBill);
					continue;
					//
				case ( 50 <= this.bills[i] && this.bills[i]  <= 200):
						//add to tip array here
						var tempTip;
						tempTip = .15 * this.bills[i];
						this.tips.push(tempTip);
						//add to billsTip array here
						var tempTipBill;
						tempTipBill = tempTip + this.bills[i];
						this.billsTips.push(tempTipBill);
						continue;
						//
					case (this.bills[i]  > 200):
							//add to tip array here
							var tempTip;
							tempTip = .1 * this.bills[i];
							this.tips.push(tempTip);
							//add to billsTip array here
							var tempTipBill;
							tempTipBill = tempTip + this.bills[i];
							this.billsTips.push(tempTipBill);
							continue;
				default:
				//

			}

			return 'test'

		}


	}
}

console.log(john.calTip());
console.log(john.john);

*/








/*
var john;
john = new Object;
john = {
	fullName: 'john smith',
	bills: [124, 48, 268, 180, 42],

	//method function to calulate and add to arrays above^
	calTip: function(){

		this.tips= [];
		this.billsTips=[];

		for (var i=0; i < this.bills.length; i++){
			var percent;
			var bill = this.bills[i];

			if (bill <50){
				percent = .2;
			}else if (bill >= 50 && bill < 200){
				percent = .15;
			}else{
				percent = .1;
			}

			this.tips[i] = bill * percent;
			this.billsTips[i] = bill + bill * percent;



		}


	}
}

console.log(john.calTip());
console.log(john);

*/




//create 2 arrays
//one to store the bills and tips
//and one to store just the tips




// VERSION 2
/*
var john={
	fullName: 'John Smith',
	bills: [124, 48, 268, 180, 42],
	calcTips: function(){
		this.tips = [];
		this.totals = [];

		for (var i = 0; i < this.bills[i]; i++){
			var percent;
			var bill = this.bills[i];

			if (bill > 50){
				percent = .2;
			}else if (bill >= 50 && bill <200){
				percent = .15;
			}else{
				percent = .1;
			}

			this.tips[i] = percent * bill;
			this.totals[i] = this.tips[i] + bill;
		}


	}
}


console.log(john.calcTips());
console.log(john);
*/






 //VERSION 1
 /*
var mike={
	fullName: 'Mike Smith',
	bills: [77, 475, 110, 45]

};
var john={
	fullName: 'John Smith',
	bills: [124, 48, 268, 180, 42]
}




function calcAvgTips(bills){
	var i = 0;
	var totalTips = 0;
	var avgTip = 0;
	var numberOfBills = bills.length;


	while (i < numberOfBills){
		var percent;
		var currentBill = bills[i];


		if(currentBill < 100){
			//console.log(currentBill+ ' 1');
			percent = .2;
			totalTips = totalTips + (percent * currentBill);
			i++;
		}else if(100 < currentBill && currentBill < 300){
			//console.log(currentBill+ ' 2');
			percent = .1;
			totalTips = totalTips + (percent * currentBill);
			i++;
		}else{
			//console.log(currentBill+ ' 3');
			percent = .25;
			totalTips = totalTips + (percent * currentBill);
			i++;
		}

};//end of the while loop

	avgTip = totalTips / numberOfBills;
	return avgTip;

};//end of the calcAvgTips




var mikeAvgTip = calcAvgTips(mike.bills);
var johnAvgTip = calcAvgTips(john.bills);
if (mikeAvgTip > johnAvgTip){
	//mike has a higher average tips
	console.log('mike wins with an average tip of '+ mikeAvgTip);
}else{
	//mike has a higher average tips
	console.log('john wins with an average tip of '+ johnAvgTip);
}
*/


/*
var john={
	fullName: 'John Smith',
	bills: [124, 48, 268, 180, 42],
	calcTips: function(){
		this.tips = [];
		this.totals = [];

		for (var i = 0; i < this.bills[i]; i++){
			var percent;
			var bill = this.bills[i];

			if (bill < 50){
				percent = .2;
			}else if (bill >= 50 && bill <200){
				percent = .15;
			}else{
				percent = .1;
			}

			this.tips[i] = percent * bill;
			this.totals[i] = this.tips[i] + bill;
		}

	}
};


var mark={
	fullName: 'mark Smith',
	bills: [77, 475, 110, 45],
	calcTips: function(){
		this.tips = [];
		this.totals = [];

		for (var i = 0; i < this.bills[i]; i++){
			var percent;
			var bill = this.bills[i];

			if (bill < 100){
				percent = .2;
			}else if (bill >= 100 && bill <300){
				percent = .1;
			}else{
				percent = .25;
			}

			this.tips[i] = percent * bill;
			this.totals[i] = this.tips[i] + bill;
		}


	}
};

///////////////////////////////////////////////////
function calcAvgTips(tip){
	len = tip.length;
	//console.log(tip);
	//console.log(len);
	var i =0;
	var theAvgTip = 0;
	var theTotalTip =0;
	//var the totalBill;

	while (i < len){
		theTotalTip += tip[i];
		i++
	}

	theAvgTip = theTotalTip / len;
	return theAvgTip


};

////////////////////////////////////////////////////
//the calculations
mark.calcTips();
john.calcTips();

mark.average =calcAvgTips(mark.tips);
john.average =calcAvgTips(john.tips)


//console.log(john);
//console.log(mark);

if (mark.average > john.average){
	//mike has a higher average tips
	console.log('mark wins with an average tip of '+ mark.average);
}else{
	//mike has a higher average tips
	console.log('john wins with an average tip of '+ john.average);
}
*/











/*
var billGates = {
	fullName: 'Bill Gates',
	bills: [124, 48, 268, 180, 42],
	calcTips: function(){
		var percent;
		this.tips = [];
		for (var i = 0; i < this.bills.length; i++){
			//console.log(this.bills[i]+'tester');
			if (this.bills[i]  < 50){
				percent = .2;
			}else if (this.bills[i] >= 50 && this.bills[i] < 200){
				percent = .15;
			}else{
				percent = .1;
			}

			this.tips[i]= percent * this.bills[i]
		}

	}
};

var donaldTrump ={
	fullName: 'Bill Gates',
	bills: [77, 475, 110, 45],
	calcTips: function(){
		var percent;
		this.tips = [];
		for (var i = 0; i <this.bills.length; i++){
			if (this.bills[i] < 100){
				percent = .2;
			}else if (this.bills[i] >= 100 && this.bills[i] < 300){
				percent = .10;
			}else{
				percent = .25;
				this.tips[i]= percent * this.bills[i]
			}
			this.tips[i]= percent * this.bills[i]
		}

	}
};




function tipCalgAvg(tips){
	console.log(tips);
	var billAveTips = 0;
	var totalTips=0;

	for(var i = 0; i < tips.length; i++){
		totalTips += tips[i]
	}
	billAvgTips = totalTips / tips.length
	return billAvgTips

};








billGates.calcTips();
donaldTrump.calcTips();
//console.log(billGates.tips);
billGatesAvg = tipCalgAvg(billGates.tips);
donaldTrumpAvg = tipCalgAvg(donaldTrump.tips);

if (billGatesAvg > donaldTrump){
	console.log('Bill Gates won: '+billGatesAvg);
}else{
		console.log('Donald Trump won: '+donaldTrumpAvg);
}
*/


//STARWARS CODE HERE
///








/////////////////////////////////////////////////////
/***************************************************
*PART 1   8.17.2019
*/

















/*end*/
