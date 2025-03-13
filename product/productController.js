
const { ObjectId } = require('mongodb');

// create: Add new product
const createProduct = async (req, res) => {
    try {
        const payload = req.body;
        const result = await req.collection.insertOne(payload);
        res.status(200).json({message: 'Product created', id: result.insertedId})
    } catch (err) {
        res.status(500).json({message: 'Error creating product', err})
    }
}

// Read: Get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await req.collection.find().toArray();
        res.status(200).json(products)
    } catch (err) {
        res.status(500).json({message: 'Error fetching all products', err})
    }
}




// Read: Get a product by ID
const getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await req.collection.findOne({ _id: new ObjectId(productId) });
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product', error });
  }
};

// Update: Update a product's details
const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const updateProduct = req.body;
    const result = await req.collection.updateOne(
      { _id: new ObjectId(productId) },
      { $set: updateProduct }
    );
    if (result.modifiedCount > 0) {
      res.status(200).json({ message: 'Product updated' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating Product', error });
  }
};

// Delete: Remove a product by ID
const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const result = await req.collection.deleteOne({ _id: new ObjectId(productId) });
    if (result.deletedCount > 0) {
      res.status(200).json({ message: 'Product deleted' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product', error });
  }
};


module.exports = { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct };