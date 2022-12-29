import React from 'react'
import clock from '../assets/homePage/clock.png'
import camera from '../assets/homePage/camera.png'
import scope from '../assets/homePage/scope.png'
import face from '../assets/homePage/face.png'
import chat from '../assets/homePage/chat.png'
import house from '../assets/homePage/house.png'
import wall from '../assets/homePage/wall.png'
import baby from '../assets/homePage/baby.png'
import fork from '../assets/homePage/fork.png'

function Info() {
  return (
    <>
        <section className="information">
            
            <div className="info-item">
                <div className='info-yellowBG'>
                    <div className='image-wrapper'>
                        <img src={clock} alt="clock"/>
                    </div>    
                </div>
                <p>Часы работы: <span>с 7:00 до 19:00</span></p>
            </div>

            <div className="info-item">
                <div className='info-blueBG'>
                    <div className='image-wrapper'>
                        <img src={camera} alt="camera"/>
                    </div>    
                </div>
                <p>Видеонаблюдение: <span>онлайн</span></p>
            </div>

            <div className="info-item">
                <div className='info-pinkBG'>
                    <div className='image-wrapper'>
                        <img src={scope} alt="scope"/>
                    </div>    
                </div>
                <p>Утренний фильтр медработником: <span>ежедневно</span></p>
            </div>

            <div className="info-item">
                <div className='info-pinkBG'>
                    <div className='image-wrapper'>
                        <img src={face} alt="face"/>
                    </div>    
                </div>
                <p>Группы: <span>до 15 человек</span></p>
            </div>

            <div className="info-item">
                <div className='info-yellowBG'>
                    <div className='image-wrapper'>
                        <img src={chat} alt="chat"/>
                    </div>    
                </div>
                <p>Англоязычная среда: <span> билингвал / экспат</span></p>
            </div>

            <div className="info-item">
                <div className='info-blueBG'>
                    <div className='image-wrapper'>
                        <img src={house} alt="house"/>
                    </div>    
                </div>
                <p>Помещение: <span>800 кв.м</span></p>
            </div>

            <div className="info-item">
                <div className='info-blueBG'>
                    <div className='image-wrapper'>
                        <img src={wall} alt="wall"/>
                    </div>    
                </div>
                <p>Площадь для прогулок: <span>собственная оборудованная территория для прогулок</span></p>
            </div>

            <div className="info-item">
                <div className='info-pinkBG'>
                    <div className='image-wrapper'>
                        <img src={baby} alt="baby"/>
                    </div>   
                </div>
                <p>Возраст детей: <span>с 1,5 до 7 лет</span></p>
            </div>

            <div className="info-item">
                <div className='info-yellowBG'>
                    <div className='image-wrapper'>
                        <img src={fork} alt="fork"/>
                    </div>
                </div>
                <p>Питание: <span>5-разовое, с учетом индивидуальных особенностей ребенка</span></p>
            </div>   
            
        </section>
    </>
  )
}

export default Info