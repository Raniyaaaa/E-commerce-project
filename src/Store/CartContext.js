import React from "react";

const CartContext = React.createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {},
    showCart: false,
    toggleCart: () => {}, 
});

export default CartContext;
