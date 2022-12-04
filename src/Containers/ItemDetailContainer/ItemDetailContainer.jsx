import React, { useEffect, useState } from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { myPromise } from '../../Products/Games';

function ItemDetailContainer() {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    myPromise()
      .then(res => setProduct(res[0]))
      .catch(fail => console.log(fail))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
    {loading ?
    <div>
      <img id="img__loading" src="https://acegif.com/wp-content/uploads/loading-13.gif" alt="" />
    </div>
    :
    <ItemDetail product={products}/>
    }
    </>
  )
}

export default ItemDetailContainer