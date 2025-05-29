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
        <a href="payment.html" class="back_button">BACK</a>
	    </div>
        <div class="title-container">
            <h1>Sup Tulang ZZ</h1>
            <h2>Payment Information</h2>
        </div>
      </div>
   
<div class="container">
        <section class="customer-info">
            <h2>Customer Information</h2>
            <p><strong>Name:</strong> Customer name </p>
            <p><strong>Email:</strong> customer@example.com</p>
        </section>

        <section class="order-details">
            <h2>Order Details</h2>
            <article>
                <p>Dear Customer,</p>
                <p>Thank you for your order with SUP TULANG ZZ.</p>
                <p>Below are your order details:</p>
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
    <p><strong>Price(RM)</strong><br></p>
    <?php 
    $totalPrice = 0; 
    foreach ($prices as $productPrice): 
        $totalPrice += $productPrice; 
    ?>
        <p><?php echo htmlspecialchars($productPrice); ?></p>
    <?php endforeach; ?>
</div>
                </article>
                <article style="display: flex; align-items: flex-start;">
                    <div style="flex: 1;"> 
                        <p><strong>Total Units:</strong> <?php echo htmlspecialchars($totalUnits); ?></p>
                        <p><strong>Order Status:</strong> <?php echo htmlspecialchars($status); ?></p>
                        <p><strong>Payment method:</strong> <?php echo htmlspecialchars($paymentMethod); ?></p>
                    </div>         
                    <div style="width:45%;">
                        <p><strong>Total Price:</strong> RM <?php echo htmlspecialchars($totalPrice); ?></p>
                    </div>
                </article>  
                <p>If you have any questions, feel free to contact us.</p>
                <p>Regards,</p>
                <p>SUP TULANG ZZ Team</p>
            </section>

            <section class="email-form">
                <form action="sendEmail.php" method="POST">
                    <p>A confirmation email will be sent to your mailbox.</p>
                    <button type="submit">Send Email</button>
                </form>
            </section>
                    
            <footer>
                <p>&copy; 2025 SUP TULANG ZZ. All rights reserved.</p>
            </footer>
        </div>
    </body>
</html>
