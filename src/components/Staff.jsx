import React from 'react'
import arrow from '../assets/homePage/arrow1.png'
import avatar from '../assets/homePage/avatar.png'
import avatar1 from '../assets/homePage/avatar1.png'

function Staff() {
  return (
    <>
      <section className="staff">
        <h3>ჩვენი გუნდი</h3>
        <div className='staff-box'>
            <div className='staff-arrow staff-leftarrow'>
                <img src={arrow} alt="arrow"/>
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
                <div className='staff-gallery-items'>
                    <img src={avatar1} alt="avatar"/>
                    <span className='staff-line1'>შანიძე</span>
                    <span className='staff-line2'>მზექალა</span>
                    <span className='staff-line3'>პედაგოგი - ბავშვთა ფსიქოლოგი</span>
                    <span className='staff-line4'>სტაჟი 11 წელი</span>
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