import React, {useEffect} from 'react'
import hat from '../assets/homePage/hat.png'
import paper from '../assets/homePage/paper.png'
import dice from '../assets/homePage/dice.png'
import mic from '../assets/homePage/mic.png'
import heart from '../assets/homePage/heart.png'
import people from '../assets/homePage/people.png'

import AOS from 'aos'
import 'aos/dist/aos.css'


const Advantages = () => {    
    
        useEffect( () => {
        AOS.init({duration: 2000});
      }, []);
      
  return (
    <>
      <section className="advantages" >
        <h3 data-aos="fade-up">უპირატესობები</h3>
        <p className='advantages-info' data-aos="fade-up">ჩვენი საავტორო პროგრამა შედგენილია ქართულ და რუსულ ენებზე და შედგება გასართობი ღონიძიებებისგან</p>
        <div className='advantages-cards' data-aos="fade-up">
              <div className='advantages-card-items'>
                  <div className='advantages-card-items-img advantages-yellowBG'>
                      <img src={hat} alt="hat"/>
                  </div>
                  <p>მასტერ-კლასები</p>
              </div>

              <div className='advantages-card-items'>
                  <div className='advantages-card-items-img advantages-pinkBG'>
                      <img src={dice} alt="dice"/>
                  </div>
                  <p>თამაში-ამოცანები</p>
              </div>

              <div className='advantages-card-items'>
                  <div className='advantages-card-items-img advantages-blueBG'>
                      <img src={paper} alt="paper"/>
                  </div>
                  <p>გამოცდილება და ექსპერიმენტები</p>
              </div>

              <div className='advantages-card-items'>
                  <div className='advantages-card-items-img advantages-blueBG'>
                      <img src={heart} alt="heart"/>
                  </div>
                  <p>კონფერენციები და პროექტები</p>
              </div>

              <div className='advantages-card-items'>
                  <div className='advantages-card-items-img advantages-yellowBG'>
                      <img src={mic} alt="mic"/>
                  </div>
                  <p>კონცერტები და სპექტაკლები</p>
              </div>

            

              <div className='advantages-card-items'>
                  <div className='advantages-card-items-img advantages-pinkBG'>
                      <img src={people} alt="people"/>
                  </div>
                  <p>შეჯიბრებები</p>
              </div>
        </div>
          
      </section>
    </>
  )
}

export default Advantages