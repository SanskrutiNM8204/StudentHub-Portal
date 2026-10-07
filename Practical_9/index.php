<?php

include "database.php";

$message = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $username = trim($_POST["username"]);
    $email = trim($_POST["email"]);
    $password = $_POST["password"];

    if (empty($username) || empty($email) || empty($password)) {

        $message = "All fields are required.";

    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {

        $message = "Please enter a valid email.";

    } else {

        $check = mysqli_prepare(
            $connection,
            "SELECT id FROM users WHERE username = ? OR email = ?"
        );

        mysqli_stmt_bind_param($check, "ss", $username, $email);
        mysqli_stmt_execute($check);
        mysqli_stmt_store_result($check);

        if (mysqli_stmt_num_rows($check) > 0) {

            $message = "Username or email already exists.";

        } else {

            $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

            $insert = mysqli_prepare(
                $connection,
                "INSERT INTO users (username, email, password) VALUES (?, ?, ?)"
            );

            mysqli_stmt_bind_param(
                $insert,
                "sss",
                $username,
                $email,
                $hashedPassword
            );

            if (mysqli_stmt_execute($insert)) {

                $message = "User registered successfully!";

            } else {

                $message = "Registration failed.";
            }

            mysqli_stmt_close($insert);
        }

        mysqli_stmt_close($check);
    }
}

?>

<!DOCTYPE html>

<html>

<head>
    <title>User Registration</title>
</head>

<body>

<h1>User Registration</h1>

<?php

if ($message != "") {
    echo "<h3>$message</h3>";
}

?>

<form method="POST">


<label>Username:</label>
<input
    type="text"
    name="username"
    required
    minlength="3"
>

<br><br>

<label>Email:</label>
<input
    type="email"
    name="email"
    required
>

<br><br>

<label>Password:</label>
<input
    type="password"
    name="password"
    required
    minlength="8"
>

<br><br>

<button type="submit">Register</button>

</form>

</body>

</html>
