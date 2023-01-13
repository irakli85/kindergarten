import React, {useEffect} from 'react'
import video from '../assets/homePage/video.mp4'
import poster1 from '../assets/homePage/poster1.png'
import poster2 from '../assets/homePage/poster2.png'
import poster3 from '../assets/homePage/poster3.png'

import AOS from 'aos'
import 'aos/dist/aos.css'

function Videoteka() {    

  useEffect( () => {
    AOS.init({duration: 2000});
  }, []);

  return (
    <>
        <section className="videoteka" >
            <h2 data-aos='fade-up'>ჩვენი ბაღის ვიდეო-გალერეა</h2>
            <p data-aos='fade-up'>თქვენ შეგიძლიათ ნახოთ ბაღის ყოველდღიური გარემო</p>
            <div data-aos='fade-right'>               
                <video src={video} poster={poster1} controls></video>
                <video src={video} poster={poster2} controls></video>
                <video src={video} poster={poster3} controls></video>                
            </div>
        </section>
    </>
  )
}

export default Videoteka    