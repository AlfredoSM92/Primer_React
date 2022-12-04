import React from 'react'
import './Item.css'

export default function Item({ product }) {
    return (
            <div id='card'>
                <img className='card__img' src={product.img} alt="COD" />
                <h2 id="product__name">{product.name}</h2>
                <p id="product__price">${product.price}</p>
                <p id="product__info">{product.console}</p>
                <button>Detalle</button>
            </div>
    )
}
