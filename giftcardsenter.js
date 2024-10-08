
console.log("hgellow")

const thank_you_message = "Thank you for submitting your code";
let button = document.getElementById("enterbutton");
let code_entry = document.getElementById("messagebox");

button.addEventListener("click", function() {
    code_entry.innerText = thank_you_message;
})

