import React from 'react'
import poster from '../assets/homePage/painting.png'

function Poster() {
  return (
    <>
      <section className='poster'>
        <div className='poster-container'>
            <img src={poster} alt='poster'/>
        </div>
      </section>
    </>
  )
}

export default Poster