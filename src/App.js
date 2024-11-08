import React ,{ useContext }from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainNavigation from './components/MainNavigation/MainNavigation';
import Home from './Pages/Home'
import Product from "./Pages/Product"
import About from "./Pages/About"
import Auth from './Pages/Auth';
import ContactUs from "./Pages/ContactUs"
import ProductDetails from './Pages/ProductDetails';
import CartContext from './Store/CartContext';

function ProtectedProductRoute() {
  const cartCtx = useContext(CartContext);
  return cartCtx.isLoggedIn ? <Product /> : <Navigate to="/auth" />;
}

function App() {
    return (
        <Router>
            <MainNavigation />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/store" element={<ProtectedProductRoute />}/>
                <Route path="/about" element={<About />} />
                <Route path="/auth" element={<Auth/>} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/store/:title" element={<ProductDetails />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;
