import { useCartContext } from "../../Context/CartContext"
import './CartWidget.css'


export const CartWidget = () => {
  const{totalCant} = useCartContext()
  
  return (
    <div id="widget">
    <p id="cant">{totalCant() !== 0 && totalCant()}</p>
    <i className="fa-solid fa-cart-shopping"></i>
    </div>
  )
}
