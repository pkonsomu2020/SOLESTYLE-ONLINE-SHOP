const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS, // Ensure this matches your .env file key (DB_PASS)
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false, // Set to true if you need more detailed logs for debugging
  }
);

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;