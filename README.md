# 🍲 Restoran Sup Tulang ZZ Web Application

A dynamic web application project developed for the BITM2113 Web Application Development course at Universiti Teknikal Malaysia Melaka (UTeM). This project is a full-stack restaurant management system for **Restoran Sup Tulang ZZ**, enabling both customers and staff to interact with the restaurant’s services online.

## 👥 Team Members

| Name                   | Student ID     |
|------------------------|----------------|
| Sim Man Ni             | B032210503     |
| Lim Jia Chean          | B032210216     |
| Low Xiao Qian          | B032210182     |
| Nur Athirah Binti Zakaria | B032210336  |

**Lecturer**: Prof. Ts. Dr. Sazilah Salam  
**Course**: BITM 2113 – Web Application Development  
**January 6, 2025**

---

## 📌 Project Overview

This web application replicates an online food ordering and management system for **Restoran Sup Tulang ZZ**. It includes:

- User registration and login
- Menu browsing and cart system
- Order placement and status tracking
- Payment processing
- Admin/staff dashboard for order and payment management

---

## 🧩 Features

### 👤 User Features
- Register and login
- Browse food menu
- Add items to cart
- Place orders (walk-in or online)
- Track order status
- Make payments

### 🛠 Staff Features
- Staff login
- Manage orders and update statuses
- View payments

---

## 🗃️ Database Structure

The application uses a MySQL database with the following tables:

1. **User**: Handles customer and staff information  
2. **Menu_Items**: Stores menu details like name, price, and image  
3. **Orders**: Stores order data linked to users  
4. **Cart**: Maintains items and quantities per order  
5. **Payment**: Tracks payment status and amount  

---

## 🧪 Tech Stack

- **Frontend**: HTML, CSS, JavaScript  
- **Backend**: PHP  
- **Database**: MySQL (phpMyAdmin)  
- **Server**: XAMPP

---

## 🚀 Setup Instructions

1. Install [XAMPP](https://www.apachefriends.org/index.html)
2. Clone this repository into the `htdocs` folder of XAMPP
3. Import the MySQL database (see `menu items.sql` file)
4. Start Apache and MySQL via XAMPP Control Panel
5. Access the app via `http://localhost/<your-folder-name>/`

---

## 📄 License

This project is intended for educational use only.
