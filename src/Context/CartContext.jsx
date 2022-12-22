import { createContext, useContext, useState} from "react";

const CartContext = createContext([])

export  const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const addToCart = (product) => {
        const idx = cartList.findIndex(prod => prod.id === product.id)

        if(idx !== -1){
            cartList[idx].cant += product.cant
            setCartList([...cartList])
        } else {
            setCartList([...cartList, product])
        }
    }
    
const totalPrice = () => cartList.reduce((count, product) => count += (product.price * product.cant), 0)
    
const totalCant = () => cartList.reduce((count, product) => count += product.cant, 0)

const cleanCart = () => {
    setCartList([])
}

const cleanItem = (id) => {
    setCartList(cartList.filter(product => product.id !== id))
}

return (
    <CartContext.Provider value={{
        cartList,
        addToCart,
        cleanCart,
        totalPrice,
        totalCant,
        cleanItem
    }}>
        {children}
    </CartContext.Provider>
)
}