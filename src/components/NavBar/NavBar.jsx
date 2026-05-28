import { NavLink} from "react-router-dom";
import './NavBar.css';



export function NavBar() {
    return (
        <nav className="navBar">
            <NavLink to="/"><h1 className="navBar-title">Mi aplicación</h1></NavLink>
            <ul className="navBar-links">
                <NavLink to="/twitterCard" className={({ isActive }) =>
isActive ? "nav-active" : "nav-inactive"
}><li className="navBar-link">TwitterCard</li></NavLink>
                <NavLink to="/formulario" className={({ isActive }) =>
isActive ? "nav-active" : "nav-inactive"
}><li className="navBar-link">Formulario</li></NavLink>
                <NavLink to="/userGallery" className={({ isActive }) =>
isActive ? "nav-active" : "nav-inactive"
}><li className="navBar-link">User Gallery</li></NavLink>
            </ul>
        </nav>
    );
}