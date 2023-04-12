import React, {useEffect} from 'react'
import user from '../assets/homePage/user.png'


import AOS from 'aos'
import 'aos/dist/aos.css'

function Feedback() {

useEffect( () => {
  AOS.init({duration: 2000})
}, []);

  return (
    <>
      <section className="feedback">
        <h3 data-aos='fade-up'>გამოხმაურება</h3>
        <div className='feedback-container' data-aos='fade-up'>
          <div className='feedback-arrow feedback-leftarrow'>
              
          </div>
          <div className='feedback-info'>
              <div className='feedback-info-items'>
                <div className='feedback-info-items-mainbox'>
                      <div className='feedback-user'>
                          <div>
                              <img src={user} alt="user"/>
                          </div>
                          <div className='feedback-user-info'>
                            <span className='user-info-name'>დიმიტრი</span>
                            <span className='user-info-city'>ბათუმი</span>
                          </div>
                      </div>
                      <p>დაგვყავს 2 ბავშვი, განათლების, კვების და ყურადღების ხარისხით ძალიან კმაყოფილი ვართ. ბავშვებმა ისწავლეს ინგლისური( გამოთქმა, გრამატიკა და ა.შ.)
                      </p>
                  </div>
                  <p className='feedback-read'>ნახვა</p>
              </div>

              <div className='feedback-info-items feedback-item2'>
                  <div className='feedback-info-items-mainbox'>
                      <div className='feedback-user'>
                          <div>
                              <img src={user} alt="user"/>
                          </div>
                          <div className='feedback-user-info'>
                            <span className='user-info-name'>ქეთი</span>
                            <span className='user-info-city'>ბათუმი</span>
                          </div>
                      </div>
                      <p>დაგვყავს 2 ბავშვი, განათლების, კვების და ყურადღების ხარისხით ძალიან კმაყოფილი ვართ. ბავშვებმა ისწავლეს ინგლისური( გამოთქმა, გრანატიკა და ა.შ.)
                      </p>
                  </div>
                  <p className='feedback-read'>ნახვა</p>
              </div>
          </div>
          <div className='feedback-arrow feedback-rightarrow'>
              
          </div>
        </div>        
      </section>
    </>
  )
}

export default Feedback