import { Link } from "react-router-dom"
import "./MainMenu.css"

const MainMenu = () => {

    return (
        <nav className="main-menu">
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/ofertas">Ofertas</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
            </ul>
        </nav>
    )

}

export default MainMenu