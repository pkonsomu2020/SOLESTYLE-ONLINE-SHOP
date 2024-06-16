const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Import JWT for token generation
const sequelize = require('./config/database');
const User = require('./models/User');
const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');
require('dotenv').config();


const app = express();

// Middleware to parse JSON bodies and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the root folder
app.use(express.static(path.join(__dirname, '..', '..')));

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'index.html')); // Assuming server.js is in the 'src' directory
});

// Use user routes
app.use('/api/users', userRoutes);
// No need for the following line, as userRoutes already handles '/api/users'
// const userRouter = express.Router();

// Use product routes
app.use('/api/products', productRoutes);

// Handle user registration
app.post('/api/users/register', async (req, res) => {
  try {
    const { fullname, email, phone, password, passwordRepeat } = req.body;

    // Validate input
    if (!fullname || !email || !phone || !password || !passwordRepeat) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user record in the database
    const newUser = await User.create({
      fullname,
      email,
      phone,
      password: hashedPassword,
    });

    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});

// Handle user login
app.post('/api/users/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Passwords match, proceed with login
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});

// Define the port number
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await sequelize.sync();
    console.log('Database connected!');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();