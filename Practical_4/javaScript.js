document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const userType = document.getElementById("userType").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const loginMessage = document.getElementById("loginMessage");

    if (
        userType === "student" &&
        username === "student" &&
        password === "1234"
    ) {

        loginMessage.textContent = "Student login successful!";

        setTimeout(function() {
            window.location.href = "Dashboard.html";
        }, 500);

    }
    
    else {

        loginMessage.textContent =
            "Invalid username, password, or user type.";

    }

});