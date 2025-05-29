<?php
session_start();
include 'connect.php';

// Simulate login, you should replace this with your actual authentication logic
if (!isset($_SESSION['username']) || $_SESSION['userType'] !='admin') {
    // Redirect to login page if not logged in
    header('Location: login.php');
    exit;
}

$waiterName = $_SESSION['username'];
?>