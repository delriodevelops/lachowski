import React from 'react'
import { Link } from 'react-router-dom'
const Blog = () => {
  return (
    <div>
        <Link to='writer'>Crear nueva entrada</Link>
        <article>Articulo</article>
    </div>
  )
}

export default Blog