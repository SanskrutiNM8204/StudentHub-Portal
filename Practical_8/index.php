<?php
include "Database.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST["name"];
    $email = $_POST["email"];
    $course = $_POST["course"];
    $mobile = $_POST["mobile"];

    $sql = "INSERT INTO students (name, email, course, mobile)
            VALUES ('$name', '$email', '$course', '$mobile')";

    if (mysqli_query($connection, $sql)) {
        echo "<h3>Student data inserted successfully!</h3>";
    } else {
        echo "<h3>Error: " . mysqli_error($connection) . "</h3>";
    }
}
if (isset($_POST["delete"])) {

    $id = $_POST["delete_id"];

    $sql = "DELETE FROM students WHERE id = $id";

    if (mysqli_query($connection, $sql)) {
        echo "<h3>Student deleted successfully!</h3>";
    } else {
        echo "<h3>Error: " . mysqli_error($connection) . "</h3>";
    }
}
if (isset($_POST["update"])) {

    $id = $_POST["update_id"];
    $new_name = $_POST["new_name"];
    $new_email = $_POST["new_email"];
    $new_course = $_POST["new_course"];
    $new_mobile = $_POST["new_mobile"];

    $sql = "UPDATE students SET name='$new_name', email='$new_email', course='$new_course', mobile='$new_mobile' WHERE id=$id";

    if (mysqli_query($connection, $sql)) {
        echo "<h3>Student updated successfully!</h3>";
    } else {
        echo "<h3>Error: " . mysqli_error($connection) . "</h3>";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Student Registration</title>
</head>

<body>

<h1>Student Registration</h1>

<form method="POST">

    <label>Name:</label>
    <input type="text" name="name" required>
    <br><br>

    <label>Email:</label>
    <input type="email" name="email" required>
    <br><br>

    <label>Course:</label>
    <input type="text" name="course" required>
    <br><br>

    <label>Mobile:</label>
    <input type="text" name="mobile" required>
    <br><br>

    <button type="submit">Submit</button>

</form>
<?php

$result = mysqli_query($connection, "SELECT * FROM students");

?>

<h2>Student Records</h2>

<table border="1" cellpadding="10">
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Course</th>
        <th>Mobile</th>
    </tr>

<?php

while ($row = mysqli_fetch_assoc($result)) {

    echo "<tr>";
    echo "<td>" . $row["id"] . "</td>";
    echo "<td>" . $row["name"] . "</td>";
    echo "<td>" . $row["email"] . "</td>";
    echo "<td>" . $row["course"] . "</td>";
    echo "<td>" . $row["mobile"] . "</td>";
    echo "</tr>";

}

?>
<h2>Update Student Course</h2>

<form method="POST">

    <label>Student ID:</label>
    <input type="number" name="update_id" required>
    <br><br>
    <label>New Name:</label>
    <input type="text" name="new_name" required>
    <br><br>
    <label>New Email:</label>
    <input type="email" name="new_email" required>
    <br><br>
    <label>New Course:</label>
    <input type="text" name="new_course" required>
    <br><br>
    <label>New Mobile:</label>
    <input type="text" name="new_mobile" required>
    <br><br>

    <button type="submit" name="update">Update</button>

</form>
<h2>Delete Student</h2>

<form method="POST">

    <label>Student ID:</label>
    <input type="number" name="delete_id" required>

    <br><br>

    <button type="submit" name="delete">
        Delete
    </button>

</form>
</table>
</body>
</html>