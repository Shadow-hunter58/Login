<?php
$servername = "localhost";  // Server name (default: localhost)
$username = "root";         // Default XAMPP MySQL username
$password = "";             // Default password (leave empty for XAMPP)
$database = "user_db";      // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Database connected successfully!";
}
?>