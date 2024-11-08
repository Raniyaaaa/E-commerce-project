import React, { useState, useEffect } from "react";
import CartContext from "./CartContext";
import axios from "axios";

const CartProvider = (props) => {
    const [items, updateItems] = useState([]);
    const [showCart, setShowCart] = useState(false);

    const email = localStorage.getItem('email');
    const cleanedEmail = email ? email.replace(/[@.]/g, '') : '';
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);
    const userIsLoggedIn = !!token;
    const base_url = `http://localhost:3001/Cart`;


    const fetchCartItems = async () => {
        try {
            const response = await axios.get(`${base_url}?user=${cleanedEmail}`);
            if (response.data && response.data.length > 0) {
                updateItems(response.data[0].items);
            } else {
                updateItems([]);
            }
        } catch (error) {
            console.log("Error fetching data", error);
        }
    };

    useEffect(() => {
        if (userIsLoggedIn && cleanedEmail) {
            fetchCartItems();
        }
    }, [userIsLoggedIn, cleanedEmail]);

    const addItemToCartHandler = async (product) => {
        try {
            const userCartResponse = await axios.get(`${base_url}?user=${cleanedEmail}`);            
            if (userCartResponse.data.length > 0) {
                const userCart = userCartResponse.data[0];
                const existingItemIndex = userCart.items.findIndex(item => item.title === product.title);
                if (existingItemIndex > -1) {
                    userCart.items[existingItemIndex].quantity += 1;
                } else {
                    userCart.items.push({ ...product, id:Math.random(),quantity: 1 });
                }
                await updateBackendCart(userCart.items);
                updateItems(userCart.items);
            } else {
                await axios.post(`${base_url}`, {
                    user: cleanedEmail,
                    items: [{ ...product, quantity: 1 }]
                });
                fetchCartItems();
            }
        } catch (error) {
            console.error("Error handling cart:", error);
        }
    };

    const updateBackendCart = async (updatedItems) => {
        try {
            const userCartResponse = await axios.get(`${base_url}?user=${cleanedEmail}`);
    
            if (userCartResponse.data.length > 0) {
                const userCart = userCartResponse.data[0];
                await axios.put(`${base_url}/${userCart.id}`, {
                    user: cleanedEmail,
                    items: updatedItems
                });
            } else {
                await axios.post(`${base_url}`, {
                    user: cleanedEmail,
                    items: updatedItems
                });
            }
        } catch (error) {
            console.log("Error updating Cart", error);
        }
    };

    const removeItemFromCartHandler = (id) => {
        updateItems((prevItems) => {
            const updatedItems = prevItems.filter((item) => item.id !== id);
            updateBackendCart(updatedItems);
            return updatedItems;
        });
    };

    const loginHandler = (token, email) => {
        setToken(token);
        localStorage.setItem('token', token);
        localStorage.setItem('email', email);
        fetchCartItems();
    };

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('email');
    };

    const toggleCartHandler = () => {
        setShowCart((prevShowCart) => !prevShowCart);
    };

    const cartContext = {
        items: items,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        showCart: showCart,
        toggleCart: toggleCartHandler,
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
