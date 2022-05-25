import React from 'react'
import Spinner from '../Spinner'

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
    {tiktokStats==='loading' ? 
      
      <section className='tiktokStats-container'>

        <div>
          <Spinner/>
          <p>Seguidores</p>
        </div>
        
        <div>
          <Spinner/>
          <p>Likes</p>
        </div>
    
        <div>
          <Spinner/>
          <p>Videos</p>
        </div>
      
      </section>
      
      
      : 

      <section className='tiktokStats-container'>

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
      
      </section>
      }
    </section>
  )
}

export default TiktokStats