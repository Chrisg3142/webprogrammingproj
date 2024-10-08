
console.log("hgellow")

const thank_you_message = "Thank you for submitting your code";
let button = document.getElementById("enterbutton");
let code_entry = document.getElementById("messagebox");

button.addEventListener("click", function() {
    if (code_entry.length < 9){
        code_entry.innerText = "The code should be a 9 alpha numeric code";
    } else {
        code_entry.innerText = thank_you_message;
    }
    console.log("the end")
})

