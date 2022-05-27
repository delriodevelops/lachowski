import React from 'react'
import Spinner from '../Spinner'
import './style.css'
import pfp from '../img/Insta/pfp.PNG'

import { FaInstagram } from "react-icons/fa";


const InstaStats = () => {
    const [instaStats,setInstaStats] = React.useState('loading')

    React.useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'instagram-scraper-2022.p.rapidapi.com',
                'X-RapidAPI-Key': '8c8dd6c319msh9a9d990614405f4p1a919bjsnae08f52845fe'
            }
        };
        
        fetch('https://instagram-scraper-2022.p.rapidapi.com/ig/info/?id_user=368998213', options)
            .then(response => response.json())
            .then(response => setInstaStats({followers:response.user.follower_count}))
            .then(response=>console.log(response))
            .catch(err => console.error(err));
      },[])
  return (
    <>
        <section className="MediaKit" id='instaMediaKit'>
            <section className="mediakit-insta-col1 side-section" id='insta-princ'>
                <img className='mediakit-insta-pfp' src={pfp} width="300px" alt="Lachowski" title='Lachowski' />
                <a id='insta-link' rel="noreferrer" href="https://www.instagram.com/lachowski_tutorials/" target='_blank'><FaInstagram/><h3>lachowski_tutorials</h3></a>

                {instaStats==='loading' ? 

                    <div className='mediakit-insta-seguidores'>

                      <div>
                        <Spinner alt='102.6K'/>
                        <p>Seguidores</p>
                      </div>

                    </div>


                    : 

                    <div className='mediakit-insta-seguidores'>

                      <div>
                        <h2>{instaStats.followers}</h2>
                        <p>Seguidores</p>
                      </div>

                    </div>
                }

                <div>
                    <h2>7.47%</h2>
                    <p>Engagement</p>
                </div>

                <a href="#insta-sec" className='insta-slider-btn'>Más datos</a>

            </section>

            <section className="mediakit-insta-col2 side-section" id='insta-sec'>
                <h3 id="mediakit-insta-audiencia">Audiencia Instagram</h3>

                <div className="mediakit-insta-genero">
                    <h2>99%</h2>
                    <p>Mujeres</p>
                </div>
                
                <div>
                    <h2>120,9k</h2>
                    <p>Alcance</p>
                </div>

                <div className="mediakit-insta-edad glassy">
                    <p>18-24</p>
                    <h4>65,2%</h4>
                    <p>25-34</p>
                    <h4>18%</h4>
                    <p>14-17</p>
                    <h4>13,7%</h4>
                    <p>35-44</p>
                    <h4>1,9%</h4>
                </div>

                <div className="mediakit-insta-geo glassy">
                    <p>México</p>
                    <h4>29,2%</h4>
                    <p>Argentina</p>
                    <h4>14,2%</h4>
                    <p>Colombia</p>
                    <h4>12,2%</h4>
                    <p>Chile</p>
                    <h4>11,7%</h4>
                </div>

                <div className="mediakit-insta-collabs">
                    <h4>Últimas colaboraciones</h4>
                    <ul>
                        <li>Shein</li>
                        <li>Aliexpress</li>
                        <li>Krash Cosmetics</li>
                        <li>Wine Gloss</li>
                        <li>Arenal Sound</li>
                    </ul>
                    <a href="/collabs" id="insta-colabos-btn">Saber más</a>
                </div>

                <a href="#insta-princ" id='insta-slider-back' className='insta-slider-btn'>Volver</a>
            </section>
        </section>
    </>
  )
}

export default InstaStats