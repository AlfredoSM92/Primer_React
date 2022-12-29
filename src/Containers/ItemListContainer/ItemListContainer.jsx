import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from '../../Components/ItemList/ItemList'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import './ItemListContainer.css'

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams()

  useEffect(() => {
    const db = getFirestore()
    const queryCollection = collection(db, 'productos')

    //Traer filtrado
    if (id) {
      const queryFilter = query(queryCollection, where('category', '==', id)) //Trae Filtrada
      getDocs(queryFilter)
        .then(res => setProducts(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        .catch(fail => console.log(fail))
        .finally(() => setLoading(false))
    }
    
    //Traer todos
    else {
      getDocs(queryCollection)
        .then(res => setProducts(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        .catch(fail => console.log(fail))
        .finally(() => setLoading(false))
    }
  }, [id])

  return (
    <>
      {loading ?
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