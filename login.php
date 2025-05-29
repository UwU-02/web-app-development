<?php
session_start();
include 'connect.php';

// Handle login form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if the required POST data exists
    if (isset($_POST['username']) && isset($_POST['password'])) {
        // Sanitize and retrieve inputs
        $username = $conn->real_escape_string(trim($_POST['username']));
        $password = $conn->real_escape_string(trim($_POST['password']));
        $userType = $conn->real_escape_string(trim($_POST['userType']));

        // Use the sanitized variables in the SQL query
        $sql = "SELECT USER_NAME, USER-PWD, USER_TYPE FROM users WHERE USER_NAME='$username'";
        $result = $conn->query($sql);
        
          if ($result->num_rows == 1) {
        $row = $result->fetch_assoc();
        
        // Verify password (use password_hash() for storing hashed passwords in production)
        if ($password === $row['USER_PWD']) {
            session_start();
            $_SESSION['username'] = $row['USER_NAME'];
            $_SESSION['userType'] = $row['USER_TYPE'];

            // Redirect based on user type
            if ($row['USER_TYPE'] == 'customer') {
                header("Location: Menu.html");
                exit();
            } elseif ($row['USER_TYPE'] == 'admin') {
                header("Location: dashboard.php");
                exit();
            }
        } else {
            echo "Incorrect password.";
        }
    } else {
        echo "No user found with that username.";
    }
}

$conn->close();
?>