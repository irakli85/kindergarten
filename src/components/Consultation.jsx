import React from 'react'
import ornament from '../assets/homePage/ornament1.png'
import boy from '../assets/homePage/boy1.png'

function Consultation() {
  return (
    <>
        <section className="consultation">
            <h3>Есть вопросы? Получите 
                бесплатную консультацию</h3>
            <p>Оставьте телефон и мы перезвоним 
                и расскажем все подробности о филиале</p>
            <form action="">
                <div className='consultation-input'>
                    <input type="number" name="" id="" placeholder="+ 995 _  _  _  -  _  _  _  -  _  _  _"/>
                    <button>отправить</button>
                </div>
                <div className='consultation-checkbox'>
                    <div>
                        <input type="checkbox" name="terms" id="terms"/>
                    </div>
                    <label htmlFor="terms">Я принимаю условия 
                        пользовательского соглашения</label>
                </div>
            </form>
            <img className='consultation-ornament' src={ornament} alt='ornament'/>
            <img className='consultation-boy' src={boy} alt='ornament'/>
        </section>
    </>
  )
}

export default Consultation