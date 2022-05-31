let davySquare = document.querySelectorAll('.davy');

davySquare.forEach

davySquare.addEventListener('click', showDavy);

function showDavy(){
   davySquare.classList.toggle('.davy-picture');
}