import React, {useState} from 'react'
import { Link } from 'react-router-dom'


const Blog = () => {
    const [admin,setAdmin]= useState(null);
    const [pass,setPass]= useState('');
    const [user,setUser] = useState('')

    const USER = 'skippy'
    const CONT = 'findelacosa'

    function handlePassword(e)  {
        setPass(e.target.value)
    }

    function handleUser(e) {
        setUser(e.target.value)
    }

    function Validation() {
        (pass===CONT && user===USER) ? setAdmin(true) : setAdmin(false)
    }

  return (
    <>

    {
        admin===null && 

            <div className="">
                <input type="text" placeholder='Nombre de usuario' onChange={handleUser}/> <br/>
                <input type='password' placeholder='Contraseña' onChange={handlePassword}/><br/>
                <button onClick={Validation}>Iniciar sesión</button>
            </div>
    }

    <div>
    {!!admin && <Link to='writer'>Crear nueva entrada</Link>}
    {admin!==null && <h1>Hola {user}</h1>}
    
        <article>Articulo</article>
        {admin!==null && <button onClick={()=>{setAdmin(null)}}>Cerrar sesión</button>}
    </div>
    </>
  )
}

export default Blog