import React from "react";

const CartContext = React.createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {},
    showCart: false,
    toggleCart: () => {}, 
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {}
    
});

export default CartContext;
