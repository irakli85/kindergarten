import React from 'react'
import logo from '../assets/homePage/Taati.png'
import phone from '../assets/homePage/phone.png'
import telegram from '../assets/homePage/telegram.svg'
import whatsapp from '../assets/homePage/whatsapp.svg'
import fb from '../assets/homePage/facebook.svg'


function Footer() {
  return (
    <>
        <footer>
            <div className='footer-logo'>
                <img src={logo} alt="logo"/>
            </div>

            <div className='footer-main'>

                <div className='footer-info'>
                    <div className='footer-phone'>
                        <img src={phone} alt="phone"/>
                        <p>+995 123 456 789</p>
                    </div>
                    <p className='footer-info-mail'>expample@taati.ge</p>
                    <p className='footer-info-city'>ბათუმი, ვ. გორგასალის ქ. 149<sup>ა</sup></p>
                    <p className='footer-info-adress'>ЖК Мир Митино <span>М. Пятницкое шоссе</span></p>
                    <div className='footer-socials'>
                        <img src={telegram} alt="telegram"/>
                        <img src={whatsapp} alt="whatsapp"/>
                        <img src={fb} alt="fb"/>
                    </div>
                    <p className='footer-copyright'>Copyrights: Taati 2023</p>
                </div>

                <div className='footer-nav'>
                    <div className='footer-nav-items'>
                        <h3>ჩვენს შესახებ</h3>
                        <div className='footer-nav-links'>
                            <a href="/">ჩვენს შესახებ</a>
                            <a href="/">დოკუმენტები</a>
                            <a href="/">მშობლებისთვის</a>
                            <a href="/">კვება</a>
                            <a href="/">სიახლეები</a>
                            <a href="/">გამოხმაურება</a>
                        </div>
                    </div>
                    <div className='footer-nav-items'>
                        <h3>სასწავლო განრიგი</h3>
                        <div className='footer-nav-links'>
                            <a href="/">ძირითადი განრიგი</a>
                            <a href="/">დამატებითი სერვისი</a>
                        </div>
                    </div>
                    <div className='footer-nav-items'>
                        <h3>პროგრამა</h3>
                        <div className='footer-nav-links'>
                            <a href="/">ჯგუფი (2-3 წელი)</a>
                            <a href="/">ჯგუფი (3-5 წელი)</a>
                            <a href="/">ჯგუფი (5-7 წელი)</a>
                        </div>
                    </div>
                    <div className='footer-nav-items footitem'>
                        <h3>ფოტო და ვიდეო</h3>
                    </div>
                    <div className='footer-nav-items footitem'>
                        <h3>ჩვენი გუნდი</h3>
                    </div>
                    <div className='footer-nav-items footitem'>
                        <h3>კონტაქტი</h3>
                    </div>
                </div>
            </div>         
            
        </footer>
    </>
  )
}

export default Footer