console.log("JavaScript is working!");

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const userType = document.getElementById("userType").value;
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value;

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

        else if (
            userType === "faculty" &&
            username === "faculty" &&
            password === "1234"
        ) {

            alert("Faculty login successful!");
            window.location.href = "../Faculty_pages/F_Dashboard.html";

        }

        else if (
            userType === "admin" &&
            username === "admin" &&
            password === "1234"
        ) {

            alert("Admin login successful!");
            window.location.href = "../Admin_pages/A_Dashboard.html";

        }

        else {

            alert(
                "Login failed!\n\n" +
                "Invalid username, password, or user type."
            );

        }

    });

}


const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword =
            document.getElementById("confirmPassword").value;

        const passwordRegex =
            /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*?&]).{8,}$/;

        if (!passwordRegex.test(password)) {

            alert(
                "Registration failed!\n\n" +
                "Password must contain:\n" +
                "- At least 8 characters\n" +
                "- At least one letter\n" +
                "- At least one number\n" +
                "- At least one special character"
            );

            return;
        }

        if (password !== confirmPassword) {

            alert(
                "Registration failed!\n\n" +
                "Passwords do not match!"
            );

            return;
        }

        console.log("Name:", name);
        console.log("Email:", email);

        alert(
            "Registration successful!\n\n" +
            "You can now login."
        );

        window.location.href = "Login.html";

    });

}


const menuButton = document.getElementById("menuButton");

if (menuButton) {

    menuButton.addEventListener("click", function() {

        const dashboardMenu =
            document.querySelector(".dashboard-menu");

        if (dashboardMenu) {

            dashboardMenu.classList.toggle("show");

        }

    });

}


const themeButton = document.getElementById("themeButton");

if (themeButton) {

    const savedTheme =
        localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");
        themeButton.textContent = "Light Mode";

    }

    themeButton.addEventListener("click", function() {

        document.body.classList.toggle("dark-mode");

        if (
            document.body.classList.contains("dark-mode")
        ) {

            localStorage.setItem("theme", "dark");
            themeButton.textContent = "Light Mode";

        }

        else {

            localStorage.setItem("theme", "light");
            themeButton.textContent = "Dark Mode";

        }

    });

}


const faqQuestions =
    document.querySelectorAll(".faq-question");

if (faqQuestions.length > 0) {

    faqQuestions.forEach(function(question) {

        question.addEventListener("click", function() {

            const answer =
                this.nextElementSibling;

            if (answer) {

                answer.classList.toggle("show");

            }

        });

    });

}


const openModal =
    document.getElementById("openModal");

const closeModal =
    document.getElementById("closeModal");

const eventModal =
    document.getElementById("eventModal");

if (openModal && closeModal && eventModal) {

    openModal.addEventListener("click", function() {

        eventModal.classList.add("show");

    });

    closeModal.addEventListener("click", function() {

        eventModal.classList.remove("show");

    });

    eventModal.addEventListener("click", function(event) {

        if (event.target === eventModal) {

            eventModal.classList.remove("show");

        }

    });

}


const notification =
    document.getElementById("notification");

const closeNotification =
    document.getElementById("closeNotification");

if (notification && closeNotification) {

    closeNotification.addEventListener(
        "click",
        function() {

            notification.style.display = "none";

        }
    );

}


const slides =
    document.querySelectorAll(".slide");

const nextButton =
    document.getElementById("next");

const previousButton =
    document.getElementById("previous");

let currentSlide = 0;

function showSlide(index) {

    slides.forEach(function(slide) {

        slide.classList.remove("active");

    });

    if (slides[index]) {

        slides[index].classList.add("active");

    }

}

if (
    slides.length > 0 &&
    nextButton &&
    previousButton
) {

    nextButton.addEventListener("click", function() {

        currentSlide++;

        if (currentSlide >= slides.length) {

            currentSlide = 0;

        }

        showSlide(currentSlide);

    });

    previousButton.addEventListener("click", function() {

        currentSlide--;

        if (currentSlide < 0) {

            currentSlide = slides.length - 1;

        }

        showSlide(currentSlide);

    });

    showSlide(currentSlide);

}


const cards =
    document.querySelectorAll(".dashboard-card");

if (cards.length > 0) {

    cards.forEach(function(card) {

        card.addEventListener("click", function() {

            console.log(
                "Dashboard card clicked:",
                this.textContent.trim()
            );

        });

    });

}