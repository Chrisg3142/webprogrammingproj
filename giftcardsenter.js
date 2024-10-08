const inputfield = document.getElementById('entered_code');

function Submitting_code() {
    const code = inputfield.value.trim();
    // inputfield is just where the user entered the code but renamed so the value can be stored or else code.length wont work since its not a value in Javascript if we dont use the .value;
    if (code.length == 9) {
        inputfield.value = 'Thank you for your submission!'; 
    } else if (code.length > 0) {
        inputfield.value = 'Please enter a valid code!';
    } else {
        inputfield.value = 'Enter a code!'
    }
    inputfield.setAttribute('readonly', true); 
}

document.getElementById('enterbutton').addEventListener('click', Submitting_code);

inputfield.addEventListener('click', function() {
    if (inputfield.readOnly) {
        inputfield.removeAttribute('readonly'); 
        inputfield.value = ''; 
    }
});

