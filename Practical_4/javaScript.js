// document.getElementById("loginForm").addEventListener("submit", function(event) {

//     event.preventDefault();

//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;
//     const userType = document.getElementById("userType").value;

//     if (userType === "student") {

//         window.location.href = "Dashboard.html";

//     }

//     else if (userType === "faculty") {

//         window.location.href = "F_Dashboard.html";

//     }

//     else if (userType === "admin") {

//         window.location.href = "A_Dashboard.html";

//     }

//     else {

//         document.getElementById("loginMessage").textContent =
//             "Please select a user type.";

//     }

// });

document.getElementById("loginForm").addEventListener("submit", function(event) {

    // Stop normal form submission
    event.preventDefault();


    // Get values from the form
    const userType = document.getElementById("userType").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const loginMessage = document.getElementById("loginMessage");


    // STUDENT LOGIN

    if (
        userType === "student" &&
        username === "student" &&
        password === "1234"
    ) {

        loginMessage.textContent = "Student login successful!";

        setTimeout(function() {

            window.location.href = "dashboard.html";

        }, 500);

    }


    // FACULTY LOGIN

    else if (
        userType === "faculty" &&
        username === "faculty" &&
        password === "1234"
    ) {

        loginMessage.textContent = "Faculty login successful!";

        setTimeout(function() {

            window.location.href = "../Faculty_pages/F_Dashboard.html";

        }, 500);

    }


    // ADMIN LOGIN

    else if (
        userType === "admin" &&
        username === "admin" &&
        password === "1234"
    ) {

        loginMessage.textContent = "Admin login successful!";

        setTimeout(function() {

            window.location.href = "../Admin_pages/A_Dashboard.html";

        }, 500);

    }


    // INVALID LOGIN

    else {

        loginMessage.textContent =
            "Invalid username, password, or user type.";

    }

});