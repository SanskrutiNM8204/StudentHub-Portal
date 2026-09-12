console.log("JavaScript is working!");

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const userType =
            document.getElementById("userType").value;

        const username =
            document.getElementById("username").value.trim();

        const password =
            document.getElementById("password").value;

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

            window.location.href =
                "../Faculty_pages/F_Dashboard.html";

        }

        else if (
            userType === "admin" &&
            username === "admin" &&
            password === "1234"
        ) {

            alert("Admin login successful!");

            window.location.href =
                "../Admin_pages/A_Dashboard.html";

        }

        else {

            alert(
                "Login failed!\n\n" +
                "Invalid username, password, or user type."
            );

        }

    });

}

const registerForm =
    document.getElementById("registerForm");

if (registerForm) {

    const nameInput =
        document.getElementById("name");

    const emailInput =
        document.getElementById("email");

    const mobileInput =
        document.getElementById("mobile");

    const passwordInput =
        document.getElementById("password");

    const confirmPasswordInput =
        document.getElementById("confirmPassword");

    const courseInput =
        document.getElementById("course");

    const yearInput =
        document.getElementById("year");

    const termsInput =
        document.getElementById("terms");

    const nameError =
        document.getElementById("nameError");

    const emailError =
        document.getElementById("emailError");

    const mobileError =
        document.getElementById("mobileError");

    const passwordError =
        document.getElementById("passwordError");

    const confirmPasswordError =
        document.getElementById("confirmPasswordError");

    const courseError =
        document.getElementById("courseError");

    const yearError =
        document.getElementById("yearError");

    const genderError =
        document.getElementById("genderError");

    const termsError =
        document.getElementById("termsError");

    const passwordStrength =
        document.getElementById("passwordStrength");

    const registerMessage =
        document.getElementById("registerMessage");

    const nameRegex =
        /^[A-Za-z ]{3,30}$/;

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const mobileRegex =
        /^[6-9]\d{9}$/;

    const passwordRegex =
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%^&+=!]).{8,}$/;

    function showError(
        input,
        errorElement,
        message
    ) {

        input.classList.add("error");

        input.classList.remove("valid");

        errorElement.textContent = message;

    }

    function showSuccess(
        input,
        errorElement
    ) {

        input.classList.remove("error");

        input.classList.add("valid");

        errorElement.textContent = "";

    }

    function validateName() {

        const name =
            nameInput.value.trim();

        if (name === "") {

            showError(
                nameInput,
                nameError,
                "Name is required."
            );

            return false;
        }

        if (!nameRegex.test(name)) {

            showError(
                nameInput,
                nameError,
                "Name must contain only letters and spaces."
            );

            return false;
        }

        showSuccess(
            nameInput,
            nameError
        );

        return true;
    }

    function validateEmail() {

        const email =
            emailInput.value.trim();

        if (email === "") {

            showError(
                emailInput,
                emailError,
                "Email is required."
            );

            return false;
        }

        if (!emailRegex.test(email)) {

            showError(
                emailInput,
                emailError,
                "Please enter a valid email address."
            );

            return false;
        }

        showSuccess(
            emailInput,
            emailError
        );

        return true;
    }

    function validateMobile() {

        const mobile =
            mobileInput.value.trim();

        if (mobile === "") {

            showError(
                mobileInput,
                mobileError,
                "Mobile number is required."
            );

            return false;
        }

        if (!mobileRegex.test(mobile)) {

            showError(
                mobileInput,
                mobileError,
                "Enter a valid 10 digit mobile number."
            );

            return false;
        }

        showSuccess(
            mobileInput,
            mobileError
        );

        return true;
    }

    function checkPasswordStrength() {

        const password =
            passwordInput.value;

        if (password === "") {

            passwordStrength.textContent = "";

            return;
        }

        let score = 0;

        if (password.length >= 8) {
            score++;
        }

        if (/[A-Z]/.test(password)) {
            score++;
        }

        if (/[a-z]/.test(password)) {
            score++;
        }

        if (/[0-9]/.test(password)) {
            score++;
        }

        if (/[@#$%^&+=!]/.test(password)) {
            score++;
        }

        if (score <= 2) {

            passwordStrength.textContent =
                "Password Strength: Weak";

        }

        else if (score <= 4) {

            passwordStrength.textContent =
                "Password Strength: Medium";

        }

        else {

            passwordStrength.textContent =
                "Password Strength: Strong";

        }

    }

    function validatePassword() {

        const password =
            passwordInput.value;

        checkPasswordStrength();

        if (password === "") {

            showError(
                passwordInput,
                passwordError,
                "Password is required."
            );

            return false;
        }

        if (!passwordRegex.test(password)) {

            showError(
                passwordInput,
                passwordError,
                "Password must have 8+ characters, uppercase, lowercase, number and special character."
            );

            return false;
        }

        showSuccess(
            passwordInput,
            passwordError
        );

        return true;
    }

    function validateConfirmPassword() {

        const password =
            passwordInput.value;

        const confirmPassword =
            confirmPasswordInput.value;

        if (confirmPassword === "") {

            showError(
                confirmPasswordInput,
                confirmPasswordError,
                "Please confirm your password."
            );

            return false;
        }

        if (password !== confirmPassword) {

            showError(
                confirmPasswordInput,
                confirmPasswordError,
                "Passwords do not match."
            );

            return false;
        }

        showSuccess(
            confirmPasswordInput,
            confirmPasswordError
        );

        return true;
    }

    function validateCourse() {

        if (courseInput.value === "") {

            showError(
                courseInput,
                courseError,
                "Please select your course."
            );

            return false;
        }

        showSuccess(
            courseInput,
            courseError
        );

        return true;
    }

    function validateYear() {

        if (yearInput.value === "") {

            showError(
                yearInput,
                yearError,
                "Please select your year."
            );

            return false;
        }

        showSuccess(
            yearInput,
            yearError
        );

        return true;
    }

    function validateGender() {

        const gender =
            document.querySelector(
                'input[name="gender"]:checked'
            );

        if (!gender) {

            genderError.textContent =
                "Please select your gender.";

            return false;
        }

        genderError.textContent = "";

        return true;
    }

    function validateTerms() {

        if (!termsInput.checked) {

            termsError.textContent =
                "Please accept the Terms and Conditions.";

            return false;
        }

        termsError.textContent = "";

        return true;
    }

    nameInput.addEventListener(
        "input",
        validateName
    );

    emailInput.addEventListener(
        "input",
        validateEmail
    );

    mobileInput.addEventListener(
        "input",
        validateMobile
    );

    passwordInput.addEventListener(
        "input",
        function() {

            checkPasswordStrength();

            validatePassword();

            if (
                confirmPasswordInput.value !== ""
            ) {

                validateConfirmPassword();

            }

        }
    );

    confirmPasswordInput.addEventListener(
        "input",
        validateConfirmPassword
    );

    courseInput.addEventListener(
        "change",
        validateCourse
    );

    yearInput.addEventListener(
        "change",
        validateYear
    );

    termsInput.addEventListener(
        "change",
        validateTerms
    );

    document
        .querySelectorAll(
            'input[name="gender"]'
        )
        .forEach(function(radio) {

            radio.addEventListener(
                "change",
                validateGender
            );

        });

    registerForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const validName =
                validateName();

            const validEmail =
                validateEmail();

            const validMobile =
                validateMobile();

            const validPassword =
                validatePassword();

            const validConfirmPassword =
                validateConfirmPassword();

            const validCourse =
                validateCourse();

            const validYear =
                validateYear();

            const validGender =
                validateGender();

            const validTerms =
                validateTerms();

            if (
                validName &&
                validEmail &&
                validMobile &&
                validPassword &&
                validConfirmPassword &&
                validCourse &&
                validYear &&
                validGender &&
                validTerms
            ) {

                registerMessage.textContent =
                    "Registration successful!";

                alert(
                    "Registration successful!"
                );

                registerForm.reset();

                passwordStrength.textContent = "";

            }

            else {

                registerMessage.textContent = "";

                alert(
                    "Registration failed. Please correct the errors."
                );

            }

        }
    );

}

