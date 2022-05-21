import React from 'react'
import "./styles/Bio.css"

const Bio = () => {

  const [stats,setStats] = React.useState('loading')


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'tiktok28.p.rapidapi.com',
            'X-RapidAPI-Key': '8c8dd6c319msh9a9d990614405f4p1a919bjsnae08f52845fe'
        }
    };
    
        fetch('https://tiktok28.p.rapidapi.com/profile/lachowski_tutorials?schemaType=1', options)
        .then(response => response.json())
        .then(data => setStats({followers: data.stats.followerCount,hearts: data.stats.heartCount,videos: data.stats.videoCount}))
        .catch(err => console.error(err));
  

  return (
    <>
      {stats==='loading' ? 
      
      <div className='stats-container'>

        <div>
          <h2>Seguidores</h2>
          <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
        
        <div>
          <h2>Likes</h2>
          <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    
        <div>
          <h2>Videos</h2>
          <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
      
      </div>
      
      
      : 

      <div className='stats-container'>

        <div>
          <h2>Seguidores</h2>
          <p>{stats.followers}</p>
        </div>
        
        <div>
          <h2>Likes</h2>
          <p>{stats.hearts}</p>
        </div>
    
        <div>
          <h2>Videos</h2>
          <p>{stats.videos}</p>
        </div>
      
      </div>
      }
    </>
    )
}

export default Bio