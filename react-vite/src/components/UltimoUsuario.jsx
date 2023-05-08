import {useState,useEffect} from 'react';

function UltimoUsuario(){
    const [users, setUsers] = useState([]);

    const obtenerDatos = async () => {
        const data = await  fetch('/api/users')
        const users = await data.json()
        // http://localhost:3010
        
        
        
        setUsers(users.data);
    }

    useEffect(() => {
        obtenerDatos()
    }, [])

    return(
        <div className='contenedor'>
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo Usuario</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                    {
                       users.length > 0 ? 

                        <div className="card" >
                        <img className="card-img-top" src={users[users.length -1].image} alt="imagen de usuario" /> 
                        <div className="card-body">
                            <p className="card-text">{users[users.length -1].first_name}</p>
                        </div>
                        </div>
                       : "Cargando..."
                    }



                    </div>
                    <p></p>
                    
                </div>
            </div>
        </div>
        </div>
    )
}

export default UltimoUsuario;
