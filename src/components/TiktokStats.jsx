import React from 'react'
import Spinner from './Spinner'
import pfp from './img/tok/pfp.jpeg'
import {FaTiktok} from 'react-icons/fa'

import './styles/tiktokstats.css'

const TiktokStats = () => {
  const [tiktokStats,setTiktokStats] = React.useState('loading')
  
  React.useEffect(()=>{
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'tiktok-best-experience.p.rapidapi.com',
          'X-RapidAPI-Key': '8c8dd6c319msh9a9d990614405f4p1a919bjsnae08f52845fe'
        }
      };
    fetch('https://tiktok-best-experience.p.rapidapi.com/user/lachowski_tutorials', options)
    .then(response => response.json())
    .then(response => setTiktokStats({followers:response.data.follower_count,hearts:response.data.total_favorited,videos:response.data.aweme_count}))
    .catch(err => console.error(err));
  },[])

  return (
    <section className="MediaKit" id='tiktokMediaKit'>
      <section className='tiktokStats-container' id='tokstats-col1'>
      <img src={pfp} alt="Foto de perfil" title='Lachowski' id='tiktok-media-pfp'/>
      <a href='https://www.tiktok.com/@lachowski_tutorials' id='tok-link' target='_blank' rel='noreferrer'><FaTiktok/><h3>lachowski_tutorials</h3></a>
    {tiktokStats==='loading' ? 
      
      
        <>
        <div>
          <Spinner alt="811.8k"/>
          <p>Seguidores</p>
        </div>
        
        <div>
          <Spinner alt='13.85%'/>
          <p>Engagement</p>
        </div>
        </>
      
      
      
      
      : 

      <>

        <div>
          <h2>{tiktokStats.followers}</h2>
          <p>Seguidores</p>
        </div>
        
        <div>
          <h2>{tiktokStats.hearts}</h2>
          <p>Likes</p>
        </div>
    
        <div>
          <h2>{tiktokStats.videos}</h2>
          <p>Videos</p>
        </div>
      
        </>
      }
      <a href="#tokstats-col2" className='insta-slider-btn'>Más datos</a>
    </section>

    <section className='tiktokStats-container' id='tokstats-col2'>
      <h2>Audiencia de TikTok</h2>
      <div className='tok-gender'>
        <h3>98%</h3>
        <p>Mujeres</p>
      </div>

      <div className='tok-geo glassy'>
        <p>México</p>
        <h3>34%</h3>
        <p>Colombia</p>
        <h3>13%</h3>
        <p>Argentina</p>
        <h3>8%</h3>
        <p>Chile</p>
        <h3>7%</h3>
      </div>
    </section>
    </section>
  )
}

export default TiktokStats