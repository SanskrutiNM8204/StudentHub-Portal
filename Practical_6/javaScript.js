let students = [];

async function loadStudents() {

const response = await fetch("data.json");

const data = await response.json();

students = Array.isArray(data) ? data : data.students;

showStudents(students);

}

function showStudents(data) {

const container =
    document.getElementById("studentContainer");

container.innerHTML = "";

if (!data || data.length === 0) {
    container.innerHTML = "<p>No student found.</p>";
    return;
}

data.forEach(function(student) {

    container.innerHTML += `
        <div class="student-card">
            <h3>${student.name}</h3>
            <p>Course: ${student.course}</p>
            <p>Year: ${student.year}</p>
            <p>Email: ${student.email}</p>
        </div>
    `;

});

}

function searchStudent() {

const text =
    document.getElementById("studentSearch")
    .value
    .toLowerCase();

const result = students.filter(function(student) {

    return student.name
        .toLowerCase()
        .includes(text);

});

showStudents(result);

}

document
.getElementById("studentSearch")
.addEventListener("input", searchStudent);

loadStudents();
