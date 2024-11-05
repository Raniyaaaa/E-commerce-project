import React, { useContext} from "react";
import { Container, Button, Row, Col, Card} from "react-bootstrap";
import CartContext from "../Store/CartContext";
import Cart from "../components/Cart/Cart";

const Product = () => {
    const cartCtx = useContext(CartContext);

    const productsArr = [
        { title: 'Colors', price: 100, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png' },
        { title: 'Black and white Colors', price: 50, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png' },
        { title: 'Yellow and Black Colors', price: 70, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png' },
        { title: 'Blue Color', price: 100, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png' }
    ];

    const addItemToCart = (product) => {
        cartCtx.addItem({ ...product });
    };


    return (
        <>
            <Container>
                <h1 style={{ fontFamily: 'fantasy', textAlign: 'center', paddingTop: '2rem' }}>MUSIC</h1>
                <Row style={{ marginRight: '10rem', marginLeft: '10rem' }}>
                    {productsArr.map((product, index) => (
                        <Col md={6} sm={12} xs={12} key={index} className="justify-content-center">
                            <Card style={{ textAlign: 'center', fontFamily: 'Times New Roman', scale: '80%', border: 'none' }}>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Img
                                    variant="none"
                                    src={product.imageUrl}
                                    alt={product.title}
                                    style={{
                                        padding: "2rem",
                                        transition: "transform 0.5s",
                                        objectFit: "inherit"
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
                                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                                />
                                <Card.Body className="d-flex justify-content-between align-items-center">
                                    <Card.Text>${product.price}</Card.Text>
                                    <Button variant="info" style={{ color: 'white', borderRadius: '0' }} onClick={() => addItemToCart(product)}>ADD TO CART</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <div>
                    <Container className="d-flex justify-content-center mb-3">
                        <Button variant="secondary" style={{ color: "#56CCF2" }} onClick={cartCtx.toggleCart}>SEE THE CART</Button>
                    </Container>
                </div>
            </Container>

            <Cart/>
        </>
    );
}

export default Product;