const menuButton =
    document.getElementById("menuButton");

if (menuButton) {

    menuButton.addEventListener(
        "click",
        function() {

            const dashboardMenu =
                document.querySelector(
                    ".dashboard-menu"
                );

            if (dashboardMenu) {

                dashboardMenu.classList.toggle(
                    "show"
                );

            }

        }
    );

}

const themeButton =
    document.getElementById("themeButton");

if (themeButton) {

    const savedTheme =
        localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add(
            "dark-mode"
        );

        themeButton.textContent =
            "Light Mode";

    }

    themeButton.addEventListener(
        "click",
        function() {

            document.body.classList.toggle(
                "dark-mode"
            );

            if (
                document.body.classList.contains(
                    "dark-mode"
                )
            ) {

                localStorage.setItem(
                    "theme",
                    "dark"
                );

                themeButton.textContent =
                    "Light Mode";

            }

            else {

                localStorage.setItem(
                    "theme",
                    "light"
                );

                themeButton.textContent =
                    "Dark Mode";

            }

        }
    );

}

const faqQuestions =
    document.querySelectorAll(
        ".faq-question"
    );

if (faqQuestions.length > 0) {

    faqQuestions.forEach(
        function(question) {

            question.addEventListener(
                "click",
                function() {

                    const answer =
                        this.nextElementSibling;

                    if (answer) {

                        answer.classList.toggle(
                            "show"
                        );

                    }

                }
            );

        }
    );

}

