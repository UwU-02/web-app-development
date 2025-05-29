<?php
// Include the database connection file
include 'connect.php';

// Capture POST data from the form
$username = mysqli_real_escape_string($conn, $_POST['username']);
$password = mysqli_real_escape_string($conn, $_POST['password']);
$address = mysqli_real_escape_string($conn, $_POST['address']);
$email = mysqli_real_escape_string($conn, $_POST['email']);
$userType = mysqli_real_escape_string($conn, $_POST['userType']);

// Validate mandatory fields
if (empty($username) || empty($password) || empty($address) || empty($email) || empty($userType)) {
    echo "All fields are required.";
    exit;
}

// Generate a new USER_ID (example: U001, U002)
    $result = $conn->query("SELECT MAX(USER_ID) AS max_id FROM users");
    $row = $result->fetch_assoc();
    $lastId = $row['max_id'] ?? 'U000'; // Default to U000 if no records exist
    $newIdNumber = (int)substr($lastId, 1) + 1;
    $newUserId = 'U' . str_pad($newIdNumber, 3, '0', STR_PAD_LEFT);

// Prepare and execute SQL query
$sql = "INSERT INTO users (USER_ID, USER_NAME, USER_ADDRESS, USER_PWD, USER_TYPE, USER_EMAIL) 
        VALUES ('$newUserId','$username', '$address', '$password', '$userType', '$email')";


// Debug: Output the query for testing (remove in production)
//echo "SQL Query: $sql<br>";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the connection
$conn->close();
?>
