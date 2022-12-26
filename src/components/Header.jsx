import React from 'react'
import logo from '../assets/homePage/Taati.png'
import phone from '../assets/homePage/phone.png'
import whatsapp from '../assets/homePage/whatsapp.png'
import telegram from '../assets/homePage/telegram.png'


function Header() {
  return (
    <>        
        <header>
            <div class="header-img">
                <img src={logo} alt="logo"/>
            </div>
            <nav>
                <a href="/">О нас</a>
                <a href="/">Расписание</a>
                <a href="/">Программа</a>
                <a href="/">Фото и видео</a>
                <a href="/">Команда</a>
                <a href="/">Контакты</a>
            </nav>
            <div class="header-contact">
                <img src={phone} alt="phone"/>
                <span>+7 495 123 34 25"</span>
            </div>
            <div class="header-social">
                <img src={whatsapp} alt="whatsapp"/>
                <img src={telegram} alt="telegram"/>
            </div>
            <button>Записаться на экскурсию</button>
        </header>
    </>
  )
}

export default Header