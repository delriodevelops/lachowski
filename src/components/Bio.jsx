import React from 'react'
import "./styles/Bio.css"
import InstaStats from './InstaStats/Index'
import TiktokStats from './TiktokStats'
import AboutMe from './AboutMe'

const Bio = () => {




  return (
    <div id='bio'>
      <AboutMe/>
      <InstaStats/>
      <TiktokStats/>
    </div>
    )
}

export default Bio