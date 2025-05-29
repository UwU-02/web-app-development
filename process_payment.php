<?php
session_start();
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['paymentMethod'])) {
    $_SESSION['paymentMethod'] = $_POST['paymentMethod'];
    header("Location: email.php"); // Redirect to email.html
    exit();
} else {
    echo "Payment method not selected!";
}?>