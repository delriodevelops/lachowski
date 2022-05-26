import React from 'react'
import "./styles/Bio.css"
import InstaStats from './InstaStats/Index'
import TiktokStats from './TikTokStats/TiktokStats'

const Bio = () => {




  return (
    <div className='bio'>
      <TiktokStats/>
      <InstaStats/>
    </div>
    )
}

export default Bio