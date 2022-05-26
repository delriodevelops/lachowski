import React from 'react'
import Spinner from '../Spinner'
import './style.css'
import pfp from '../img/Insta/pfp.PNG'


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
        <section className="instaMediaKit scrolleable" id='instaMediaKit'>
            <section className="mediakit-insta-col1 side-section" id='insta-princ'>
                <img className='mediakit-insta-pfp' src={pfp} width="300px" alt="Lachowski" title='Lachowski' />
                <h3>@lachowski_tutorials</h3>

                {instaStats==='loading' ? 

                    <div className='mediakit-insta-seguidores'>

                      <div>
                        <Spinner/>
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
                    <h2>13%</h2>
                    <p>Tasa media de engagment</p>
                </div>

                <a href="#insta-sec">Mas datos</a>

            </section>

            <section className="mediakit-insta-col2 side-section" id='insta-sec'>
                <h3>Audiencia Instagram</h3>

                <div className="mediakit-insta-genero">
                    <h3>94%</h3>
                    <p>mujeres</p>
                </div>

                <div className="mediakit-insta-edad">
                    <h3>18-25</h3>
                    <p>años</p>
                </div>

                <div className="mediakit-insta-geo">
                    <h3>35%</h3>
                    <p>México</p>
                    <h3>20%</h3>
                    <p>Colombia</p>
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
                    <a href="/collabs">Anteriores colaboraciones</a>
                </div>

                <a href="#insta-princ">Volver</a>
            </section>
        </section>
    </>
  )
}

export default InstaStats