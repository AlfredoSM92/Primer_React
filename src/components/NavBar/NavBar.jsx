import { CartWidget } from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import Logo from '../img/Logo.png'
import './NavBar.css'


function NavBar() {

    return (
        <div id="navBar">
            <Link to="/">
                <img id="Logo" src={Logo} alt="Logo" />
            </Link>
            <nav>
                <ul id='navMenu'>
                    <li><Link to="/category/Acción">Acción</Link></li>
                    <li><Link to="/category/Conducción">Conducción</Link></li>
                    <li><Link to="/category/Estrategia">Estrategia</Link></li>
                    <li><Link to="/category/Shooter">Shooter</Link></li>
                    <Link to="/cart">
                        <CartWidget />
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
