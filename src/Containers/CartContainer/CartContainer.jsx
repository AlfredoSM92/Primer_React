import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React from 'react'
import { Link } from 'react-router-dom'
import Cartlist from '../../components/Cartlist/Cartlist'
import { useCartContext } from '../../Context/CartContext'
import './CartContainer.css'

const CartContainer = () => {
  const { cartList, totalPrice, cleanCart} = useCartContext()
  console.log(cartList)

  const addOrder = () => {
    const order = {}
    order.buyer = {name:"Juanito", phone: 5521874659, email: 'j@yahoo.com'}
    order.items = cartList.map(({id, price, name}) => ({id, price, name}))
    order.price = totalPrice()

    const db = getFirestore()
    const queryCollection = collection(db, 'orders')
    addDoc(queryCollection, order)
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
    .finally(()=> cleanCart())
  }

  const refreshOrder = () => {
    const db = getFirestore()
    const queryCollection = collection(db, 'orders')
    const queryDoc = doc(db, 'products', )

  }

  return (
    <section>
      {cartList.length !== 0 ?
        <>
          {cartList.map(product => <Cartlist key={product.id} product={product}/>)}
          <p id="totalPrice">Total a pagar: {totalPrice()}</p>
          <button id="clear__button" onClick={cleanCart}>Vaciar Carrito</button>
          <button onClick={addOrder}>Comprar</button>
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