<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
if (isset($_SESSION['paymentMethod'])) {
    $paymentMethod = $_SESSION['paymentMethod'];
}
$_SESSION['userID'] = "U001";

include("connect.php");

$sql = "
    SELECT items.item_name ,items.item_price, cart.quantity
    FROM menu_items items 
    INNER JOIN Cart ON items.item_id = Cart.ITEM_ID 
    INNER JOIN Orders ON Cart.ORDER_ID = Orders.ORDER_ID 
    WHERE Orders.User_ID = '" . $_SESSION['userID'] . "'";
    
$result = mysqli_query($conn, $sql);

$products=[];
$prices=[];
$units=[];
if (!$result) {
    die("Query Error: " . mysqli_error($conn));}

if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        $products[]=$row['item_name'];
	$prices[]=$row['item_price'];
	$units[]=$row['quantity'];
    }
} else {
    $products[]="No products found.";
}

?>
