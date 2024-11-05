import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Image, Card, Row, Col, Button } from 'react-bootstrap';
import CartContext from '../Store/CartContext';

const products = {
    'Colors': {title:'Colors' ,price: 100, images: ['https://prasadyash2411.github.io/ecom-website/img/Album%201.png', 'https://i.pinimg.com/736x/f6/f4/30/f6f4309734cb2125a8f6d7b6d9e5599f.jpg','https://www.tallengestore.com/cdn/shop/products/No1-RoyalRedAndBlue-MarkRothko-ColourfieldPainting_992c1fd9-b2c6-44ea-bb8e-51ad86391766.jpg?v=1636347122', 'https://www.creativefabrica.com/wp-content/uploads/2022/05/17/Futuristic-Red-Blue-Background-Design-Graphics-30683310-1-1-580x371.jpg'], reviews: ['Amazing colors!', 'Worth the price!'] },
    'Black and white Colors': {title:'Black and white Colors' ,price: 50, images: ['https://prasadyash2411.github.io/ecom-website/img/Album%202.png', 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png','https://prasadyash2411.github.io/ecom-website/img/Album%202.png', 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png'], reviews: ['Elegant and stylish', 'Good value!'] },
    'Yellow and Black Colors': {title:'Yellow and Black Colors' ,price: 70, images: ['https://prasadyash2411.github.io/ecom-website/img/Album%203.png', 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png','https://prasadyash2411.github.io/ecom-website/img/Album%203.png', 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png'], reviews: ['Amazing colors!', 'Worth the price!'] },
    'Blue Color': {title:'Blue Color' ,price: 100, images: ['https://prasadyash2411.github.io/ecom-website/img/Album%204.png', 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png','https://prasadyash2411.github.io/ecom-website/img/Album%204.png', 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png'], reviews: ['Amazing colors!', 'Worth the price!'] },
    
};


const ProductDetails = () => {

    const cartCtx=useContext(CartContext)

    const { title } = useParams();
    const product = products[title];
    const [mainImage,setMainImage]=useState(product.images[0])

    if (!product) return <p>Product not found.</p>;

    const addItemToCart=(product)=>{
        cartCtx.addItem({...product})
    }

    return (
        <Container style={{padding:'3rem'}}>
            <h2>{title}</h2>
            <Row>
                <Col md={1} style={{paddingTop:'1.2rem'}}>
                    {product.images.map((image, idx) => (
                        <Image 
                        key={idx} 
                        src={image} 
                        thumbnail 
                        style={{ 
                            width: '100%', 
                            marginBottom: '10px',
                            cursor: 'pointer' 
                        }}
                        onMouseEnter={() => setMainImage(image)}
                        />
                    ))}
                </Col>
                <Col md={4}>
                    <Image src={mainImage} thumbnail style={{ 
                        width: '100%',
                        height: '400px',
                        objectFit: 'contain',
                        }} 
                        /> 
                </Col>  
            </Row>
            <Row className="mt-3" style={{paddingRight:'2rem',paddingLeft:'4rem'}}>
                <Col xs={6} md={2}>
                    <Button variant="info" style={{ width: '100%' ,color:'white'}} onClick={() => addItemToCart({product,imageUrl:product.images[0],price:product.price,title:product.title})}>ADD TO CART</Button>
                </Col>
                <Col xs={6} md={2}>
                    <Button variant="secondary" style={{ width: '100%' }}>BUY NOW</Button>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Card className="mt-4">
                        <Card.Body>
                            <Card.Title style={{ fontSize: '2rem' }}>Reviews</Card.Title>
                            {product.reviews.map((review, idx) => (
                                <Card.Text key={idx}>- {review}</Card.Text>
                            ))}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            
        </Container>
    );
};

export default ProductDetails;