const inputfield = document.getElementById('entered_code');

function checking_for_letter (code) {
    const letters = /[a-zA-z]/;
    return letters.test(code)
}

function checking_for_specialcharacters(code){
    const special_characters = /[!@#$%^&*()_+-=`{}\|;":,><.?/]/
    return special_characters.test(code)
}
function Submitting_code() {
    const code = inputfield.value.trim();
    // inputfield is just where the user entered the code but renamed so the value can be stored or else code.length wont work since its not a value in Javascript if we dont use the .value;
    if (code.length == 9) {
        if (checking_for_specialcharacters(code) == false){
            if (checking_for_letter(code) == true){
                inputfield.value = 'Thank you for your submission!'; 
            }
            else {
                inputfield.value = 'Please enter a valid code!';
            }
        } else {
            inputfield.value = 'Please enter a valid code!'
        }
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

