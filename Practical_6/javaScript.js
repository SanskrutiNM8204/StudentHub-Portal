let data = {};
let page = 1;

fetch("data.json")
    .then(response => response.json())
    .then(result => {

        data = result;

        showStudents();
        showEvents();
        showFAQs();

    })
    .catch(error => {

        console.log("Error loading JSON:", error);

    });


function showStudents() {

    let search =
        document.getElementById("studentSearch").value.toLowerCase();

    let course =
        document.getElementById("courseFilter").value;

    let students = data.students.filter(student =>

        student.name.toLowerCase().includes(search) &&
        (course === "all" || student.course === course)

    );

    let start = (page - 1) * 3;

    let list = students.slice(start, start + 3);

    document.getElementById("studentContainer").innerHTML =
        list.map(student => `

            <div class="student-card">

                <h3>${student.name}</h3>

                <p>Course: ${student.course}</p>

                <p>Year: ${student.year}</p>

                <p>Email: ${student.email}</p>

            </div>

        `).join("");

    document.getElementById("pageNumber").textContent =
        "Page " + page;

}


function showEvents() {

    let search =
        document.getElementById("eventSearch").value.toLowerCase();

    let category =
        document.getElementById("eventFilter").value;

    let events = data.events.filter(event =>

        event.title.toLowerCase().includes(search) &&
        (category === "all" || event.category === category)

    );

    document.getElementById("eventContainer").innerHTML =
        events.map(event => `

            <div class="event-card">

                <h3>${event.title}</h3>

                <p>Date: ${event.date}</p>

                <p>Category: ${event.category}</p>

                <p>Location: ${event.location}</p>

            </div>

        `).join("");

}


function showFAQs() {

    let search =
        document.getElementById("faqSearch").value.toLowerCase();

    let faqs = data.faqs.filter(faq =>

        faq.question.toLowerCase().includes(search) ||
        faq.answer.toLowerCase().includes(search)

    );

    document.getElementById("faqContainer").innerHTML =
        faqs.map(faq => `

            <div class="faq-item">

                <h3>${faq.question}</h3>

                <p>${faq.answer}</p>

            </div>

        `).join("");

}


function sortStudents() {

    data.students.sort((a, b) =>
        a.name.localeCompare(b.name)
    );

    page = 1;

    showStudents();

}


function changePage(number) {

    page += number;

    if (page < 1) {
        page = 1;
    }

    showStudents();

}


document
    .getElementById("studentSearch")
    .addEventListener("input", () => {

        page = 1;
        showStudents();

    });


document
    .getElementById("courseFilter")
    .addEventListener("change", () => {

        page = 1;
        showStudents();

    });


document
    .getElementById("eventSearch")
    .addEventListener("input", showEvents);


document
    .getElementById("eventFilter")
    .addEventListener("change", showEvents);


document
    .getElementById("faqSearch")
    .addEventListener("input", showFAQs);