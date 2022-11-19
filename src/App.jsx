import './App.css'
import {ListItemContainer} from './components/ListItemContainer/ListItemContainer'
import NavBar from './components/NavBar/NavBar'


function App() {
  
  return(
    <>
      <NavBar/>
      <ListItemContainer greeting={"Hola Alfredo"}/>
    </>
  )

}

export default App
