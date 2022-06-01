import React from 'react'
import './styles/Contacto.css'

const Contacto = () => {

  return (
    <section className='contact' id='contact'>
        <form action="https://formsubmit.co/1d3206c5a6678acb7be1b24b138319cf" method="POST" className='glassy'>
            <h1>Contáctame</h1>
            <div className="form-field form-name">
              <label htmlFor="name">Nombre</label>
              <br/>
              <input type="text" id='contact-name' name='name' placeholder='Nombre de ejemplo' required minLength="2"/>
            </div>
            <div className="form-mail form-field">
              <label htmlFor="email">E-mail</label>
              <br/>
              <input type="email" className='contact-mail' name='email' minLength='6' placeholder='ejemplo@correo.com'/>            
            </div>
            <div className="form-msg form-field">
              <label htmlFor="msg">Mensaje</label>
              <br/>
              <input type="text" id='contact-msg' placeholder='Saludos' name="msg" required minLength="16"/>
            </div>
            <input type="submit" value="Enviar" id='contact-send' />
            <input type="hidden" name="_captcha" value="false"></input>
            <input type="hidden" name="_next" value="https://www.itslachowski.com/sent"></input>
        </form>
    </section>
  )
}

export default Contacto