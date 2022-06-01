import React from 'react'
import './styles/AboutMe.css'

const AboutMe = () => {
  return (
    <section id="AboutMe">
        <h1>SOBRE MÍ</h1>
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolores a ducimus vitae doloribus accusamus! Dolores atque vero asperiores culpa nihil modi, dignissimos, dicta delectus quos soluta minus nulla incidunt.</p>
            <br/>
            <br/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni nihil aliquam praesentium corrupti expedita iure repudiandae. Excepturi autem, earum ea obcaecati ipsa nobis dolores, quibusdam perferendis commodi hic, nisi ad.</p>
        </div>
        <div className='aboutme-ul-cont'>
                <h3>De locos:</h3>
            <ul>
                <li>que</li>
                <li>que</li>
                <li>que</li>
                <li>que</li>
                <li>que</li>
                <li>que</li>
            </ul>
        </div>
    </section>
  )
}

export default AboutMe