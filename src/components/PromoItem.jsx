import React from 'react'

const PromoItem = ({post,name}) => {
  return (
    <li><a href={post} rel="noreferrer" target="_blank" className="promoItem">{name}</a></li>
  )
}

export default PromoItem