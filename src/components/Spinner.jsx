import React from 'react'

const Spinner = ({alt}) => {
  return (
    <>
      {!alt  ? <div className="lds-ring"><div></div><div></div><div></div><div></div></div> : <h2>{alt}</h2>}
    </>
  )
}

export default Spinner