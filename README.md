# SoleStyle eCommerce Project

Welcome to the SoleStyle eCommerce Project! This project offers a robust platform for selling shoes online, enabling customers to browse, select, and purchase from a wide variety of shoe collections.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [License](#license)

## Introduction

Welcome to SoleStyle, your premier online destination for all things footwear! Whether you're looking for the latest sneaker releases, classic styles, or the perfect pair for a special occasion, SoleStyle has got you covered. Our platform is designed to provide an easy and enjoyable shopping experience, ensuring that you find the perfect shoes to match your style and needs.

## Features

1. Product Catalog
Wide Range of Shoes: Browse an extensive collection of shoes from top brands and various categories.

Detailed Product Pages: Each product page includes multiple images, descriptions, and specifications.

Product Search and Filters: Quickly find what you're looking for with search functionality and detailed filters.

2. User Account Management
User Registration and Login: Secure registration and login with password hashing.

Profile Management: Users can update their personal information and view order history.

3. Shopping Cart
Add to Cart: Easily add multiple items to your cart and adjust quantities.

Cart Summary: View a detailed summary of the items in your cart, including total cost.

4. Checkout and Payments
Checkout Process: Seamless checkout process with shipping and billing details.

Multiple Payment Options: Support for various payment methods including credit cards, PayPal, and mobile payments.

5. Order Management
Order Tracking: Users can track their orders and view the status of their purchases.

Order History: Access to a history of past orders with details for each transaction.

6. Responsive Design
Mobile-Friendly: Ensure the website is optimized for various devices, providing a seamless experience on smartphones, tablets, and desktops.

7. About Section
Mission Statement: Explain the purpose and vision of your travel blog.

Team Introduction: Introduce the creators and contributors behind the project.

## Technologies Used

### Frontend Side
- **HTML**: Standard markup language for creating web pages
- **CSS**: Style sheet language for styling HTML elements
- **JavaScript**: Functionality and interactiveness of the website

### Backend Side
- **Node.js**: Server-side JavaScript runtime
- **Express.js**: Web application framework for Node.js
- **Sequelize**: Promise-based Node.js ORM for PostgreSQL
- **bcrypt**: Library for hashing passwords
- **jsonwebtoken**: Library for generating JSON Web Tokens (JWTs)
- **MySQL**: Relational database management system


## Installation

To run this project locally, follow these steps:

### Prerequisites

- Node.js installed on your machine
- MySQL installed locally or access to a MySQL server
- npm or yarn package manager

### Backend Setup

1. **Clone the repository**

   ```bash
   git clone the github link
   cd github repository

2. **Install dependancies**
    ``` 
    cd solestyle-backend   
    npm install  

3. **Database Configuration**
    ```
    Create a MySQL database for the project.
    Configure your database credentials:
    DB_HOST=localhost
    DB_USER=(your_username)
    DB_PASSWORD=(your_password)
    DB_DATABASE=(Database name)


4. **Run Migrations**
    ```
    npx sequelize-cli db:migrate

5. **Start Backend Server**
    ```
    node app.js
    The backend server should now be running on http://localhost:3800.

## License

Specify the license under which your project is distributed. For example:
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.