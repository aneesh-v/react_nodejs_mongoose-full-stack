// changing from commonjs to es module. added "type":"module" in package.json
// const express = require('express')
import express from 'express';
import dotenv from 'dotenv';
// it is important to add .js in node while exporting modules.
import connectDB from './config/db.js';
import colors from 'colors';
import products from './data/products.js';
// environmental variable config
dotenv.config();
// connecting mongoDB
connectDB();

const app = express();

// a get request to '/'
app.get('/', (req, res) => {
	res.send('API running...');
});
// gets all the products from database/product file
app.get('/api/products', (req, res) => {
	res.json(products);
});
// get a single product
app.get('/api/products/:id', (req, res) => {
	const product = products.find((p) => p._id === req.params.id);
	res.json(product);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));
