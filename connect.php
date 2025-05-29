<?php

$servername = "localhost"; 
$username = "b032210336";      
$password = "030524140192";        
$dbname = "student_b032210336"; 

$conn = new mysqli($servername, $username, $password, $dbname); 


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 


?>