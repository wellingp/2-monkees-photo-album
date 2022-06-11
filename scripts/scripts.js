
let davy = document.getElementsByClassName("davy");
let mike = document.getElementsByClassName("mike");
let micky = document.getElementsByClassName("micky");
let peter = document.getElementsByClassName("peter");

let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');

//THE ISSUE: THE ARRAY PRODUCED IS NOT A STRING, CAN'T USE STRING METHODS ON IT

var otherMonkees = document.querySelectorAll('td');
var otherMonkeesArray = Array.prototype.slice.call(otherMonkees);

var resetMonkees = otherMonkeesArray.filter(boxtds => boxtds == 'td.davy');
console.log(otherMonkeesArray, 'filtered results:', resetMonkees);

function addListener(whichMonkee, whichClass, whichMessage, reset){
	for(var i = 0 ; i < 4 ; i++) {
		whichMonkee[i].addEventListener('click', function changePicture(){
			
			for(i = 0 ; i < 4 ; i++){
				whichMonkee[i].classList.toggle(whichClass);
				h1.textContent = whichMessage;
				h1.style.color = '#BDD63A';
				h1.style.fontWeight = 'bold';
				h1.style.fontSize = '2.2em';
				h2.style.visibility = 'hidden';
			}

			//Error: not defined for the below.

			

			// if (otherMonkees[key] == whichMonkee){
			// 	for(i = 0 ; i < 12 ; i++){
			// 		otherMonkees[i].classList.toggle(reset);
			// 	}
			// }

		});
	}
}

// Find a way to reset squares.

addListener(davy, 'davy-picture', 'How fab, it\'s Davy!', davy);
addListener(mike, 'mike-picture', 'Groovy! Mike is where it\'s at!', mike);
addListener(micky, 'micky-picture', 'Cool! You dig Micky!', micky);
addListener(peter, 'peter-picture', 'Man, that\'s Peter!', peter);



//ARRAY FILTERING

// let experiment = ['td.davy', 'td.davy-picture', 'td.mike', 'td.peter', 'td.micky', 'td.mike-picture', 'td.peter-picture', 'td.micky-picture'];

// //more than 8 characters are the face pictures
// //less than 8 are the reset

// const result = experiment.filter(word => word.length > 8);

// console.log(result);

