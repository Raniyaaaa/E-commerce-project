import React ,{ useContext ,Suspense }from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import CartContext from './Store/CartContext';
const Home =React.lazy(()=> import('./Pages/Home'));
const Product =React.lazy(()=> import('./Pages/Product'));
const About =React.lazy(()=> import('./Pages/About'));
const Auth =React.lazy(()=> import('./Pages/Auth'));
const ContactUs =React.lazy(()=> import('./Pages/ContactUs'));
const ProductDetails =React.lazy(()=> import('./Pages/ProductDetails'));
const MainNavigation =React.lazy(()=> import('./components/MainNavigation/MainNavigation'));


function ProtectedProductRoute() {
  const cartCtx = useContext(CartContext);
  return cartCtx.isLoggedIn ? <Product /> : <Navigate to="/auth" />;
}

function App() {
    return (
        <Router>
            <Suspense fallback={<div style={{textAlign:'center',padding:'10rem',color:'grey'}}><h2>Loading...</h2></div>}>
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
            </Suspense>
        </Router>
    );
}

export default App;
