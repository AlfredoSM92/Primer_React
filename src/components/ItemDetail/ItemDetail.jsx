import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
function ItemDetail({ product }) {
  return (
    <>
    <section id="item__detail">
      <div className='div__item'>
        <img id="item__img" src={product.img} alt="" />
        <h3 id="item__title">{product.name}</h3>
        <p className='item__info'>Categoría: {product.category}</p>
        <p className='item__info'>Precio: ${product.price}</p>
        <p className='item__info'>Consola: {product.console}</p>
      </div>
      <div className='"div__item'>
        <ItemCount/>
        <button id="addToCart">Agregar a carrito</button>
      </div>
    </section>
    </>
  )
}

export default ItemDetail