let students = [];
let events = [];
let faqs = [];

let studentPage = 1;
let eventPage = 1;

const recordsPerPage = 5;

async function fetchJSON(file) {
    const response = await fetch(file);

    if (!response.ok) {
        throw new Error("Unable to load " + file);
    }

    return await response.json();
}

async function loadData() {

    try {

        students = await fetchJSON("students.json");

        document.getElementById("studentLoading").style.display = "none";

        renderStudents();

    } catch (error) {

        document.getElementById("studentLoading").style.display = "none";

        document.getElementById("studentError").textContent =
            "Failed to load student data.";

        console.error(error);
    }


    try {

        events = await fetchJSON("events.json");

        document.getElementById("eventLoading").style.display = "none";

        renderEvents();

    } catch (error) {

        document.getElementById("eventLoading").style.display = "none";

        document.getElementById("eventError").textContent =
            "Failed to load event data.";

        console.error(error);
    }


    try {

        faqs = await fetchJSON("faqs.json");

        document.getElementById("faqLoading").style.display = "none";

        renderFAQs();

    } catch (error) {

        document.getElementById("faqLoading").style.display = "none";

        document.getElementById("faqError").textContent =
            "Failed to load FAQ data.";

        console.error(error);
    }
}


function renderStudents() {

    const searchText =
        document.getElementById("studentSearch").value.toLowerCase();

    const course =
        document.getElementById("courseFilter").value;

    const sortType =
        document.getElementById("studentSort").value;

    let filteredStudents = students.filter(student => {

        const matchesSearch =
            student.name.toLowerCase().includes(searchText);

        const matchesCourse =
            course === "all" || student.course === course;

        return matchesSearch && matchesCourse;
    });


    filteredStudents.sort((a, b) => {

        if (sortType === "name") {
            return a.name.localeCompare(b.name);
        }

        if (sortType === "year") {
            return a.year - b.year;
        }

        return 0;
    });


    const totalPages =
        Math.ceil(filteredStudents.length / recordsPerPage);

    if (studentPage > totalPages && totalPages > 0) {
        studentPage = totalPages;
    }

    const start =
        (studentPage - 1) * recordsPerPage;

    const end =
        start + recordsPerPage;

    const currentStudents =
        filteredStudents.slice(start, end);


    const container =
        document.getElementById("studentContainer");

    container.innerHTML = "";


    if (currentStudents.length === 0) {

        container.innerHTML =
            "<p>No students found.</p>";

    } else {

        currentStudents.forEach(student => {

            const card =
                document.createElement("div");

            card.className = "card";

            card.innerHTML = `
                <h3>${student.name}</h3>
                <p><strong>ID:</strong> ${student.id}</p>
                <p><strong>Course:</strong> ${student.course}</p>
                <p><strong>Year:</strong> ${student.year}</p>
                <p><strong>Email:</strong> ${student.email}</p>
            `;

            container.appendChild(card);
        });
    }


    createPagination(
        "studentPagination",
        totalPages,
        studentPage,
        function(page) {
            studentPage = page;
            renderStudents();
        }
    );
}


function renderEvents() {

    const searchText =
        document.getElementById("eventSearch").value.toLowerCase();

    const category =
        document.getElementById("eventFilter").value;

    const sortType =
        document.getElementById("eventSort").value;


    let filteredEvents = events.filter(event => {

        const matchesSearch =
            event.name.toLowerCase().includes(searchText);

        const matchesCategory =
            category === "all" ||
            event.category === category;

        return matchesSearch && matchesCategory;
    });


    filteredEvents.sort((a, b) => {

        if (sortType === "name") {
            return a.name.localeCompare(b.name);
        }

        if (sortType === "date") {
            return new Date(a.date) - new Date(b.date);
        }

        return 0;
    });


    const totalPages =
        Math.ceil(filteredEvents.length / recordsPerPage);

    if (eventPage > totalPages && totalPages > 0) {
        eventPage = totalPages;
    }


    const start =
        (eventPage - 1) * recordsPerPage;

    const end =
        start + recordsPerPage;

    const currentEvents =
        filteredEvents.slice(start, end);


    const container =
        document.getElementById("eventContainer");

    container.innerHTML = "";


    if (currentEvents.length === 0) {

        container.innerHTML =
            "<p>No events found.</p>";

    } else {

        currentEvents.forEach(event => {

            const card =
                document.createElement("div");

            card.className = "card";

            card.innerHTML = `
                <h3>${event.name}</h3>
                <p><strong>Date:</strong> ${event.date}</p>
                <p><strong>Category:</strong> ${event.category}</p>
                <p><strong>Location:</strong> ${event.location}</p>
            `;

            container.appendChild(card);
        });
    }


    createPagination(
        "eventPagination",
        totalPages,
        eventPage,
        function(page) {
            eventPage = page;
            renderEvents();
        }
    );
}


function renderFAQs() {

    const searchText =
        document.getElementById("faqSearch").value.toLowerCase();


    const filteredFAQs =
        faqs.filter(faq =>
            faq.question.toLowerCase().includes(searchText) ||
            faq.answer.toLowerCase().includes(searchText)
        );


    const container =
        document.getElementById("faqContainer");

    container.innerHTML = "";


    if (filteredFAQs.length === 0) {

        container.innerHTML =
            "<p>No FAQs found.</p>";

        return;
    }


    filteredFAQs.forEach(faq => {

        const card =
            document.createElement("div");

        card.className = "faq-card";

        card.innerHTML = `
            <h3>${faq.question}</h3>
            <p>${faq.answer}</p>
        `;

        container.appendChild(card);
    });
}


function createPagination(
    containerId,
    totalPages,
    currentPage,
    changePage
) {

    const container =
        document.getElementById(containerId);

    container.innerHTML = "";


    if (totalPages <= 1) {
        return;
    }


    const previousButton =
        document.createElement("button");

    previousButton.textContent = "Previous";

    previousButton.disabled = currentPage === 1;

    previousButton.addEventListener("click", function() {

        if (currentPage > 1) {
            changePage(currentPage - 1);
        }
    });

    container.appendChild(previousButton);


    for (let i = 1; i <= totalPages; i++) {

        const button =
            document.createElement("button");

        button.textContent = i;

        if (i === currentPage) {
            button.classList.add("active");
        }

        button.addEventListener("click", function() {
            changePage(i);
        });

        container.appendChild(button);
    }


    const nextButton =
        document.createElement("button");

    nextButton.textContent = "Next";

    nextButton.disabled =
        currentPage === totalPages;

    nextButton.addEventListener("click", function() {

        if (currentPage < totalPages) {
            changePage(currentPage + 1);
        }
    });

    container.appendChild(nextButton);
}


document
    .getElementById("studentSearch")
    .addEventListener("input", function() {

        studentPage = 1;

        renderStudents();
    });


document
    .getElementById("courseFilter")
    .addEventListener("change", function() {

        studentPage = 1;

        renderStudents();
    });


document
    .getElementById("studentSort")
    .addEventListener("change", function() {

        studentPage = 1;

        renderStudents();
    });


document
    .getElementById("eventSearch")
    .addEventListener("input", function() {

        eventPage = 1;

        renderEvents();
    });


document
    .getElementById("eventFilter")
    .addEventListener("change", function() {

        eventPage = 1;

        renderEvents();
    });


document
    .getElementById("eventSort")
    .addEventListener("change", function() {

        eventPage = 1;

        renderEvents();
    });


document
    .getElementById("faqSearch")
    .addEventListener("input", function() {

        renderFAQs();
    });


loadData();