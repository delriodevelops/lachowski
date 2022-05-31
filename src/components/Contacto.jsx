import React from 'react'

const Contacto = () => {

  return (
    <section className='contact' id='contact'>
        <form action="https://formsubmit.co/1d3206c5a6678acb7be1b24b138319cf" method="POST" >
            <h1>Contactame</h1>
            <label htmlFor="name">Nombre</label>
            <br/>
            <input type="text" id='contact-name' name='name' placeholder='Christian del Rio Rodriguez' required minLength="2"/>
            <br/>
            <br/>
            <label htmlFor="email">E-mail</label>
            <br/>
            <input type="email" className='contact-mail' name='email' minLength='6' placeholder='ejemplo@correo.com'/>
            <br/>
            <br/>
            <label htmlFor="msg">Mensaje</label>
            <br/>
            <input type="text" id='contact-msg' placeholder='Saludos' name="msg" required minLength="16"/>
            <br/>
            <br/>
            <input type="hidden" name="_captcha" value="false"></input>
            <input type="submit" value="Enviar" id='contact-send'/>
            <input type="hidden" name="_next" value="https://www.itslachowski.com/sent"></input>
        </form>
    </section>
  )
}

export default Contacto