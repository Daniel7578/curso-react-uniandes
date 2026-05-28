import './index.css';

import  { TwitterFollowCard } from './components/TwitterFollowCard';
import { FormularioBasico } from './components/FormularioBasico';
import { NavBar } from './components/NavBar';
import { Perfil } from './components/Perfil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { UserGallery } from './components/UserGallery/UserGallery';

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

export function App() {
    return (
        <section className="App">
            <nav className="navBar">
                <NavBar />
            </nav>
            <main className='mainContent'>

                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/formulario' element={<FormularioBasico />} />
                        <Route path='/twitterCard' element={
                            users.map(user => (
                                <TwitterFollowCard 
                                    key={user.id}
                                    id={user.id}
                                    name={user.name}
                                    username={user.username}
                                    avatar={user.avatar}
                                    isFollowing={user.isFollowing}
                                />
                            ))
                        } />
                        <Route path='/perfil/:id' element={<Perfil />} />
                        <Route path='/userGallery' element={<UserGallery />} />
                        <Route path='*' element={<h1>404 Not Found</h1>} />
                    </Routes>
            </main>
            {/* params: {id: 111} */}

            <footer className='footer'>
                <p>Copyright 2024</p>
            </footer>
        </section>
    )
}