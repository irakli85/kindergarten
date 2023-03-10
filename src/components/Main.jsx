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
            <form action="" className="main-form">                
                    <h2>ჩაეწერეთ პერსონალურ ექსკურსიაზე</h2>
                    <p>შეავსეთ ფორმა და დაათვალიერეთ ბაღი თქვენთვის სასურველ დროს</p>
                    <div className='main-form-input'>
                        <input type="text" name="" id="" placeholder="თქვენი სახელი"/>
                        <input type="number" name="" id="" placeholder="+ 995 _  _  _  -  _  _  _  -  _  _  _"/>
                        <input type="email" name="" id="" placeholder="თქვენი e-mail"/>
                    </div>
                    <div className='main-form-checkbox'>
                        <div className='checkbox-wrap'>
                            <input type="checkbox" name="main-checkbox" id="main-checkbox"/>
                         </div>   
                        <label htmlFor="main-checkbox">ვეთანხმები მომხმარებელთა უსაფრთხოების პირობებს</label>
                    </div>
                    <button type="submit">ჩაწერა</button>
                                 
            </form>
        </main>
    </>
  )
}

export default Main