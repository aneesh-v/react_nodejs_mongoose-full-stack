import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
// We are going to fetch the product from backend using axios and useState.
// So this will be disabled from now.
// import products from '../products';
import Product from '../components/Product';
import axios from 'axios';

const HomeScreen = () => {
	const [products, setProducts] = useState([]);

	// as soon as the component load useEffect runs/
	useEffect(() => {
		const fetchProducts = async () => {
			// const res = await axios.get('/api/products')
			// when we do like this we need to add a proxy port in frondend packge.json
			// because now the react is running on port 3000 and the server is on port 5000
			// we can not define 'localhost:5000' below because it throw cross origin request error - CORS
			const { data } = await axios.get('/api/products');
			setProducts(data);
		};
		fetchProducts();
	}, []);
	return (
		<>
			<h1>Latest Products</h1>
			<Row>
				{products.map((product) => (
					<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
						<Product product={product} />
					</Col>
				))}
			</Row>
		</>
	);
};

export default HomeScreen;
