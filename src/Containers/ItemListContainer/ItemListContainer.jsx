import { useEffect, useState } from 'react'
import ItemList from '../../components/ItemList/ItemList'
import './ItemListContainer.css'

const games = [{
  id: 1,
  name: "Call of Duty - Modern Warfare",
  img: "https://cdn-products.eneba.com/resized-products/afNMnESjVkMv7QGAlZ7IlH3J-YQN3PNssAc0KSoGrFA_350x200_3x-0.jpeg",
  price: 1300,
  console: "Xbox"
},
{
  id: 2,
  name: "Gears of war 5",
  img: "https://m.media-amazon.com/images/I/71ls7-2FwLL._AC_SL1000_.jpg",
  price: 900,
  console: "Xbox"
},
{
  id: 3,
  name: "Forza Horizon 5",
  img: "https://cf.shopee.com.mx/file/46b357e069fd315deaf1f9eafc0587c9",
  price: 1600,
  console: "Xbox"
},
{
  id: 4,
  name: "Crash Bandicoot - Insane Trilogy",
  img: "https://juegosdigitalesmexico.mx/files/images/productos/1553105166-crash-bandicoot-n-sane-trilogy-ps4-primaria.jpg",
  price: 800,
  console: "Play Station"
},
{
  id: 5,
  name: "Spiderman - Miles Morales",
  img: "https://m.media-amazon.com/images/I/81sB3Qert+L._AC_UL320_.jpg",
  price: 1500,
  console: "Play Station"
},
{
  id: 6,
  name: "Little Nightmares II",
  img: "https://m.media-amazon.com/images/I/713cC6Ew7yS._AC_SL1500_.jpg",
  price: 700,
  console: "Play Station"
},
{
  id: 7,
  name: "Mario Kart",
  img: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2017/02/mario-kart-8-deluxe-caratula.jpg?itok=1QuQWrDy",
  price: 1300,
  console: "Nintendo"
},
{
  id: 8,
  name: "Super Mario Odyssey",
  img: "https://cl.buscafs.com/www.levelup.com/public/uploads/images/463252_256x419.jpg",
  price: 1300,
  console: "Nintendo"
},
{
  id: 9,
  name: "Mario  Rabidds - Kingdom Battle",
  img: "https://m.media-amazon.com/images/I/8142IK7mMuL._AC_SY500_.jpg",
  price: 500,
  console: "Nintendo"
}]

export const ItemListContainer = () => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true)

  const myPromise = () => {
    return new Promise((res, rej) => {
      if (games.length > 0) {
        setTimeout(() => {
          res(games)
        }, 4000)
      } else {
        rej("error")
      }
    })
  }


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