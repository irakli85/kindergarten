import React from 'react'

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
                    <label for="terms">Я принимаю условия 
                        пользовательского соглашения</label>
                </div>
            </form>
        </section>
    </>
  )
}

export default Consultation