import Logo from '../img/Logo.png'
import './NavBar.css'
import { CartWidget } from '../CartWidget/CartWidget'

function NavBar() {

    return (
        <div id="navBar">
            <img id="Logo" src={Logo} alt="Logo" />
            <nav>
                <ul id='navMenu'>
                    <li className="menuItem">Categorías
                        <ul className='submenu'>
                            <li><a href="#">Acción</a></li>
                            <li><a href="#">Conducción</a></li>
                            <li><a href="#">Estrategia</a></li>
                            <li><a href="#">Plataformas</a></li>
                            <li><a href="#">Shooter</a></li>
                        </ul>
                    </li>
                    <li className="menuItem">Consolas
                        <ul className='submenu'>
                            <li><a href="#">Xbox</a></li>
                            <li><a href="#">Play Station</a></li>
                            <li><a href="#">Nintendo</a></li>
                        </ul>
                    </li>
                    <li className="menuItem">Accesorios
                        <ul className='submenu'>
                            <li><a href="#">Controles</a></li>
                            <li><a href="#">Cables</a></li>
                            <li><a href="#">Bases</a></li>
                            <li><a href="#">Mochilas</a></li>
                        </ul>
                    </li>
                    <li className="menuItem">Contácto</li>
                    <CartWidget/>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
