
import { useState } from 'react';
import { TwitterFollowCard } from '../TwitterFollowCard';
import './formulario.css';

// Lo primero es que diga export al inicio de la definición de la función, para que pueda ser usada en otros archivos
// En el index del componente es necesario exportar la función, para que pueda ser importada en otros archivos
const imprimir = () => {
    console.log('Hola mundo');
};

export function FormularioBasico() {
    const [form, setForm] = useState({
        'nombre': '',
        'email': '',
        'password': '',
        'confirmPassword': ''
    });

    // Objeto que vamos a cambiar -> form - Check
    // Propiedad que vamos a actualizar -> Nombre, email, password, confirmPassword - check
    // Nuevo valor que le vamos a asignar a esa propiedad -> El valor que el usuario ingresa en el input
    const [error, setError] = useState(null);
    // Está definiendo una función la cual puede ser usada despues
    const handleSubmit = (event) => {
        event.preventDefault(); // Esta linea de acá
        console.log('El formulario ha sido enviado');
    };

    const handleChange = (event) => {
        // nombreInput = 'nombre'
        // form[nombreInput] = traigame el valor de la propiedad nombre
        const { name: nombreInput, value } = event.target;
        
        setForm(prev => ({
            ...prev,
            [nombreInput] : value
        }))
        console.log('Cambio la propiedad ' + nombreInput)
        console.log('Ahora tiene el valor de ' + value)
        console.log('Así luce el objeto ' + JSON.stringify(form))
    };
    // Defininedo que va a retornar la función
    return (
        // Tenemos nuestro formulario
        <form onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre: </label>
            {/* Input numero 1 */}
            <input 
            type="text"
            id="nombre" 
            name="nombre"
            value={form.nombre}
            onChange={handleChange}/>
            
            {/* Input numero 2 */}
            <label htmlFor="email">Email: </label>
            <input 
            type="email"
            id="email" 
            name="email"
            value={form.email}
            onChange={handleChange}
            onBlur={() => {
                if (!form.email.includes('@')) {
                    setError('El email no es válido');
                } else {
                    setError(null);
                }
            }}
            />

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {/* Input numero 3 */}
            <label htmlFor="password">Contraseña: </label>
            <input 
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange} />

            {/* Input numero 4 */}
            <label htmlFor="confirmPassword">Confirmar contraseña: </label>
            <input 
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange} />

            {/* Boton de enviar el formulario */}
            <button type="submit">Enviar</button>
        </form>
    )
}