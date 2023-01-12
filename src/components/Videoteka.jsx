import React from 'react'
import video from '../assets/homePage/video.mp4'
import poster1 from '../assets/homePage/poster1.png'
import poster2 from '../assets/homePage/poster2.png'
import poster3 from '../assets/homePage/poster3.png'

function Videoteka() {    

  return (
    <>
        <section className="videoteka">
            <h2>ჩვენი ბაღის ვიდეო-გალერეა</h2>
            <p>თქვენ შეგიძლიათ ნახოთ ბაღის ყოველდღიური გარემო</p>
            <div>               
                <video src={video} poster={poster1} controls></video>
                <video src={video} poster={poster2} controls></video>
                <video src={video} poster={poster3} controls></video>                
            </div>
        </section>
    </>
  )
}

export default Videoteka    