import React, {useEffect} from 'react'
import avatar from '../assets/homePage/avatar.png'
import avatar1 from '../assets/homePage/avatar1.png'
import x from '../assets/homePage/x.png'
import avatar2 from '../assets/homePage/avatar2.png'
import bluefacebook from '../assets/homePage/blueFacebook.svg'
import blueinsta from '../assets/homePage/blueInsta.svg'
import bluewhatsapp from '../assets/homePage/blueWhatsapp.svg'


import AOS from 'aos'
import 'aos/dist/aos.css'

function Staff() {

  useEffect( () => {
    AOS.init({duration: 2000})
  }, []);

  return (
    <>
      <section className="staff" data-aos='fade-up'>
        <h3>ჩვენი გუნდი</h3>
        <div className='staff-box'>
            <div className='staff-arrow staff-leftarrow'>
               
            </div>
            <div className='staff-gallery'>
                <div className='staff-gallery-items'>
                    <img src={avatar} alt="avatar"/>
                    <span className='staff-line1'>შანიძე</span>
                    <span className='staff-line2'>მზექალა</span>
                    <span className='staff-line3'>პედაგოგი - ბავშვთა ფსიქოლოგი</span>
                    <span className='staff-line4'>სტაჟი 11 წელი</span>
                </div>
                <div className='staff-gallery-items'>
                    <img src={avatar1} alt="avatar"/>
                    <span className='staff-line1'>შანიძე</span>
                    <span className='staff-line2'>მზექალა</span>
                    <span className='staff-line3'>პედაგოგი - ბავშვთა ფსიქოლოგი</span>
                    <span className='staff-line4'>სტაჟი 11 წელი</span>
                </div>
                <div className='staff-gallery-items'>
                    <img src={avatar} alt="avatar"/>
                    <span className='staff-line1'>შანიძე</span>
                    <span className='staff-line2'>მზექალა</span>
                    <span className='staff-line3'>პედაგოგი - ბავშვთა ფსიქოლოგი</span>
                    <span className='staff-line4'>სტაჟი 11 წელი</span>
                </div>
                <div className='staff-gallery-items staff-item4'>
                    <img src={avatar1} alt="avatar"/>
                    <span className='staff-line1'>შანიძე</span>
                    <span className='staff-line2'>მზექალა</span>
                    <span className='staff-line3'>პედაგოგი - ბავშვთა ფსიქოლოგი</span>
                    <span className='staff-line4'>სტაჟი 11 წელი</span>
                </div>
            </div>
            <div className='staff-arrow staff-rightarrow'>
                
            </div>
        </div>
      </section>



      <div className='staff-detail-info'>

        <div className='detail-info-content'>

          <div className='detail-info-header'>
            <h3>Подробнее о педагоге</h3>
            <div>
              <img src={x} alt="close" />
            </div>
          </div>

          <div className='detail-main-info'>
            <div className='detail-avatar-info'>

              <div>
                <img src={avatar2} alt="avatar" />
              </div>

              <div className='avatar-info-text'>

                <p className='avatar-info-text1'>Руководитель kids story</p>
                <p className='avatar-info-text2'>Журавлев</p>
                <p className='avatar-info-text3'>Дмитрий Анатольевич</p>
                <p className='avatar-info-text4'>Педагог - психолог</p>
                <p className='avatar-info-text5'>Стаж 11 лет</p>

                <div className='detail-info-socials'>
                  <img src={bluefacebook} alt="facebook" />
                  <img src={blueinsta} alt="instagram" />
                  <img src={bluewhatsapp} alt="whatsapp" />
                </div>

              </div>

            </div>
              <p>Мы создали пространство, в котором каждый ребёнок проявляет и раскрывает себя, развивает индивидуальные особенности и таланты.
              </p>
              <p>Наша задача — сделать так, чтобы каждый день в Kids story был счастливым.
              </p>
              <ul>
                <li>Английский детский клуб. Для детей с 2 до 7 лет. Погружение в языковую среду, собственная кухня, охраняемая огороженная территория, медицинский кабинет, соляная пещера.</li>
                <li>
                Дополнительные услуги. Для детей с 2 до 18 лет. Развивающие студии, творческие мастерские, спортивные секции.
                </li>
                <li>Kids story - «ежедневное развитие детей на 360 градусов».</li>
              </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default Staff