const openModal =
    document.getElementById("openModal");

const closeModal =
    document.getElementById("closeModal");

const eventModal =
    document.getElementById("eventModal");

if (
    openModal &&
    closeModal &&
    eventModal
) {

    openModal.addEventListener(
        "click",
        function() {

            eventModal.classList.add(
                "show"
            );

        }
    );

    closeModal.addEventListener(
        "click",
        function() {

            eventModal.classList.remove(
                "show"
            );

        }
    );

    eventModal.addEventListener(
        "click",
        function(event) {

            if (
                event.target === eventModal
            ) {

                eventModal.classList.remove(
                    "show"
                );

            }

        }
    );

}

const notification =
    document.getElementById(
        "notification"
    );

const closeNotification =
    document.getElementById(
        "closeNotification"
    );

if (
    notification &&
    closeNotification
) {

    closeNotification.addEventListener(
        "click",
        function() {

            notification.style.display =
                "none";

        }
    );

}

const slides =
    document.querySelectorAll(".slide");

const nextButton =
    document.getElementById("next");

const previousButton =
    document.getElementById(
        "previous"
    );

let currentSlide = 0;

function showSlide(index) {

    slides.forEach(
        function(slide) {

            slide.classList.remove(
                "active"
            );

        }
    );

    if (slides[index]) {

        slides[index].classList.add(
            "active"
        );

    }

}

if (
    slides.length > 0 &&
    nextButton &&
    previousButton
) {

    nextButton.addEventListener(
        "click",
        function() {

            currentSlide++;

            if (
                currentSlide >= slides.length
            ) {

                currentSlide = 0;

            }

            showSlide(currentSlide);

        }
    );

    previousButton.addEventListener(
        "click",
        function() {

            currentSlide--;

            if (currentSlide < 0) {

                currentSlide =
                    slides.length - 1;

            }

            showSlide(currentSlide);

        }
    );

    showSlide(currentSlide);

}

const cards =
    document.querySelectorAll(
        ".dashboard-card"
    );

if (cards.length > 0) {

    cards.forEach(
        function(card) {

            card.addEventListener(
                "click",
                function() {

                    console.log(
                        "Dashboard card clicked:",
                        this.textContent.trim()
                    );

                }
            );

        }
    );

}
