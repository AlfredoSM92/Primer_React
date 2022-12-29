import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import './ItemDetailContainer.css'

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} =useParams()
  
  useEffect (()=>{
    const db = getFirestore()
    const queryDoc= doc(db, 'productos', id)
    getDoc(queryDoc)
    .then(res => setProduct( {id: res.id, ...res.data()} ))
    .catch(fail => console.log(fail))
    .finally(() => setLoading(false))
  },[id])

  return (
    <>
    {loading ?
      <img id="img__loading" src="https://acegif.com/wp-content/uploads/loading-13.gif" alt="" />
    :
    <ItemDetail product={product}/>
    }
    </> 
  )
}

export default ItemDetailContainer