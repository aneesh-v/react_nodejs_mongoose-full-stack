import express from 'express';
import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

const router = express.Router();

// gets all the products from database/product file
// @desc Fetch all products
// @route GET /api/products
// @access Public
router.get(
	'/',
	asyncHandler(async (req, res) => {
		const products = await Product.find({});
		res.json(products);
	})
);
// get a single product
// @desc Fetch a single product
// @route GET /api/products?:id
// @access Public
router.get(
	'/:id',
	asyncHandler(async (req, res) => {
		const product = await Product.findById(req.params.id);
		if (product) {
			res.json(product);
		} else {
			// res.status(404).json({ message: 'Product not found' });
			// if we dont provide this, by default status will be 505
			res.status(404);
			// this error will reach the error handler
			throw new Error('Product not found');
		}
	})
);
export default router;
