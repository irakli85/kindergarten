import React from 'react'
import arrowLeft from '../assets/homePage/arrowleft.png'
import arrowRight from '../assets/homePage/arrowright.png'

function Main() {
  return (
    <>
        <main>
            <div className="main-info">
                <h1>Taati</h1>
                <p>детский 
                    сад</p>
                <div className="main-arrows">
                    <div>
                        <img src={arrowLeft} alt="arrow left"/>
                    </div>
                    <div>
                        <img src={arrowRight} alt="arrow right"/>
                    </div>
                </div>
            </div>
            <form action="" className="main-form">                
                    <h2>Запишитесь
                        на персональную
                        экскурсию</h2>
                    <p>Заполните форму и посмотрите 
                        детский сад вживую в удобное для 
                        вас время</p>
                    <div className='main-form-input'>
                        <input type="text" name="" id="" placeholder="Ваше имя"/>
                        <input type="number" name="" id="" placeholder="+ 995 _  _  _  -  _  _  _  -  _  _  _"/>
                        <input type="email" name="" id="" placeholder="Ваш e-mail"/>
                    </div>
                    <div className='main-form-checkbox'>
                        <div className='checkbox-wrap'>
                            <input type="checkbox" name="remember" id="remember"/>
                         </div>   
                        <label htmlFor="remember">Я принимаю условия 
                            пользовательского соглашения</label>
                    </div>
                    <button type="submit">записаться</button>                
            </form>
        </main>
    </>
  )
}

export default Main