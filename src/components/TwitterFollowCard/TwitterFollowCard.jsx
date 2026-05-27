// Este primer import es de un archivo local, por lo que es necesario especificar la ruta completa, ya que no se encuentra en node_modules
import './TwitterFollowCard.css';
// Este segundo import es de una libreria de terceros, por lo que no es necesario especificar la ruta completa, ya que se encuentra en node_modules
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function TwitterFollowCard(props) {
    const [isFollowing, setIsFollowing] = useState(props.isFollowing); // El estado se inicializa con el valor de props.isFollowing
    // Defní una variable que va a mostrar el texto del botón dependiendo del estado de isFollowing
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';
    const handleClick = () => {
        setIsFollowing(prevState => !prevState); // Cambia el estado de isFollowing al valor contrario
        // Subir ese valor a la base de datos 
        // Lo haríamos mediante un llamado a una API, pero como no tenemos backend, lo vamos a simular con un console.log
        console.log(`El usuario ${props.username} ahora está ${!isFollowing ? 'siguiendo' : 'no siguiendo'}`);
    };
    return(
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img src={props.avatar} alt={props.name} className="tw-followCard-avatar" />
                <div className="tw-followCard-info">
                    <strong>{props.name}</strong>
                    <span className="tw-followCard-infoUserName">@{props.username}</span>
                    <Link to={`/perfil/${props.id}`}>Ver perfil</Link>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}