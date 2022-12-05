import Logo from '../img/Logo.png'
import './NavBar.css'
import { CartWidget } from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'


function NavBar() {

    return (
        <div id="navBar">
            <Link to="/">
            <img id="Logo" src={Logo} alt="Logo" />
            </Link>
            <nav>
                <ul id='navMenu'>
                    <li className="menuItem">Categorías
                        <ul className='submenu'>
                            <li><Link to="/category/Acción">Acción</Link></li>
                            <li><Link to="/category/Conducción">Conducción</Link></li>
                            <li><Link to="/category/Estrategia">Estrategia</Link></li>
                            <li><Link to="/category/Shooter">Shooter</Link></li>
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
                        <CartWidget />
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
