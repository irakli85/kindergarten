import React from 'react'
import arrowLeft from '../assets/homePage/arrowleft.png'
import arrowRight from '../assets/homePage/arrowright.png'
import arrowDown from '../assets/homePage/arrowdown1.svg'
import { text } from './data'

function Main() {

    // CHILD COMPONENTS

    const MainInfo = ({headText, paraText}) => {
        return(
            <div className="main-info">
                <h1>{headText}</h1>
                <p>{paraText}</p>
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
        )
    }

    const MainForm = ({formText1, formText2, formText3, formText4, formText5, formText6 }) => {
        return(
            <form action="" className="main-form">                
                    <h2>{formText1}</h2>
                    <p>{formText2}</p>
                    <div className='main-form-input'>
                        <input type="text" name="" id="" placeholder={formText3}/>
                        <input type="number" name="" id="" placeholder="+ 995 _  _  _  -  _  _  _  -  _  _  _"/>
                        <input type="email" name="" id="" placeholder={formText4}/>
                    </div>
                    <div className='main-form-checkbox'>
                        <div className='checkbox-wrap'>
                            <input type="checkbox" name="main-checkbox" id="main-checkbox"/>
                         </div>   
                        <label htmlFor="main-checkbox">{formText5}</label>
                    </div>
                    <button type="submit">{formText6}</button>
                                 
            </form>
        )
    }
    
  return (
    <>
        <main>
            <MainInfo headText={text[19]} paraText={text[20]}/>
            <MainForm formText1={text[7]} formText2={text[8]} formText3={text[9]} formText4={text[10]} formText5={text[11]} formText6={text[12]} />
            
        </main>
    </>
  )
}

export default Main