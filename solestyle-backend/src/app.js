const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

module.exports = app;