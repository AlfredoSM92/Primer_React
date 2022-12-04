import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
function ItemDetail({ product }) {
  return (
      <div id="item__detail">
        <img src={product.img} alt="" />
        <h3 id="item__title">{product.name}</h3>
        <p className='item__info'>Categoría: {product.category}</p>
        <p className='item__info'>Consola: {product.console}</p>
        <ItemCount/>
      </div>
  )
}

export default ItemDetail