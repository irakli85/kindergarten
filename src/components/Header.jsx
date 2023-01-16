import React from 'react'
import logo from '../assets/homePage/Taati.png'
import phone from '../assets/homePage/phone.png'
import whatsapp from '../assets/homePage/whatsapp.png'
import telegram from '../assets/homePage/telegram.png'


function Header() {
  return (
    <>        
        <header>
            <div className="header-img">
                <img src={logo} alt="logo"/>
            </div>
            <nav>
                <a className='nav-dropdown' href="/">ჩვენს შესახებ</a>
                <a className='nav-dropdown' href="/">განრიგი</a>
                <a className='nav-dropdown' href="/">პროგრამა</a>
                <a href="/">ფოტო და ვიდეო</a>
                <a href="/">ჩვენი გუნდი</a>
                <a href="/">კონტაქტი</a>
            </nav>
            <div className="header-contact">
                <img src={phone} alt="phone"/>
                <span>+995 123 456 789</span>
            </div>
            <div className="header-social">
                <img src={whatsapp} alt="whatsapp"/>
                <img src={telegram} alt="telegram"/>
            </div>
            <button className='pulse'>ჩაეწერეთ ექსკურსიაზე</button>
        </header>
    </>
  )
}

export default Header