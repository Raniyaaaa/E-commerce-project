import { Container, Navbar, Button, Badge } from 'react-bootstrap';
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
                        <NavLink to='/about' style={{ color: 'white', textDecoration: 'none' }}>ABOUT</NavLink>
                    </div>

                    {location.pathname === '/store' && (
                        <div className="d-flex align-items-center">
                            <Button variant='outline-info' onClick={() => cartCtx.toggleCart(true)} style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem' }}>Cart</Button>
                            <Badge
                                bg="none"
                                style={{
                                    color: 'skyblue',
                                    position: 'absolute',
                                    top: '-6px',
                                    right: '+32px',
                                    fontSize: '1.2rem',
                                    padding: '0.4rem',
                                }}>
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
                </Container>
            </header>
        </>
    );
};

export default MainNavigation;
