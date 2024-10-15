let minusButton = document.getElementById('minusbutton');
let plusButton = document.getElementById('plusbutton');

function increase(){
    const input = document.getElementById('shownumber');
    input.value = parseInt(input.value)+1;
}
function decrease() {
    const input = document.getElementById('shownumber')

    if (parseInt(input.value) > 0){
        input.value = parseInt(input.value) -1;
    }
}
minusButton.addEventListener('click', decrease)

plusButton.addEventListener('click', increase)
