
import './homePage.css';
import { FormularioBasico } from '../../components';
import { Link } from 'react-router-dom';
export function HomePage() {
    return (
        <div className="homePage">
            <h1 className="homePage-title">Bienvenido a la página de inicio</h1>
            <p className="homePage-description">Esta es la página principal de nuestra aplicación.</p>
            <img className="homePage-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTokZliYkKkA5G-4WfbuaNpKj5f9PYnTUPLA&s" alt="Imagen de ejemplo" />
            <Link to="/twitterCard" className="homePage-link">Ir a TwitterCard</Link>
            <Link to="/formulario" className="homePage-link">Ir a Formulario</Link>
        </div>
    );
}