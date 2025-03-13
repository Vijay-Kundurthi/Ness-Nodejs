const express = require('express');
const { MongoClient } = require('mongodb');
const productRoutes =   require('./productRouter');

const app = express();
const PORT = 3000;

//middleware
app.use(express.json());

// MongoDB connection
const url = 'mongodb://localhost:27017';
const dbName = 'Ness-DB';
let db;
let collection;

MongoClient.connect(url)
    .then(client => {
        console.log('Connected to MongoDB..!');
        db = client.db(dbName);
        collection = db.collection('products')
        app.locals.collection = collection;
    })
    .catch(error =>console.error('Error connecting to MongoDB:', error));
    
// Pass the database and collection to the router
app.use('/products', productRoutes(collection));

// server listener
app.listen(PORT, () => {
    //console.log('collection', collection);
    
    console.log(`Server running at http://localhost:${PORT}`);
});