
let davy = document.getElementsByClassName("davy");
let mike = document.getElementsByClassName("mike");
let micky = document.getElementsByClassName("micky");
let peter = document.getElementsByClassName("peter");

let davyBox = document.querySelector('td.davy');
let mikeBox = document.querySelector('td.mike');
let mickyBox = document.querySelector('td.micky');
let peterBox = document.querySelector('td.peter');

function addDavyListener(){
	for(var i = 0; i < davy.length; i++) {
		davy[i].addEventListener('click', function changePicture(){
			this.classList.toggle('davy-picture');
		});
	}
}

addDavyListener();