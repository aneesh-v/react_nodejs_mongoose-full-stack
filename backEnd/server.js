// changing from commonjs to es module. added "type":"module" in package.json
// const express = require('express')
import express from 'express';
import dotenv from 'dotenv';
// it is important to add .js in node while exporting modules.
import connectDB from './config/db.js';
import colors from 'colors';
import productRouter from './routers/productRouter.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// environmental variable config
dotenv.config();
// connecting mongoDB
connectDB();

const app = express();

// a get request to '/'
app.get('/', (req, res) => {
	res.send('API running...');
});
// any route that use /api/products will redirect to productRouter.
app.use('/api/products', productRouter);

// this error handler is for url not found.
app.use(notFound);

// Creating a custom error middleware
// since it is an error middleware, we need to pass err at the biginnig
// and the next as the last argument of function
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));
