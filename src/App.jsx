import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { ItemListContainer } from './Containers/ItemListContainer/ItemListContainer'


function App() {
  
  return (
    <>
      <NavBar />
      <ItemListContainer/>

    </>

  )

}

export default App
