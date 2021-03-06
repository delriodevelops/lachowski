import React from 'react'
import Spinner from '../Spinner'
import './style.css'
import pfp from '../img/Insta/pfp.jpg'
import PromoItem from '../PromoItem'

import { FaInstagram ,FaArrowRight} from "react-icons/fa";


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
            .catch(err => console.clear());
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
                        <Spinner alt='103k'/>
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

                <a href="#insta-sec" className='slider-btn'>M??s datos <FaArrowRight/></a>

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
                    <p>M??xico</p>
                    <h4>29,2%</h4>
                    <p>Argentina</p>
                    <h4>14,2%</h4>
                    <p>Colombia</p>
                    <h4>12,2%</h4>
                    <p>Chile</p>
                    <h4>11,7%</h4>
                </div>

                <div className="mediakit-insta-collabs">
                    <h4>??ltimas colaboraciones</h4>
                    <ul>
                        <PromoItem post="https://www.instagram.com/p/CcoMDdHoM2o/?utm_source=ig_web_copy_link" name="Shein"/>
                        <li>Aliexpress</li>
                        <li>Krash Cosmetics</li>
                        <li>Wine Gloss</li>
                        <li>Arenal Sound</li>
                    </ul>
                    <a href="/collabs" className="colabos-btn">Saber m??s</a>
                </div>

                <a href="#insta-princ" id='insta-slider-back' className='slider-back-btn'>Volver</a>
            </section>
        </section>
    </>
  )
}

export default InstaStats