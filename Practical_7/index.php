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

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = trim($_POST["name"]);
    $email = trim($_POST["email"]);
    $course = trim($_POST["course"]);
    $mobile = trim($_POST["mobile"]);

    $file = fopen(__DIR__ . "/entry.csv", "a");
    if ($file) {

        fputcsv($file, [$name, $email, $course, $mobile]);

        fclose($file);

        echo "<h3>Data saved successfully!</h3>";

    } else {

        echo "<h3>Unable to open CSV file.</h3>";

    }
}

?> 

</body>
</html>

