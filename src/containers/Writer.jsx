import React from 'react'
import { Link } from 'react-router-dom'

const Writer = () => {
  return (
    <div>
        <span>
            <Link to='../'>Volver</Link>
        </span>
        <div>
            <label htmlFor="titulo">Título</label>
            <br />
            <input type="text" name='titulo'/>
        </div>
        <div>
            <label htmlFor="articulo">Artículo</label>
            <br/>
            <input type="text" name='articulo'/>
        </div>
        <div>
            <label htmlFor="portada">Portada</label>
            <br/>
            <input type="file" name="portada" id="writer-portada" />
        </div>
        <input type='submit' value='POSTEAR'/>
    </div>
  )
}

export default Writer