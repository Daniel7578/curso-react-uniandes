import { useNavigate, useParams } from 'react-router-dom';
import './perfil.css';
const users = [
    {
        id : 1,
        name: 'Daniel Arango',
        username: 'daniel_arango',
        avatar: 'https://image.tmdb.org/t/p/w500/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg',
        isFollowing: false
    },
    {
        id : 2,
        name: 'Cristofer Humo',
        username: 'cristofer_humo',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3wBShqkSlAoPvONQ_9l1j7ETPuUvhtrqFQ&s',
        isFollowing: false
    },
    {
        id : 5,
        name: 'Steve Rogers',
        username: 'steve_rogers',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdm3OmMSL2nFyjpGdMvd_Sj0OQEHozK_PXyA&s',
        isFollowing: true
    },
    {
        id : 6,
        name: 'Tony Stark',
        username: 'tony_stark',
        avatar: 'https://image.tmdb.org/t/p/w500/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg',
        isFollowing: true
    },
        {
        id : 7,
        name: 'Daniel Arango',
        username: 'daniel_arango',
        avatar: 'https://image.tmdb.org/t/p/w500/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg',
        isFollowing: false
    },
    {
        id : 8,
        name: 'Cristofer Humo',
        username: 'cristofer_humo',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3wBShqkSlAoPvONQ_9l1j7ETPuUvhtrqFQ&s',
        isFollowing: false
    },
    {
        id : 9,
        name: 'Steve Rogers',
        username: 'steve_rogers',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdm3OmMSL2nFyjpGdMvd_Sj0OQEHozK_PXyA&s',
        isFollowing: true
    },
    {
        id : 10,
        name: 'Tony Stark',
        username: 'tony_stark',
        avatar: 'https://image.tmdb.org/t/p/w500/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg',
        isFollowing: true
    },

]

export function Perfil() {
    const navigate = useNavigate();
    const handleClick = () => {
        // Volver a TwitterCard
        // window.history.back(); // Esta es una forma de volver a la página anterior, pero no es recomendable porque puede causar problemas si el usuario ha navegado varias veces antes de llegar a esta página
        navigate('/twitterCard'); // Redirige a la ruta /twitterCard
    }
    // perfil/:id
    const { id } = useParams(); // Está obteniendo los parametros de la URL, en este caso el id del usuario
    const user = users.find(user => user.id === Number(id)); // Está buscando en el array de usuarios el usuario que tenga el id igual al id obtenido de los parametros de la URL, y lo está guardando en la variable user
    return (
        <div className="perfil">
            {user ? (
                <>
                    <h2>{user.name}</h2>
                    <p>Username: {user.username}</p>
                    <img src={user.avatar} alt={user.name} />
                    <p>{user.isFollowing ? 'Following' : 'Not Following'}</p>
                </>
            ) : (
                <p>User not found</p>
            )}
            <button onClick={handleClick}>Volver a TwitterCard</button>
        </div>
    );
}