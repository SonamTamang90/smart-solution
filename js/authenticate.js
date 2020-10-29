const attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(e){
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if ( username == "admin" && password == "covid2020"){
        alert ("Login successfully");
        window.location.href = "index.html"; // Redirecting to other page.
        return false;
    }else {
        attempt --;// Decrementing by one.
        alert("You have left "+attempt+" attempt;");
    // Disabling fields after 3 attempts.
    if( attempt == 0){
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submit").disabled = true;
        return false;
    }
}
}

document.querySelector('#login').addEventListener('click', validate);