<?php
session_start();
include 'connect.php';

// Check if user is logged in and is staff
if (!isset($_SESSION['user_id']) || $_SESSION['user_type'] !== 'staff') {
    header("Location: loginpage.html");
    exit();
}

// Fetch orders with their details
function getOrders($conn) {
    $orders = array();
    
    $sql = "SELECT o.ORDER_ID, o.USER_ID, o.ORDER_TYPE, o.ORDER_STATUS, o.ORDER_DATETIME,
            u.USER_NAME, c.QUANTITY, m.ITEM_NAME, c.TOTAL_PRICE 
            FROM ORDERS o 
            LEFT JOIN USERS u ON o.USER_ID = u.USER_ID
            LEFT JOIN CART c ON o.ORDER_ID = c.ORDER_ID
            LEFT JOIN MENU_ITEMS m ON c.ITEM_ID = m.ITEM_ID
            ORDER BY o.ORDER_DATETIME DESC";
            
    $result = $conn->query($sql);
    
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $orderId = $row['ORDER_ID'];
            if (!isset($orders[$orderId])) {
                $orders[$orderId] = array(
                    'orderNumber' => $orderId,
                    'status' => $row['ORDER_STATUS'],
                    'method' => $row['ORDER_TYPE'],
                    'timestamp' => $row['ORDER_DATETIME'],
                    'customerName' => $row['USER_NAME'],
                    'menu' => array()
                );
            }
            $orders[$orderId]['menu'][] = array(
                'item' => $row['ITEM_NAME'],
                'quantity' => $row['QUANTITY']
            );
        }
    }
    return array_values($orders);
}

// Handle status update
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action'])) {
    if ($_POST['action'] === 'updateStatus') {
        $orderId = $_POST['orderId'];
        $newStatus = $_POST['status'];
        
        $sql = "UPDATE ORDERS SET ORDER_STATUS = ? WHERE ORDER_ID = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ss", $newStatus, $orderId);
        
        if ($stmt->execute()) {
            echo json_encode(['success' => true]);
        } else {
            echo json_encode(['success' => false, 'error' => $conn->error]);
        }
        exit();
    }
}

// Get all orders for display
$orders = getOrders($conn);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sup Tulang ZZ - Staff Order Management</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
        
        body {
            font-family: 'Poppins', sans-serif;
            margin: 0;
            padding: 20px;
            background: #fff8e1;
        }

        .container {
            max-width: 1000px;
            margin: 0 auto;
        }

        .header {
            text-align: center;
            color: #d84315;
            margin-bottom: 30px;
        }

        .top-buttons {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
        }

        .top-buttons button {
            padding: 10px 15px;
            border: none;
            border-radius: 5px;
            font-family: 'Poppins', sans-serif;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .logout-btn {
            background: #e53935;
            color: white;
        }

        .dashboard-btn {
            background: #1976d2;
            color: white;
        }

        button:hover {
            opacity: 0.9;
        }

        .orders-container {
            background: white;
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .order-card {
            background: #fff8e1;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 15px;
            margin-bottom: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .order-info {
            flex: 2;
        }

        .order-number {
            font-weight: bold;
            color: #d84315;
            font-size: 1.2em;
            margin-bottom: 5px;
        }

        .order-method, .order-menu {
            color: #666;
            font-size: 0.9em;
        }

        .order-status {
            padding: 5px 10px;
            border-radius: 15px;
            font-size: 0.9em;
            margin: 0 10px;
        }

        .status-pending {
            background: #ffe0b2;
            color: #e65100;
        }

        .status-complete {
            background: #c8e6c9;
            color: #2e7d32;
        }

        .button-group {
            display: flex;
            flex-direction: column;
            gap: 10px;
            flex: 1;
            align-items: flex-end;
        }

        .button-group button {
            padding: 8px 15px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-family: 'Poppins', sans-serif;
            transition: all 0.3s ease;
            width: 100px;
        }

        .complete-btn {
            background: #d84315;
            color: white;
        }

        .notify-btn {
            background: #1976d2;
            color: white;
        }
    </style>
</head>
<body>
<div class="container">
        <div class="top-buttons">
            <button class="dashboard-btn" onclick="goToDashboard()">Back to Dashboard</button>
            <button class="logout-btn" onclick="logout()">Logout</button>
        </div>

        <div class="header">
            <h1>Sup Tulang ZZ</h1>
            <h2>Order Management</h2>
        </div>
        
        <div class="orders-container" id="ordersContainer">
            <!-- Orders will be dynamically inserted here -->
        </div>
    </div>
    <script>
        // Initialize orders from PHP
        var orders = <?php echo json_encode($orders); ?>;

        function createOrderCard(order) {
            var statusClass = order.status === 'pending' ? 'status-pending' : 'status-complete';
            var buttonText = order.status === 'pending' ? 'Complete' : 'Pending';
            var statusText = order.status.charAt(0).toUpperCase() + order.status.slice(1);
            
            // Generate menu items with quantities
            var menuItems = order.menu.map(function(item) {
                return '<div>' + item.item + ' x' + item.quantity + '</div>';
            }).join('');
            
            var card = '<div class="order-card" id="order-' + order.id + '">' +
                '<div class="order-info">' +
                    '<div class="order-number">Order #' + order.orderNumber + '</div>' +
                    '<div class="order-method">' + order.method + '</div>' +
                    '<div>' + order.timestamp + '</div>' +
                    '<div class="order-menu">' + menuItems + '</div>' +
                '</div>' +
                '<div class="button-group">' +
                    '<span class="order-status ' + statusClass + '">' + statusText + '</span>' +
                    '<button class="notify-btn" onclick="notifyKitchen(\'' + order.id + '\')">Notify for Pick up</button>' +
                    '<button class="complete-btn" onclick="toggleStatus(\'' + order.id + '\')">Mark as ' + buttonText + '</button>' +
                '</div>' +
            '</div>';
            
            return card;
        }

        function renderOrders() {
            var container = document.getElementById('ordersContainer');
            var orderCards = orders.map(createOrderCard);
            container.innerHTML = orderCards.join('');
        }

        function toggleStatus(orderId) {
            var statusElement = document.querySelector('#order-' + orderId + ' .order-status');
            var currentStatus = statusElement.textContent.toLowerCase().trim();
            var newStatus = currentStatus === 'pending' ? 'complete' : 'pending';
            
            fetch('StaffManage.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: 'action=updateStatus&orderId=' + orderId + '&status=' + newStatus
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    location.reload();
                } else {
                    alert('Error updating status');
                }
            });
        }

        function notifyKitchen(orderId) {
            alert('Notified kitchen for Order #' + orderId);
        }

        function goToDashboard() {
            window.location.href = 'dashboard.php';
        }

        function logout() {
            fetch('logout.php')
            .then(() => {
                window.location.href = 'loginpage.php';
            });
        }

        // Initial render
        renderOrders();
    </script>
</body>
</html>
