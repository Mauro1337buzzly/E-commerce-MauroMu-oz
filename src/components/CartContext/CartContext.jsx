import { createContext, useState } from "react";
import productos from "../productos";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([]);

    const addItem = (product, cant) => { 
        setCartList([...cartList, product]);
    }

    const clear = () => {
        setCartList([]);
    }

    const removeItem = (id) => {
        setCartList(cartList.filter(item => item.id !== id))

    }

    return(
        <CartContext.Provider  value={{cartList, addItem, removeItem}}>
            { children }
        </CartContext.Provider>

    );
}

export default CartContextProvider