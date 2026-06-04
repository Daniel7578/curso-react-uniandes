import { useState, useEffect } from 'react';


export function useGetData(url) {
    // Control de estado de usuarios -> Se actuialice este valor quiere decir que fue exitoso la solicitud 
    const [data, setData] = useState([]);

    // Control de estado de carga -> Se actualice este valor a false quiere decir que la solicitud se encuentra en proceso
    const [isLoading, setIsLoading] = useState(false);

    // Control de estado de error -> Se actualice este valor a true quiere decir que la solicitud tuvo un error
    const [isError, setIsError] = useState(null);
    useEffect( ()=> {
        console.log('Iniciando llamada a la Api .....')
        const obtenerDatos = async ()=>{
            try{
                setIsLoading(true);
                await new Promise(resolve => setTimeout(resolve, 3000)); // Simulación de retraso de 3 segundos
                const respuesta = await fetch(url); // Por acá se recibe la url de parametro y se utiliza para hacer la solicitud a la API
                console.log('Respuesta recibida: ' + (respuesta.ok ? 'OK' : 'Error'));
                if (!respuesta.ok) {
                    throw new Error(`Error en la solicitud: ${respuesta.status} ${respuesta.statusText}`);
                }
                const data = await respuesta.json();
                setData(data)
                setIsLoading(false);
                console.log('Datos actualizados...')
            }
            catch(error){
                console.log(error.message);
                setIsError(error.message);
                setIsLoading(false);
            }

        }
        obtenerDatos();
    }, [url])
    return {data, isLoading, isError};
}