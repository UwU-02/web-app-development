<?php
include 'connect.php';

// Get order ID from URL parameter
$orderId = isset($_GET['order_id']) ? $_GET['order_id'] : null;

if (!$orderId) {
    die("No order ID provided");
}

// Fetch order details
$sql = "SELECT o.ORDER_ID, o.ORDER_STATUS, o.ORDER_DATETIME, 
        GROUP_CONCAT(CONCAT(m.ITEM_NAME, ' x', c.QUANTITY) SEPARATOR ', ') as items,
        SUM(c.TOTAL_PRICE) as total_amount,
        p.PAYMENT_STATUS
        FROM ORDERS o
        LEFT JOIN CART c ON o.ORDER_ID = c.ORDER_ID
        LEFT JOIN MENU_ITEMS m ON c.ITEM_ID = m.ITEM_ID
        LEFT JOIN PAYMENT p ON o.ORDER_ID = p.ORDER_ID
        WHERE o.ORDER_ID = ?
        GROUP BY o.ORDER_ID";

$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $orderId);
$stmt->execute();
$result = $stmt->get_result();
$order = $result->fetch_assoc();

if (!$order) {
    die("Order not found");
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sup Tulang ZZ - Track Order</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
        
        body {
            font-family: 'Poppins', sans-serif;
            background: linear-gradient(135deg, #fff8e1 0%, #ffe0b2 100%);
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }

        .restaurant-name {
            font-size: 3.5rem;
            font-weight: 800;
            color: #d84315;
            margin-bottom: 3rem;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        }

        .container {
            text-align: center;
            background: rgba(255, 255, 255, 0.9);
            border-radius: 16px;
            padding: 2rem;
            box-shadow: 0 8px 32px rgba(214, 67, 21, 0.1);
            backdrop-filter: blur(8px);
            width: 360px;
            border: 1px solid rgba(214, 67, 21, 0.2);
        }

        .container h1 {
            color: #e65100;
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
            font-weight: 600;
        }

        .order-info, .status {
            margin: 1.5rem 0;
            font-weight: 600;
            font-size: 1.3rem;
            padding: 1rem;
            background: rgba(255, 204, 128, 0.2);
            border-radius: 8px;
        }

        .status {
            background: rgba(255, 204, 128, 0.3);
            transition: all 0.3s ease;
        }

        .label {
            font-weight: 600;
            color: #d84315;
        }

        .note {
            font-size: 0.9rem;
            color: #5d4037;
            padding: 0.8rem;
            background: rgba(255, 204, 128, 0.1);
            border-radius: 8px;
            margin-top: 1rem;
        }

        #orderStatus {
            display: inline-block;
            padding: 0.3rem 1rem;
            border-radius: 20px;
            background: #ffd180;
            transition: all 0.3s ease;
        }

        #orderStatus.ready {
            background: #a5d6a7;
            color: #2e7d32;
        }

        .done-button {
            margin-top: 2rem;
            padding: 0.8rem 2rem;
            background: #d84315;
            color: #ffffff;
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .done-button:hover {
            background: #bf360c;
        }
    </style>
</head>
<body>
    <div class="restaurant-name">Sup Tulang ZZ</div>
    <div class="container">
        <h1>Order Status</h1>
        <div class="order-info"><span class="label">Order Number: </span><span id="orderNumber">ORDER000</span></div>
        <div class="status"><span class="label">Status: </span><span id="orderStatus">In Progress</span></div>
        <div class="note">PLEASE PAY AT THE COUNTER BEFORE YOU LEAVE</div>
        <button class="done-button" id="doneButton" style="display: none;" onclick="goBackToMenu()">Done</button>
    </div>
    <script>
        const orderData = {
            orderId: '<?php echo htmlspecialchars($order["ORDER_ID"], ENT_QUOTES); ?>',
            orderStatus: '<?php echo htmlspecialchars($order["ORDER_STATUS"], ENT_QUOTES); ?>'
        };
        const orderNumber = document.getElementById('orderNumber');
        const orderStatus = document.getElementById('orderStatus');
        const doneButton = document.getElementById('doneButton');

        // Set initial values
        orderNumber.textContent = orderData.orderId;
        orderStatus.textContent = orderData.orderStatus;

        // Show done button if order is ready
        if (orderData.orderStatus.toLowerCase() === 'ready') {
            orderStatus.classList.add('ready');
            doneButton.style.display = 'block';
        }

        // Check status periodically
        function checkOrderStatus() {
            fetch(`CheckOrderStatus.php?order_id=<?php echo $orderId; ?>`)
                .then(response => response.json())
                .then(data => {
                    if (data.status === 'ready') {
                        orderStatus.textContent = 'Ready';
                        orderStatus.classList.add('ready');
                        doneButton.style.display = 'block';
                    }
                })
                .catch(error => {
                    console.error('Error checking order status:', error);
                });
        }

        // Check every 30 seconds
        setInterval(checkOrderStatus, 30000);

        function goBackToMenu() {
            window.location.href = 'menu.php';
        }
    </script>
</body>
</html>
