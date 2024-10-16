/**let minusButton = document.getElementById('minusbutton');
let plusButton = document.getElementById('plusbutton');

let minusButton1 = document.getElementById('minusbutton1');
let plusButton1 = document.getElementById('plusbutton1');


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

minusButton1.addEventListener('click', decrease)
plusButton1.addEventListener('click', function(){
    const input = document.getElementById('shownumber1');
    increase();
})**/



    // Get all inputNumber divs to loop through them 
const inputnums = document.querySelectorAll('.inputNumber'); 
inputnums.forEach((inputDiv, index) => { 
    // get buttons and give value
    const minusButton = inputDiv.querySelector(`#minusbutton${index}`); 
    const plusButton = inputDiv.querySelector(`#plusbutton${index}`);
    const showNumber = inputDiv.querySelector(`#shownumber${index}`);
    
    //make functions to for changing values
    minusButton.addEventListener('click', () => { 
    let currentValue = parseInt(showNumber.value); 
    if (currentValue > 0) { 
        showNumber.value = currentValue - 1; 
    } }); 
    plusButton.addEventListener('click', () => { 
        let currentValue = parseInt(showNumber.value); 
        showNumber.value = currentValue + 1; }); 
    });