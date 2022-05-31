import React from 'react'
import Spinner from './Spinner'
import pfp from './img/tok/pfp.jpeg'
import {FaTiktok,FaArrowRight} from 'react-icons/fa'
import PromoItem from './PromoItem'

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
      <a href="#tokstats-col2" className='slider-btn'>Más datos <FaArrowRight/></a>
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


      <div className="tok-views">
        <h3>121.1k</h3>
        <p>Alcance</p>  
      </div>
      <div className="tok-age glassy">
        <p>13-17</p>
        <h3>43%</h3>
        <p>18-24</p>
        <h3>43%</h3>
        <p>25-34</p>
        <h3>13%</h3>
        <p>45-54</p>
        <h3>1%</h3>
      </div>


      <div className="tok-colabs">
        <h4>Últimas colaboraciones</h4>
        <ul>
          <PromoItem post="https://vm.tiktok.com/ZMLoTRMtb/?k=1" name="Shein"/>
          <PromoItem post="https://vm.tiktok.com/ZMLo3tcK9/?k=1" name='Aliver'/>
          <li><a rel='noreferrer' href="https://vm.tiktok.com/ZMLo3HAKN/?k=1">Lilysilk</a></li>
          <li><a rel='noreferrer' href="https://vm.tiktok.com/ZMLo3w1mw/?k=1">Florasis</a></li>
          <li><a rel='noreferrer' href="ttps://vm.tiktok.com/ZMLo3tyTU/?k=1">Leafinty</a></li>
        </ul>  
            <a href="/collabs" className='colabos-btn' rel='noreferrer'>Saber más</a>
      </div>

      <a href="#tokstats-col1" className='slider-back-btn slider-btn'>Volver</a>
    </section>
    </section>
  )
}

export default TiktokStats