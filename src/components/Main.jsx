import React from 'react'
import arrowLeft from '../assets/homePage/arrowleft.png'
import arrowRight from '../assets/homePage/arrowright.png'
import arrowDown from '../assets/homePage/arrowdown1.svg'

function Main() {
    
  return (
    <>
        <main>
            <div className="main-info">
                <h1>Taati</h1>
                <p>საბავშვო ბაღი</p>
                <div className="main-arrows">
                    <div>
                        <img src={arrowLeft} alt="arrow left"/>
                    </div>
                    <div>
                        <img src={arrowRight} alt="arrow right"/>
                    </div>
                </div>
                <div className='main-arrowdown'>
                    <img className='bounce' src={arrowDown} alt="scroll arrow" />
                </div>
            </div>
        </main>
    </>
  )
}

export default Main