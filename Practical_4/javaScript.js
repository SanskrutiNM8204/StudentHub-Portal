console.log("JavaScript is working!");

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const userType =document.getElementById("userType").value;
        const username =document.getElementById("username").value;
        const password =document.getElementById("password").value;

        console.log("User Type:", userType);
        console.log("Username:", username);

        if (
            userType === "student" &&
            username === "student" &&
            password === "1234"
        ) {

            alert("Student login successful!");

            window.location.href = "Dashboard.html";

        }

        else {

            alert(
                "Login failed! Invalid username, password, or user type."
            );

        }

    });

}
const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        
        console.log("Name:", name);
        console.log("Email:", email);

        alert("Registration successful!!!");
        window.location.href = "Dashboard.html";

    });

}

const menuButton = document.getElementById("menuButton");
if (menuButton) {
    menuButton.addEventListener("click", function()
    {
        const dashboardMenu = document.querySelector(".dashboard-menu");
    }
)};
const themeButton = document.getElementById("themeButton");

if (themeButton) {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeButton.textContent = "Light Mode";
    }


    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");


        if (document.body.classList.contains("dark-mode")) {

            localStorage.setItem("theme", "dark");

            themeButton.textContent = "Light Mode";

        } else {

            localStorage.setItem("theme", "light");

            themeButton.textContent = "Dark Mode";

        }

    });

}
