import { createContext, useContext, useState } from "react";

export const CartContext = createContext([])

export const CartProvider = ({children}) =>{
    const [cartItem, setCartItem] = useState([])

    const addToCart = (item) =>{
        setCartItem([...cartItem, item])
    }

    const removeFromCart = (item) =>{
        const newCart = cartItem.filter(
            product => item.name !== product.name
        )

        setCartItem(newCart)
    }

    return(
        <CartContext.Provider value={{cartItem, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)