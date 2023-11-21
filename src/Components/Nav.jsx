import "./ComponentesCss/Nav.css"
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <header>
        <nav>
            <div className="ContD">
                <ul className="ContD3">
                    <li>
                        <Link to="/ModaAccesorios">MODA Y ACCESORIOS</Link>
                    </li>
                    <li>
                        <Link to="/PerfumeBelleza">PERFUME Y BELLEZA</Link>
                    </li>
                </ul>
            </div>
            <div className="ContI">
                <Link to="/"><h1 className="Titulo">DIOR</h1></Link>
            </div>
        </nav>

    </header>
    )
}

export default Nav;
