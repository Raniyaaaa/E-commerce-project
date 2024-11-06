import { Container, Navbar, Button, Badge} from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../../Store/CartContext';

const MainNavigation = () => {
    const location = useLocation();
    const cartCtx = useContext(CartContext);

    const totalQuantity = cartCtx.items.reduce((total, item) => total + item.quantity, 0);

    return (
        <>
            <Navbar bg="black" expand="sm" variant="dark" style={{ paddingRight: '1rem', fontFamily: 'Times New Roman' }}>
                <Container className="d-flex justify-content-between">
                    <div className="d-flex justify-content-center flex-grow-1">
                        <NavLink to='/' style={{ marginRight: '1rem', color: 'white', textDecoration: 'none' }}>HOME</NavLink>
                        <NavLink to='/store' style={{ marginRight: '1rem', color: 'white', textDecoration: 'none' }}>STORE</NavLink>
                        <NavLink to='/about' style={{ marginRight: '1rem', color: 'white', textDecoration: 'none' }}>ABOUT</NavLink>
                        <NavLink to='/auth' style={{ marginRight: '1rem', color: 'white', textDecoration: 'none' }}>LOGIN</NavLink>
                        <NavLink to='/contactus' style={{ color: 'white', textDecoration: 'none' }}>CONTACT US</NavLink>
                    </div>

                    {(location.pathname === '/store'|| location.pathname.includes('/store') )&& (
                        <div className="d-flex align-items-center" style={{ width: '100px', position: 'absolute',right:'-40px' }}>
                            <Button 
                                variant="none" 
                                size="sm" 
                                onClick={() => cartCtx.toggleCart(true)} 
                                style={{ fontSize: '0.9rem', borderColor: '#56CCF2', color: 'white', width: '40px',height:'30px' }}
                            >
                                Cart
                            </Button>
                            <Badge
                                bg="none"
                                style={{
                                    color: '#56CCF2',
                                    position: 'absolute',
                                    top: '-9px',
                                    right: '+40px',
                                    fontSize: '1.2rem',
                                    padding: '0.4rem',
                                }}
                            >
                                {totalQuantity}
                            </Badge>
                        </div>
                    )}
                </Container>
            </Navbar>

            <header className="mt-1" style={{ background: "grey" }}>
                <Container className="justify-content-center" style={{ paddingBottom: '3rem' }}>
                    <h1 style={{ fontSize: '5rem', color: 'white', fontWeight: 'bold', textAlign: 'center', fontFamily: 'Times New Roman' }}>
                        The Generics
                    </h1>
                    {location.pathname==='/'&&(
                        <div>
                            <Container className="d-flex justify-content-center" style={{padding:'1rem'}}>
                                <Button variant='none'style={{borderRadius:'0%',color:'white',scale:'1.2',borderColor:'#56CCF2'}}>Get our Latest Album</Button>
                            </Container> 
                            <Container className="d-flex justify-content-center">    
                                <Button style={{
                                    border:'2px solid #56CCF2',
                                    borderRadius:'50%',
                                    padding:'15px',
                                    fontSize:'12px',
                                    fontWeight: '200',
                                    margin:'20px',
                                    background: 'inherit',
                                    color:'#56CCF2',
                                }}>
                                    ► 
                                </Button> 
                            </Container>  
                        </div>    
                    )}
                </Container>
            </header>
        </>
    );
};

export default MainNavigation;
