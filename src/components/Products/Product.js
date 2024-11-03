import React from "react"
import { Container,Button, Row,Col,Card } from "react-bootstrap"
const Product=()=>{

    const productsArr = [
        { title: 'Colors', price: 100, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png'},
        { title: 'Black and white Colors', price: 50, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png'},
        { title: 'Yellow and Black Colors', price: 70,imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png'},
        { title: 'Blue Color', price: 100, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png'}]
        
        return(
            <>
                <Container>
                    <h1 style={{ fontFamily: 'fantasy', textAlign: 'center',paddingTop:'2rem'}}>MUSIC</h1>
                    <Row style={{marginRight: '10rem' ,marginLeft: '10rem' }}>
                        {productsArr.map((product, index) => (
                        <Col md={6} sm={12} key={index} className="justify-content-center">
                            <Card style={{ textAlign: 'center',fontFamily: 'Times New Roman',scale:'80%',border:'none'}}>
                                <Card.Title >{product.title}</Card.Title>
                                <Card.Img variant="none" 
                                src={product.imageUrl} 
                                alt={product.title} 
                                style={{padding:"2rem",
                                transition: "transform 0.5s",
                                objectFit:"inherit"
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
                                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                                />                            
                                <Card.Body className="d-flex justify-content-between align-items-center">
                                <Card.Text>${product.price}</Card.Text>
                                    <Button variant="info" style={{color:'white',borderRadius:'0'}}>ADD TO CART</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        ))}
                    </Row>
                    <div className="d-flex justify-content-center m-3">
                        <Button variant="secondary" style={{color:"skyblue"}}>See the Cart</Button>
                    </div>
                </Container>
            </>
        )
}

export default Product;
 