import React, {useState} from 'react'
import logo from '../assets/homePage/Taati.png'
import phone from '../assets/homePage/phone.png'
import whatsapp from '../assets/homePage/whatsapp.svg'
import telegram from '../assets/homePage/telegram.svg'
import fb from '../assets/homePage/facebook.svg'
import close from '../assets/homePage/close.svg'


function Header() {
    // NAVIGATION DROPDOWN MENU
    const [isHover, setIsHover] = useState(false);

   const handleMouseEnter = () => {
      setIsHover(true);
   };

   const handleMouseLeave = () => {
      setIsHover(false);
   };

   const boxStyle = {     
      display: isHover ? 'flex' : 'none',
   };

//MODAL WINDOW
   const [click, setClick] = useState(false);

    const handleClickOpen = () =>{
        setClick(true);
    }

    const handleClickClose = () =>{
        setClick(false);
    }

    const formStyle = {
        display: click ? 'flex' : 'none'
    }

    

  return (
    <>        
        <header>
            <div className='header'>
                <div className="header-img">
                    <img src={logo} alt="logo"/>
                </div>
                <nav>
                    <p onClick={handleMouseEnter}
            className='nav-dropdown'>ჩვენს შესახებ</p>
                    <p onClick={handleMouseEnter}
             className='nav-dropdown' href="/">განრიგი</p>
                    <p onClick={handleMouseEnter}
            className='nav-dropdown' href="/">პროგრამა</p>
                    <p>ფოტო და ვიდეო</p>
                    <p>ჩვენი გუნდი</p>
                    <p>კონტაქტი</p>
                </nav>
                <div className="header-contact">
                    <img src={phone} alt="phone"/>
                    <span>+995 123 456 789</span>
                </div>
                <div className="header-social">
                    <img src={whatsapp} alt="whatsapp"/>
                    <img src={telegram} alt="telegram"/>
                    <img src={fb} alt="facebook"/>
                </div>
                <button onClick={handleClickOpen} className='pulse'></button>
            </div>

            <form style={formStyle} action="" className="header-form">                
                    <h2>ჩაეწერეთ პერსონალურ ექსკურსიაზე</h2>
                    <p>შეავსეთ ფორმა და დაათვალიერეთ ბაღი თქვენთვის სასურველ დროს</p>
                    <div className='header-form-input'>
                        <input type="text" name="" id="" placeholder="თქვენი სახელი"/>
                        <input type="number" name="" id="" placeholder="+ 995 _  _  _  -  _  _  _  -  _  _  _"/>
                        <input type="email" name="" id="" placeholder="თქვენი e-mail"/>
                    </div>
                    <div className='header-form-checkbox'>
                        <div className='checkbox-wrap'>
                            <input type="checkbox" name="remember" id="remember"/>
                         </div>   
                        <label htmlFor="remember">ვეთანხმები მომხმარებელთა უსაფრთხოების პირობებს</label>
                    </div>
                    <button type="submit">ჩაწერა</button>
                    <div onClick={handleClickClose} className='header-close'>
                        <img src={close} alt="close" />
                    </div>                
            </form>

            <div onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} style={boxStyle} className='header-dropdown-nav'>
                <a href='/'>ჩვენს შესახებ</a>
                <a href='/'>დოკუმენტები</a>
                <a href='/'>მშობლებს</a>
                <a href='/'>კვება</a>
                <a href='/'>სიახლეები</a>
                <a href='/'>გამოხმაურება</a>
            </div>

        </header>
        
    </>
  )
}

export default Header