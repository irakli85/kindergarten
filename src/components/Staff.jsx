import React from 'react'
import arrow from '../assets/homePage/arrow1.png'
import avatar from '../assets/homePage/avatar.png'
import avatar1 from '../assets/homePage/avatar1.png'

function Staff() {
  return (
    <>
      <section className="staff">
        <h3>Наша команда</h3>
        <div className='staff-box'>
            <div className='staff-arrow staff-leftarrow'>
                <img src={arrow} alt="arrow"/>
            </div>
            <div className='staff-gallery'>
                <div className='staff-gallery-items'>
                    <img src={avatar} alt="avatar"/>
                    <span className='staff-line1'>Журавлев</span>
                    <span className='staff-line2'>Дмитрий Анатольевич</span>
                    <span className='staff-line3'>Педагог - психолог</span>
                    <span className='staff-line4'>Стаж 11 лет</span>
                </div>
                <div className='staff-gallery-items'>
                    <img src={avatar1} alt="avatar"/>
                    <span className='staff-line1'>Журавлев</span>
                    <span className='staff-line2'>Дмитрий Анатольевич</span>
                    <span className='staff-line3'>Педагог - психолог</span>
                    <span className='staff-line4'>Стаж 11 лет</span>
                </div>
                <div className='staff-gallery-items'>
                    <img src={avatar} alt="avatar"/>
                    <span className='staff-line1'>Журавлев</span>
                    <span className='staff-line2'>Дмитрий Анатольевич</span>
                    <span className='staff-line3'>Педагог - психолог</span>
                    <span className='staff-line4'>Стаж 11 лет</span>
                </div>
                <div className='staff-gallery-items'>
                    <img src={avatar1} alt="avatar"/>
                    <span className='staff-line1'>Журавлев</span>
                    <span className='staff-line2'>Дмитрий Анатольевич</span>
                    <span className='staff-line3'>Педагог - психолог</span>
                    <span className='staff-line4'>Стаж 11 лет</span>
                </div>
            </div>
            <div className='staff-arrow'>
                <img src={arrow} alt="arrow"/>
            </div>
        </div>
      </section>
    </>
  )
}

export default Staff