
let davy = document.getElementsByClassName("davy");
let mike = document.getElementsByClassName("mike");
let micky = document.getElementsByClassName("micky");
let peter = document.getElementsByClassName("peter");

let h1 = document.querySelector('h1');

function addListener(whichMonkee, whichClass, whichMessage){
	for(var i = 0 ; i < 4 ; i++) {
		whichMonkee[i].addEventListener('click', function changePicture(){
			
			for(i = 0 ; i < 4 ; i++){
				whichMonkee[i].classList.toggle(whichClass);
				h1.textContent = whichMessage;
				h1.style.color = '#BDD63A';
				h1.style.fontWeight = 'bold';
				h1.style.fontSize = '2.2em'
			}
		});
	}
}

// Find a way to reset squares.

addListener(davy, 'davy-picture', 'How fab, it\'s Davy!');
addListener(mike, 'mike-picture', 'Groovy! Mike is where it\'s at!');
addListener(micky, 'micky-picture', 'Cool! You dig Micky!');
addListener(peter, 'peter-picture', 'Man, that\'s Peter!');

