<?php

$connection = mysqli_connect(
    "localhost",
    "root",
    "",
    "studenthub"
);

if (!$connection) {
    die("Database connection failed: " . mysqli_connect_error());
}

echo "Database connected successfully!";

?>