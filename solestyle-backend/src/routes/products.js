const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get product by id
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Create a new product
router.post('/', async (req, res) => {
  try {
    const { name, description, price, size } = req.body;

    // Validate input
    if (!name || !description || !price || !size) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newProduct = await Product.create({
      name,
      description,
      price,
      size,
    });

    res.status(201).json({ message: 'Product created successfully', product: newProduct });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Update a product
router.put('/:id', async (req, res) => {
  try {
    const { name, description, price, size } = req.body;

    // Validate input
    if (!name || !description || !price || !size) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const updatedProduct = await Product.update(
      { name, description, price, size },
      {
        where: { id: req.params.id }
      }
    );

    if (updatedProduct[0] === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json({ message: 'Product updated successfully' });
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Delete a product
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Product.destroy({
      where: { id: req.params.id }
    });

    if (deleted === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;