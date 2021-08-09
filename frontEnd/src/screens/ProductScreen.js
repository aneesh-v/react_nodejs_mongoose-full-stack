import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap';
import Rating from '../components/Rating';
// we are going to fetch from backend
// import products from '../products';
import axios from 'axios';

// The match props came from react-router-dom {Route path='/products/:id}
// I could put any other like '/products/:id/:test' and use match.params.test to get
// that value.
const ProductScreen = ({ match }) => {
	const [product, setProduct] = useState([]);
	// we are fetching from backend
	// const product = products.find((p) => p._id === match.params.id);

	useEffect(() => {
		const fetchProduct = async () => {
			// id is set in the App.js Route. to access we use match.params.id
			const { data } = await axios.get(`/api/products/${match.params.id}`);
			setProduct(data);
		};
		fetchProduct();
	}, [match]);

	return (
		<>
			<Link className='btn btn-dark my-3' to='/'>
				Go Back
			</Link>
			<Row>
				<Col md={3}>
					<Image src={product.image} alt={product.name} fluid></Image>
				</Col>
				<Col md={6}>
					{/* to remove the border of listgroup use variant='flush' */}
					<ListGroup variant='flush'>
						<ListGroupItem>
							<h3>{product.name}</h3>
						</ListGroupItem>
						<ListGroupItem>
							<Rating value={product.rating} text={`${product.numReviews} reviews`} />
						</ListGroupItem>
						<ListGroupItem>Price : ${product.price}</ListGroupItem>
						<ListGroupItem>Description : {product.description}</ListGroupItem>
					</ListGroup>
				</Col>
				<Col md={3}>
					<Card>
						<ListGroup>
							<ListGroupItem variant='flush'>
								<Row>
									<Col>Price :</Col>
									<Col>
										<strong>{product.price}</strong>
									</Col>
								</Row>
							</ListGroupItem>
							<ListGroupItem variant='flush'>
								<Row>
									<Col>Status :</Col>
									<Col>
										{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
									</Col>
								</Row>
							</ListGroupItem>
							<ListGroupItem variant='flush'>
								<Row>
									<Button
										className='btn-block btn-dark'
										disabled={product.countInStock === 0}
									>
										Add To Cart
									</Button>
								</Row>
							</ListGroupItem>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default ProductScreen;
