import { useEffect, useState } from 'react'
import ItemList from '../../components/ItemList/ItemList'
import {myPromise} from '../../Products/Games';
import './ItemListContainer.css'

export const ItemListContainer = () => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    myPromise()
      .then(res => setProduct(res))
      .catch(fail => console.log(fail))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
    { loading ? 
    <div id="div__loading">
      <img id="img__loading" src="https://acegif.com/wp-content/uploads/loading-13.gif" alt="" />
      <h2 id="text__waiting">Estamos cargando nuestros productos, esperamos disfrutes mucho tu visita</h2>
    </div>
    :
      <ItemList products={products} />
    }
    </>
  )
}