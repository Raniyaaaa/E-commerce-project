import React, { useContext } from "react"
import { Badge, Button, Modal,Row,Col,Image, Container } from "react-bootstrap";
import CartContext from "../../Store/CartContext"


const Cart=()=>{
    const cartCtx=useContext(CartContext)
        
        const total = cartCtx.items.reduce((sum, item) => {
            return sum + (item.price * item.quantity);
        }, 0);
        console.log('Cart items:', cartCtx.items);

    return(
        <Container className="justify-content-center">
            <Modal show={cartCtx.showCart} onHide={cartCtx.toggleCart} style={{fontFamily:"Times New Roman",fontWeight:"bold"}}>
                <Modal.Header closeButton style={{borderBottom:'none'}}>    
                    <Modal.Title style={{fontWeight:"bold"}} className="w-100 text-center">CART</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="justify-content-center mb-4" style={{border:'true'}}>
                        <Col className="text-center border-bottom">ITEM</Col>
                        <Col className="text-center border-bottom">PRICE</Col>
                        <Col className="text-center border-bottom">QUANTITY</Col>
                    </Row>
                    {cartCtx.items.map((item,index)=>(
                        <Row key={index}>
                            <Col xs={5} className="d-flex align-items-center mb-3">
                                <Image  src={item.imageUrl}  thumbnail style={{ width: '50%',border:'none', marginRight:'10px' }} />{" "}
                                <span style={{fontSize:16}}>{item.title}</span>                               
                            </Col>
                            <Col className="d-flex align-items-center mb-3">
                                <p>{item.price}</p>
                            </Col>
                            <Col sm={4} className="d-flex align-items-center mb-3">
                                <Badge bg="info" style={{ marginRight:'10px' }}>{item.quantity}</Badge>
                                <Button variant="danger" onClick={() => cartCtx.removeItem(item.id)}>Remove</Button>
                            </Col>
                        </Row>  
                    ))}
                    <h4 className="text-center mt-4">Total $ {total}</h4>
                    <div className="d-flex justify-content-center m-3">
                        <Button variant="info" style={{color:'white'}}>PURCHASE</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </Container>
    )
}
export default Cart;