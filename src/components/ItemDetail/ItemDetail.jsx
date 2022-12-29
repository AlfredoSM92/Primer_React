import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

function ItemDetail({ product }) {
  const [isCant, setIsCant] = useState(false)

  const { addToCart } = useCartContext()

  function onAdd(cant) {
    addToCart({ ...product, cant })
    setIsCant(true)
  }


  return (
    <>
      <section id="item__detail">
        <div className='div__item'>
          <img id="item__img" src={product.img} alt="" />
          <h3 id="item__title">{product.name}</h3>
          <p className='item__info'>Categoría: {product.category}</p>
          <p className='item__info'>Precio: ${product.price}</p>
          <p className='item__info'>Consola: {product.console}</p>
          <p className='item__info'>Unidades disponibles: {product.stock}</p>
        </div>
        <div className='"div__item'>
          {
            isCant ?
              <div id="buttons">
                <Link to="/cart">
                  <button>Ir a Carrito</button>
                </Link>
                <Link to="/">
                  <button>Seguir comprando</button>
                </Link>
              </div>
              :
              <ItemCount stock={product.stock}
                onAdd={onAdd} />
          }
        </div>
      </section>
    </>
  )
}

export default ItemDetail