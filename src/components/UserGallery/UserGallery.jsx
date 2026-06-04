import { useGetData } from "../../hooks";

const API_URL = 'https://jsonplaceholder.typicode.com/users';


export function UserGallery() {
    const { data: users, isLoading, isError } = useGetData(API_URL);
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