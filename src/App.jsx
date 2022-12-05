import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './Containers/ItemDetailContainer/ItemDetailContainer'
import { ItemListContainer } from './Containers/ItemListContainer/ItemListContainer'



function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/detail/:id" element={<ItemDetailContainer/>} />
        <Route path="/category/:id" element={<ItemListContainer/>} />
        <Route path='*' element= {<Navigate to="/"/>} />
      </Routes>
    </BrowserRouter>
  )

}

export default App
