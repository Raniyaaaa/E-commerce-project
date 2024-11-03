import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
    const [items, updateItems] = useState([]);
    const [showCart, setShowCart] = useState(false);

    const addItemToCartHandler = (product) => {
        console.log('Adding item:', product);
        updateItems((prevItems) => {
            const existingIndex = prevItems.findIndex((prevItem) => prevItem.title === product.title);
            const existingItem = prevItems[existingIndex];
            let updatedItems;
            if (existingItem) {
                const updatedItem = { ...existingItem, quantity: existingItem.quantity + 1 };
                updatedItems = [...prevItems];
                updatedItems[existingIndex] = updatedItem;
            } else {
                updatedItems = [...prevItems, { ...product, quantity: 1 }];
            }
            console.log('Updated items:', updatedItems);
            return updatedItems;
        });
    };

    const removeItemFromCartHandler = () => {
        
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
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
