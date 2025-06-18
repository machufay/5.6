let button = document.querySelector(".password-check");

// 1 - Write your function here
// Write a function to test if the password is correct
// The function should take in the text of the password
// as an input, and return true if the password is correct
let password = document.querySelector(".password-input").value;

function passwordCheck(a){
    if (a === "password"){
        return "true";
    } else {
        return "false";
    }
};

button.addEventListener("click", function() {


    // 2 - Call your function here, store the result in a variable
    // and use the variable to determine which message to display

        if (passwordCheck(password) === "true") {
            document.querySelector(".yes").style = "display:block";
            document.querySelector(".denied").style = "display:none";
        } else {
            document.querySelector(".denied").style = "display:block";
            document.querySelector(".yes").style = "display:none";
        }

});

