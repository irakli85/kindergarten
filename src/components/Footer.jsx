import React from 'react'
import logo from '../assets/homePage/Taati.png'
import phone from '../assets/homePage/phone.png'
import telegram from '../assets/homePage/telegram.png'
import whatsapp from '../assets/homePage/whatsapp.png'


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
                    <p className='footer-info-city'>Москва, ул. Муравская д.38, к.1</p>
                    <p className='footer-info-adress'>ЖК Мир Митино <span>М. Пятницкое шоссе</span></p>
                    <div className='footer-socials'>
                        <img src={telegram} alt="telegram"/>
                        <img src={whatsapp} alt="whatsapp"/>
                    </div>
                    <p className='footer-copyright'>Copyrights: Taati 2023</p>
                </div>

                <div className='footer-nav'>
                    <div className='footer-nav-items'>
                        <h3>О нас</h3>
                        <div className='footer-nav-links'>
                            <a href="/">О нас</a>
                            <a href="/">Документы</a>
                            <a href="/">Родителям</a>
                            <a href="/">Питание</a>
                            <a href="/">Новости</a>
                            <a href="/">3D тур</a>
                            <a href="/">Отзывы</a>
                        </div>
                    </div>
                    <div className='footer-nav-items'>
                        <h3>Расписание</h3>
                        <div className='footer-nav-links'>
                            <a href="/">Расписание основное</a>
                            <a href="/">Дополнительные услуги</a>
                        </div>
                    </div>
                    <div className='footer-nav-items'>
                        <h3>Программа</h3>
                        <div className='footer-nav-links'>
                            <a href="/">Группа (2-3 года)</a>
                            <a href="/">Группа (3-5 лет)</a>
                            <a href="/">Группа (5-7 лет)</a>
                        </div>
                    </div>
                    <div className='footer-nav-items'>
                        <h3>Фото и видео</h3>
                    </div>
                    <div className='footer-nav-items'>
                        <h3>Команда</h3>
                    </div>
                    <div className='footer-nav-items'>
                        <h3>Контакты</h3>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer