<?php
// Include PHPMailer classes
require "PHPMailer.php";
require "SMTP.php";
require "Exception.php";
session_start();
$_SESSION["email"] = "xq020605@gmail.com";
$_SESSION["name"] = "customer 1";
include("fetchProductInfo.php"); 
include("calculate.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_SESSION["email"];
    $subject = "Order Confirmation - SUP TULANG ZZ";
    $paymentMethod=$_SESSION["paymentMethod"];
    $name=$_SESSION["name"];

    $message = "
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            color: #333;
            line-height: 1.6;
        }
        .email-container {
            background: #f9f9f9;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
        }
        .email-header {
            text-align: center;
            background: #ff6f00;
            color: white;
            padding: 10px;
            border-radius: 8px 8px 0 0;
        }
        .email-content {
            padding: 20px;
        }
        .email-footer {
            text-align: center;
            margin-top: 20px;
            font-size: 14px;
            color: #555;
        }
    </style>
</head>
<body>
    <div class='email-container'>
        <div class='email-header'>
            <h2>SUP TULANG ZZ</h2>
        </div>
        <div class='email-content'>
            <p>Dear {$name},</p>
            <p>Thank you for your order with SUP TULANG ZZ.</p>
            <p><strong>Order Details:</strong></p>
            <ul>
";


foreach ($products as $productName) {
    $message .= "<li>" . htmlspecialchars($productName) . "</li>";
}

$message .= "
            </ul>
            <p><strong>Total Units:</strong> {$totalUnits}</p>
            <p><strong>Order Status:</strong> {$status}</p>
            <p><strong>Payment Method:</strong> {$paymentMethod}</p>
            <p>If you have any questions, feel free to contact us.</p>
            <p>Best regards,<br>SUP TULANG ZZ Team</p>
        </div>
        <div class='email-footer'>
            &copy; 2025 SUP TULANG ZZ. All rights reserved.
        </div>
    </div>
</body>
</html>
";

   $mail = new PHPMailer\PHPMailer\PHPMailer(true);

    try {
       
        $mail->isSMTP();
        $mail->SMTPAuth = true;
        $mail->Host = "smtp.gmail.com";
        $mail->SMTPSecure =PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Set your Gmail credentials
        $mail->Username = "xq020605@gmail.com"; 
        $mail->Password = "udxinjmwzwncyrby"; 

        // Recipients
        $mail->setFrom("xq020605@gmail.com", "SUP TULANG ZZ Team"); 
        $mail->addAddress($email); // Recipient's email

        // Email content
        $mail->Subject = $subject;
        $mail->Body = $message;
        $mail->isHTML(true); // Enable HTML content

   $mail->send();
        echo  "
<div style='text-align: center; padding: 20px; background: #e0f7fa; border-radius: 8px; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);'>
    <h2 style='color: #00796b;'>Email Sent Successfully!</h2>
    <p style='font-size: 16px; color: #333;'>Thank you for your order. A confirmation email has been sent to your mailbox.</p>
    <a href='menu.html' style='padding: 10px 15px; background: #ff6f00; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;'>Back to Menu</a>
</div>
";
    } catch (Exception $e) {
        echo "Email could not be sent. Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Invalid request method.";
}
?>
