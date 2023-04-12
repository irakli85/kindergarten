import React, {useEffect} from 'react'
import poster from '../assets/homePage/painting.png'

import AOS from 'aos'
import 'aos/dist/aos.css'

function Poster() {

useEffect( () => {
  AOS.init({duration: 2000})
}, []);

  return (
    <>
      <section className='poster' data-aos='fade-up'>
        <div className='poster-container'>
            <img src={poster} alt='poster'/>
        </div>
      </section>
    </>
  )
}

export default Poster