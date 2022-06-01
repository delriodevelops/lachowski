import React from 'react'

const LiCon = ({children,goto}) => {
  return (
            <li className='rrss-icon'>
                <a href={goto} rel="noreferrer" target='_blank'>
                    {children}
                </a>
            </li>
  )
}

export default LiCon