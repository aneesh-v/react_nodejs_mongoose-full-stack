import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ product }) => {
	return (
		<Card className='my-3 p-3 rounded'>
			{/* To prevent reloading the page while pressing the link
			we need to replace 'a' tag with 'Link' from react-router-dom */}
			<Link to={`/products/${product._id}`}>
				<Card.Img src={product.image} variant='top' />
			</Link>
			<Card.Body>
				<Link to={`/products/${product._id}`}>
					<Card.Title as='div'>
						<strong>{product.name}</strong>
					</Card.Title>
				</Link>
			</Card.Body>
			<Card.Text as='div'>
				<Rating value={product.rating} text={`${product.numReviews} rating`} />
			</Card.Text>
			<Card.Text as='h3'> ${product.price}</Card.Text>
		</Card>
	);
};

export default Product;
