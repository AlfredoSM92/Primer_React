import { Link } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext'
import CartForm from '../../Components/CartForm/CartForm'
import Cart from '../../Components/Cart/Cart'
import './CartContainer.css'

const CartContainer = () => {
  const { cartList} = useCartContext()

  return (
    <section id='cartContainer'>
      {cartList.length !== 0 ?
        <>
          {cartList.map(product => <Cart key={product.id} product={product}/>)}
          <CartForm/>
        </> 
        :
    <>
    <h2>Carrito Vacío</h2>
    <Link to='/'>
      <p id="goHome">Ver productos</p>
      </Link>
    </>
      }
    </section>
  )
}

      export default CartContainer