import React, {useEffect} from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

function Placemap() {

useEffect( () => {
  AOS.init({duration: 2000});
}, []);

  return (
    <>
    <section className='placemap' data-aos='fade-up'>
      <iframe title='placemap' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d745.4024909353737!2d41.624042078026925!3d41.64256143180742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40678749255168ab%3A0x8751d1899fcc8bb7!2sTaati!5e0!3m2!1ska!2sge!4v1673293677452!5m2!1ska!2sge" width="100%" height="501" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </section>
    </>
  )
}

export default Placemap