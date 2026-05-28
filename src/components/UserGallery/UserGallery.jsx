import { useState, useEffect } from "react";


export function UserGallery() {
    // Control de estado de usuarios -> Se actuialice este valor quiere decir que fue exitoso la solicitud 
    const [users, setUsers] = useState([]);

    // Control de estado de carga -> Se actualice este valor a false quiere decir que la solicitud se encuentra en proceso
    const [isLoading, setIsLoading] = useState(false);

    // Control de estado de error -> Se actualice este valor a true quiere decir que la solicitud tuvo un error
    const [isError, setIsError] = useState(null);
    useEffect( ()=> {
        console.log('Iniciando llamada a la Api .....')
        const obtenerUsarios = async ()=>{
            try{
                setIsLoading(true);
                await new Promise(resolve => setTimeout(resolve, 4000)); // Simulación de retraso de 4 segundos
                const respuesta = await fetch('https://jsonplaceholder.typicode.com/users'); // A proposito cambios esto 
                console.log('Respuesta recibida: ' + (respuesta.ok ? 'OK' : 'Error'));
                if (!respuesta.ok) {
                    throw new Error(`Error en la solicitud: ${respuesta.status} ${respuesta.statusText}`);
                }
                const data = await respuesta.json();
                setUsers(data)
                setIsLoading(false);
                console.log('Usuarios actualizados...')
            }
            catch(error){
                console.log(error.message);
                setIsError(error.message);
                setIsLoading(false);
            }

        }
        obtenerUsarios();
    }, [])
    if (isLoading) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Galería de Usuarios</h1>
        <div style={{ marginTop: '40px', fontSize: '18px' }}>
          ⏳ Cargando usuarios...
        </div>
      </div>
    );
    }
    if (isError !== null) {
        console.log('Error detectado: ' + isError);
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Galería de Usuarios</h1>
        <div style={{ 
          marginTop: '40px', 
          padding: '20px', 
          backgroundColor: '#fee',
          borderRadius: '8px',
          color: '#c00'
        }}>
          <h2>❌ Error</h2>
          <p>{isError}</p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              marginTop: '10px',
              padding: '10px 20px',
              backgroundColor: '#c00',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Reintentar
          </button>
        </div>
      </div>
    );
  }
    return (
    <div style={{ padding: '20px' }}>
      <h1>Galería de Usuarios</h1>
      <p>Total: {users.length} usuarios</p>
      <div style={{ display: 'grid', gap: '10px', marginTop: '20px' }}>
        {users.map(user => (
          <div key={user.id} style={{ 
            border: '1px solid #ddd', 
            padding: '15px', 
            borderRadius: '8px',
            backgroundColor: '#f9f9f9'
          }}>
            <h3 style={{color: "black"}}>{user.name}</h3>
            <p style={{ color: '#666' }}>{user.email}</p>
            <p style={{ fontSize: '14px', color: '#999' }}>
              Ciudad: {user.address.city}
            </p>
          </div>
        ))}
      </div>
    </div>
    )

}