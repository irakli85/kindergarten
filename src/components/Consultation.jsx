import React, {useEffect} from 'react'
import ornament from '../assets/homePage/ornament1.png'
import boy from '../assets/homePage/boy1.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Consultation() {
    useEffect( () => {
        AOS.init({duration:2000});
    }, []);

  return (
    <>
        <section className="consultation" data-aos='fade-up'>
            <h3> გაქვთ კითხვები? მიიღეთ უფასო კონსულტაცია</h3>
            <p>დატოვეთ თქვენი ტელეფონი, ჩვენ დაგიკავშირდებით და მოგაწვდით ყველა ინფორმაციას ჩვენი ბაღის შესახებ</p>
            <form action="">
                <div className='consultation-input'>
                    <input type="number" name="" id="" placeholder="+ 995 _  _  _  -  _  _  _  -  _  _  _"/>
                    <button className='consultation-btn'>გაგზავნა</button>
                </div>
                <div className='consultation-checkbox'>
                    <div>
                        <input type="checkbox" name="terms" id="terms"/>
                    </div>
                    <label htmlFor="terms">ვეთანხმები მომხმარებელთა უსაფრთხოების პირობებს</label>
                </div>
                <button className='consultation-btn1'>გაგზავნა</button>
            </form>
            <img className='consultation-ornament' src={ornament} alt='ornament'/>
            <img className='consultation-boy' src={boy} alt='ornament'/>
        </section>
    </>
  )
}

export default Consultation