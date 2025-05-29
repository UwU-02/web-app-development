<?php
include("fetchProductInfo.php"); 
include("calculate.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SUP TULANG ZZ - Order Details and Email</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="containerAll">
      <div class="header">
        <a href="menu.html" class="back_button">BACK</a>
	    </div>
        <div class="title-container">
            <h1>Sup Tulang ZZ</h1>
            <h2>Payment Information</h2>
        </div>
      </div>
<div class="container">
        <section class="CART">
            <h2>CART</h2>
     
            <article style="display: flex; align-items: flex-start;">
    <div style="flex: 1;">
        <p><strong>Product Name:</strong><br></p>
        <?php 
        $count = 1;
        foreach ($products as $item): ?>
            <p><?php echo $count . '.' . htmlspecialchars($item); ?></p>
        <?php $count++; ?>
        <?php endforeach; ?>
    </div>
    <div style="width:30%;">
        <p><strong>Units<br></p><?php 
    foreach ($units as $productUnits):  
    ?>
        <p><?php echo htmlspecialchars($productUnits); ?></p>
    <?php endforeach; ?>

    </div>

    <div style="width:15%;">
        <p><strong>Price(RM)<br></p><?php 
    $totalPrice = 0; 
    foreach ($prices as $productPrice): 
        $totalPrice += $productPrice; 
    ?>
        <p><?php echo htmlspecialchars($productPrice); ?></p>
    <?php endforeach; ?>

    </div>
</article>
<article1 style="display: flex; align-items: flex-start;">
<div style="flex: 1;"> 
<p><strong>Total units:</strong> <?php echo htmlspecialchars($totalUnits); ?></p>        
            <div style="width:45%;">   <p><strong>Total Price:</strong> RM <?php echo htmlspecialchars($totalPrice); ?></p>
 </div>
             </article1>  
            
         </section>
	<section class="confirm">
	<form action="menu.html" method="POST">
        <button type="submit" class="addButton">Add more items</button>
        </form>
    <form action="payment.html" method="POST">
        <button type="submit">Confirm</button>
    </form>
</section>

        <footer>
            <p>&copy; 2025 SUP TULANG ZZ. All rights reserved.</p>
        </footer>
    </div>
</body>
</html>