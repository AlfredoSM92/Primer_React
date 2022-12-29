import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import CartContainer from './Containers/CartContainer/CartContainer'
import ItemDetailContainer from './Containers/ItemDetailContainer/ItemDetailContainer'
import { ItemListContainer } from './Containers/ItemListContainer/ItemListContainer'
import { CartContextProvider } from './Context/CartContext'



function App() {

  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  )

}

export default App
