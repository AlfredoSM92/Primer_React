import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useState } from 'react'
import { useCartContext } from '../../Context/CartContext'
import './CartForm.css'

const CartForm = () => {
  const { cartList, totalPrice, cleanCart } = useCartContext()
  const [dataForm, setDataForm] = useState({
    name: '',
    phone: '',
    email: '',
    confirmation: ''
  })

  const handleOnChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    })
  }

  const validation = () => {
    if (dataForm.name != '' && dataForm.phone != '' && dataForm.email != '' && dataForm.email == dataForm.confirmation) {
      addOrder(dataForm)
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Verifica que los datos sean correctos y que los campos estén llenos',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }
  }

  const addOrder = () => {
    const order = {}
    order.buyer = dataForm
    order.items = cartList.map(({ id, price, name }) => ({ id, price, name }))
    order.price = totalPrice()

    const db = getFirestore()
    const queryCollection = collection(db, 'orders')
    addDoc(queryCollection, order)
      .then(resp => finalOrder(resp))
      .catch(err => console.log(err))
      .finally(() => cleanCart())
  }

  function finalOrder(param) {
    Swal.fire({
      title: "Compra realizada",
      text: `Disfruta tu compra, tu folio de seguimiento es: ${param.id}`,
      icon: 'success'
    })
  }

  return (
    <>
      <form id="form">
        <label htmlFor="firstName">Nombre</label>
        <input onChange={handleOnChange} type="text" name="name" value={dataForm.name} placeholder='Ingresa tu nombre' />

        <label htmlFor="phone">Teléfono</label>
        <input onChange={handleOnChange} type="tel" name="phone" value={dataForm.phone} placeholder='Ingresa tu teléfono' />

        <label htmlFor="email">Correo</label>
        <input onChange={handleOnChange} type="email" name="email" value={dataForm.email} placeholder='Ingresa tu correo' />

        <label htmlFor="confirmation">Verifica tu correo</label>
        <input onChange={handleOnChange} type="email" name="confirmation" value={dataForm.confirmation} placeholder='Confirma tu correo' />

        <p id="totalPrice">Total a pagar: {totalPrice()}</p>
      </form>
      <button onClick={validation} className='form__buttons'>Comprar</button>
      <button className='form__buttons' id="clear__button" onClick={cleanCart}>Vaciar Carrito</button>
    </>
  )
}

export default CartForm