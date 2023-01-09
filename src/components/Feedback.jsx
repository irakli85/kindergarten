import React from 'react'
import arrow from '../assets/homePage/arrow1.png'
import user from '../assets/homePage/user.png'

function Feedback() {
  return (
    <>
      <section className="feedback">
        <h3>Отзывы о саде</h3>
        <div className='feedback-container'>
          <div className='feedback-arrow'>
              <img src={arrow} alt="arrow"/>
          </div>
          <div className='feedback-info'>
              <div className='feedback-info-items'>
                <div className='feedback-info-items-mainbox'>
                      <div className='feedback-user'>
                          <div>
                              <img src={user} alt="user"/>
                          </div>
                          <div className='feedback-user-info'>
                            <span className='user-info-name'>Дмитрий</span>
                            <span className='user-info-city'>Москва</span>
                          </div>
                      </div>
                      <p>Водим двоих детей, очень довольны уровнем и качеством образования, если нужен просто детский сад, то вам не сюда. Дети знают английский (произношение, грамматика и пр.)
                      </p>
                  </div>
                  <p className='feedback-read'>Прочитать отзыв</p>
              </div>

              <div className='feedback-info-items'>
                  <div className='feedback-info-items-mainbox'>
                      <div className='feedback-user'>
                          <div>
                              <img src={user} alt="user"/>
                          </div>
                          <div className='feedback-user-info'>
                            <span className='user-info-name'>Дмитрий</span>
                            <span className='user-info-city'>Москва</span>
                          </div>
                      </div>
                      <p>Водим двоих детей, очень довольны уровнем и качеством образования, если нужен просто детский сад, то вам не сюда. Дети знают английский (произношение, грамматика и пр.)
                      </p>
                  </div>
                  <p className='feedback-read'>Прочитать отзыв</p>
              </div>
          </div>
          <div className='feedback-arrow'>
              <img src={arrow} alt="arrow"/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Feedback