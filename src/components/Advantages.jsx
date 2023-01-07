import React from 'react'
import hat from '../assets/homePage/hat.png'
import paper from '../assets/homePage/paper.png'
import dice from '../assets/homePage/dice.png'
import mic from '../assets/homePage/mic.png'
import heart from '../assets/homePage/heart.png'
import people from '../assets/homePage/people.png'


function Advantages() {
  return (
    <>
      <section className="advantages">
        <h3>Преимущества</h3>
        <p className='advantages-info'>Наша авторская программа ведётся на русском и английском языках и состоит из увлекательных мероприятий</p>
        <div className='advantages-cards'>
              <div className='advantages-card-items'>
                  <div className='advantages-card-items-img advantages-yellowBG'>
                      <img src={hat} alt="hat"/>
                  </div>
                  <p>Мастер-классы</p>
              </div>

              <div className='advantages-card-items'>
                  <div className='advantages-card-items-img advantages-pinkBG'>
                      <img src={dice} alt="dice"/>
                  </div>
                  <p>Игры-квесты</p>
              </div>

              <div className='advantages-card-items'>
                  <div className='advantages-card-items-img advantages-blueBG'>
                      <img src={paper} alt="paper"/>
                  </div>
                  <p>Опыты и эксперименты</p>
              </div>

              <div className='advantages-card-items'>
                  <div className='advantages-card-items-img advantages-blueBG'>
                      <img src={heart} alt="heart"/>
                  </div>
                  <p>Конференции и проекты</p>
              </div>

              <div className='advantages-card-items'>
                  <div className='advantages-card-items-img advantages-yellowBG'>
                      <img src={mic} alt="mic"/>
                  </div>
                  <p>Концерты и спектакли</p>
              </div>

            

              <div className='advantages-card-items'>
                  <div className='advantages-card-items-img advantages-pinkBG'>
                      <img src={people} alt="people"/>
                  </div>
                  <p>Соревнования</p>
              </div>
        </div>
          
      </section>
    </>
  )
}

export default Advantages