import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Image, Card, Row, Col } from 'react-bootstrap';

const products = {
    'Colors': { price: 100, images: ['https://prasadyash2411.github.io/ecom-website/img/Album%201.png', 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png','https://prasadyash2411.github.io/ecom-website/img/Album%201.png', 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png'], reviews: ['Amazing colors!', 'Worth the price!'] },
    'Black and white Colors': { price: 50, images: ['https://prasadyash2411.github.io/ecom-website/img/Album%202.png', 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png','https://prasadyash2411.github.io/ecom-website/img/Album%202.png', 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png'], reviews: ['Elegant and stylish', 'Good value!'] },
    'Yellow and Black Colors': { price: 70, images: ['https://prasadyash2411.github.io/ecom-website/img/Album%203.png', 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png','https://prasadyash2411.github.io/ecom-website/img/Album%203.png', 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png'], reviews: ['Amazing colors!', 'Worth the price!'] },
    'Blue Color': { price: 100, images: ['https://prasadyash2411.github.io/ecom-website/img/Album%204.png', 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png','https://prasadyash2411.github.io/ecom-website/img/Album%204.png', 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png'], reviews: ['Amazing colors!', 'Worth the price!'] },
    
};

const ProductDetails = () => {
    const { title } = useParams();
    const product = products[title];

    if (!product) return <p>Product not found.</p>;

    return (
        <Container style={{padding:'3rem'}}>
            <h2>{title}</h2>
            <Row>
                {product.images.map((image, idx) => (
                    <Col key={idx} xs={3} md={3}>
                        <Image style={{scale:'70%',gap:'none'}} src={image} thumbnail />
                    </Col>
                ))}
            </Row>
            <Card className="mt-3">
                <Card.Body>
                    <Card.Title>Reviews</Card.Title>
                    {product.reviews.map((review, idx) => (
                        <Card.Text key={idx}>- {review}</Card.Text>
                    ))}
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ProductDetails;