import React,{useEffect} from 'react'
import clock from '../assets/homePage/clock.png'
import camera from '../assets/homePage/camera.png'
import scope from '../assets/homePage/scope.png'
import face from '../assets/homePage/face.png'
import chat from '../assets/homePage/chat.png'
import house from '../assets/homePage/house.png'
import wall from '../assets/homePage/wall.png'
import baby from '../assets/homePage/baby.png'
import fork from '../assets/homePage/fork.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Info() {

    useEffect( () =>{
        AOS.init({duration: 2000});
    }, [])

   
    

  return (
    <>
        <section className="information">
            
            <div className="info-item" data-aos='fade-up'>
                <div className='info-yellowBG'>
                    <div className='image-wrapper'>
                        <img src={clock} alt="clock"/>
                    </div>    
                </div>
                <p>მუშაობის საათები: <span>7:00-დან 19:00-მდე</span></p>
            </div>

            <div className="info-item" data-aos='fade-up'>
                <div className='info-blueBG'>
                    <div className='image-wrapper'>
                        <img src={camera} alt="camera"/>
                    </div>    
                </div>
                <p>ვიდეო-კამერები: <span>online</span></p>
            </div>

            <div className="info-item" data-aos='fade-up'>
                <div className='info-pinkBG'>
                    <div className='image-wrapper'>
                        <img src={scope} alt="scope"/>
                    </div>    
                </div>
                <p>დილის ფილტრი მედპერსონალის მიერ: <span>ყოველდღიური</span></p>
            </div>

            <div className="info-item" data-aos='fade-up'>
                <div className='info-pinkBG'>
                    <div className='image-wrapper'>
                        <img src={face} alt="face"/>
                    </div>    
                </div>
                <p>ჯგუფები: <span>15 ბავშვამდე</span></p>
            </div>

            <div className="info-item" data-aos='fade-up'>
                <div className='info-yellowBG'>
                    <div className='image-wrapper'>
                        <img src={chat} alt="chat"/>
                    </div>    
                </div>
                <p>ინგლისურენოვანი სივრცე: <span> ბილინგვალური / ექსპატი</span></p>
            </div>

            <div className="info-item" data-aos='fade-up'>
                <div className='info-blueBG'>
                    <div className='image-wrapper'>
                        <img src={house} alt="house"/>
                    </div>    
                </div>
                <p>საერთო სივრცე: <span>800 კვ. მ</span></p>
            </div>

            <div className="info-item" data-aos='fade-up'>
                <div className='info-blueBG'>
                    <div className='image-wrapper'>
                        <img src={wall} alt="wall"/>
                    </div>    
                </div>
                <p>ადგილი გასეირნებისთვის: <span>კეთილმოწყობილი საკუთარი ეზო</span></p>
            </div>

            <div className="info-item" data-aos='fade-up'>
                <div className='info-pinkBG'>
                    <div className='image-wrapper'>
                        <img src={baby} alt="baby"/>
                    </div>   
                </div>
                <p>ბავშვების ასაკი: <span> 1,5-დან 7 წლამდე</span></p>
            </div>

            <div className="info-item" data-aos='fade-up'>
                <div className='info-yellowBG'>
                    <div className='image-wrapper'>
                        <img src={fork} alt="fork"/>
                    </div>
                </div>
                <p>კვება: <span>5-ჯერადი, ბავშვების ინდივიდუალური საჭიროებების გათვალისწინებით</span></p>
            </div>   
            
        </section>
    </>
  )
}

export default Info