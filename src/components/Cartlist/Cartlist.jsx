import { useCartContext } from '../../Context/CartContext'
import './Cartlist.css'

function Cartlist ({ product}) {
    const {cleanItem} = useCartContext()

    return (
        <div id="cart__info">
            <img className='img__product' src={product.img} />
            <div>
                <p>Nombre: {product.name}</p>
                <p>Precio: {product.price}</p>
                <p>Consola: {product.console}</p>
                <p>Cantidad: {product.cant}</p>

            </div>
            <button id="clear__button" onClick={() => cleanItem(product.id)}>Eliminar</button>    
        </div>
    )
}

export default Cartlist