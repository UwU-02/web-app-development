<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

include("connect.php");

$sql = "
SELECT SUM(QUANTITY) AS total_units FROM cart INNER JOIN Orders ON Cart.ORDER_ID=Orders.ORDER_ID WHERE User_ID= '" . $_SESSION['userID'] . "'";
    
$result = mysqli_query($conn, $sql);

$totalUnits=0;

if (!$result) {
    die("Query Error: " . mysqli_error($conn)); }

if (mysqli_num_rows($result) > 0) {
     $row = mysqli_fetch_assoc($result);
    $totalUnits = $row['total_units'] ;
    
} else {
    $totalUnits=0;
}
//order status 
$status_sql = "
 SELECT  ORDER_STATUS FROM orders WHERE User_ID= '" . $_SESSION['userID'] . "'";
$status_result = mysqli_query($conn, $status_sql);

$status="-";

if (!$status_result) {
    die("Query Error: " . mysqli_error($conn));}

if (mysqli_num_rows($status_result) > 0) {
    while ($row = mysqli_fetch_assoc($status_result)) {
        $status=$row['ORDER_STATUS'];
    }
} else {
    $status="-";
}

?>