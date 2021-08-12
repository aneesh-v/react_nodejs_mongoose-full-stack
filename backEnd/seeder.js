// This is a seperate seeder file to upload and distroy
// databse items. It has nothing to do with the backend server.
// This file runs individually using seperate command.

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const importData = async () => {
	try {
		// delete everything from the database before adding
		await User.deleteMany();
		await Product.deleteMany();
		await Order.deleteMany();

		// adding users to database
		// to get the id of admin we save it to a variable
		const createdUsers = await User.insertMany(users);
		const adminUser = createdUsers[0]._id;

		// then we need to link the admin id to the products.
		// for that we go through each product and add admin id
		// to the user field.
		const productWidhAdminUser = products.map((product) => {
			return { ...product, user: adminUser };
		});

		await Product.insertMany(productWidhAdminUser);
		console.log('Products Imported'.green.inverse);
		process.exit();
	} catch (error) {
		console.log(`${error}`.red.inverse);
		process.exit(1);
	}
};
const destroyData = async () => {
	try {
		// delete everything from the database before adding
		await User.deleteMany();
		await Product.deleteMany();
		await Order.deleteMany();
		console.log('Products Deleted'.red.inverse);
		process.exit();
	} catch (error) {
		console.log(`${error}`.red.inverse);
		process.exit(1);
	}
};

// now we need to call this functions like
// node backend/seeder   - To import data
// node backed/seeder -d    - To delete data
// the -d argument can acces using process.argv[2]
//  and we add a script in the package.json to run above commands.
if (process.argv[2] === '-d') {
	destroyData();
} else {
	importData();
}
