import React, {useState} from 'react'
import logo from '../assets/homePage/Taati.png'
import phone from '../assets/homePage/phone.png'
import whatsapp from '../assets/homePage/whatsapp.svg'
import telegram from '../assets/homePage/telegram.svg'
import fb from '../assets/homePage/facebook.svg'
import close from '../assets/homePage/close.svg'
import { text } from './data'


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

    //CHILD COMPONENTS

    const HeaderLogo = ()=>{
        return(
            <div className="header-img">
                <img src={logo} alt="logo"/>
            </div>
        )
    }

    const HeaderNav = ()=>{
        return(
            <nav>
                <p onClick={handleMouseEnter}
                    className='nav-dropdown'>{text[0]}</p>
                <p onClick={handleMouseEnter}
                        className='nav-dropdown' href="/">{text[1]}</p>
                <p onClick={handleMouseEnter}
                        className='nav-dropdown' href="/">{text[2]}</p>
                <p>{text[3]}</p>
                <p>{text[4]}</p>
                <p>{text[5]}</p>
            </nav>
        )
    }

    const HeaderContacts = () =>{
        return(
            <div className="header-contact">
                <img src={phone} alt="phone"/>
                <span>{text[6]}</span>
            </div>
        )
    }

    const HeaderSocials = () =>{
        return(
            <div className="header-social">
                <img src={whatsapp} alt="whatsapp"/>
                <img src={telegram} alt="telegram"/>
                <img src={fb} alt="facebook"/>
            </div>
        )
    } 
    
    const HeaderBurger = () => {
        return(
            <div className='header-burgermenu' >
                <div></div>
                <div></div>
            </div>
        )
    }

    const HeaderButton = () => <button onClick={handleClickOpen} className='pulse'></button>

    const HeaderForm = () => {
        return(
            <form style={formStyle} action="" className="header-form">                
                    <h2>{text[7]}</h2>
                    <p>{text[8]}</p>
                    <div className='header-form-input'>
                        <input type="text" name="" id="" placeholder={text[9]}/>
                        <input type="number" name="" id="" placeholder="+ 995 _  _  _  -  _  _  _  -  _  _  _"/>
                        <input type="email" name="" id="" placeholder={text[10]}/>
                    </div>
                    <div className='header-form-checkbox'>
                        <div className='checkbox-wrap'>
                            <input type="checkbox" name="remember" id="remember"/>
                         </div>   
                        <label htmlFor="remember">{text[11]}</label>
                    </div>
                    <button type="submit">{text[12]}</button>
                    <div onClick={handleClickClose} className='header-close'>
                        <img src={close} alt="close" />
                    </div>                
            </form>
        )
    }

    const HeaderDropdown = () => {
        return(
            <div onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} style={boxStyle} className='header-dropdown-nav'>
                <a href='/'>{text[13]}</a>
                <a href='/'>{text[14]}</a>
                <a href='/'>{text[15]}</a>
                <a href='/'>{text[16]}</a>
                <a href='/'>{text[17]}</a>
                <a href='/'>{text[18]}</a>               
            </div>
        )
    }

    const HeaderMain = () => {
        return(
            <div className='header'>
                <HeaderLogo/>
                <HeaderNav/>
                <HeaderContacts/>
                <HeaderSocials/>
                <HeaderBurger/>
                <HeaderButton/>                
            </div>
        )
    }

    const MobileButton = () =>{
        return(
        <button className='header-mobile-btn' onClick={handleClickOpen}></button>
        )
    }

  return (
    <>        
        <header>
            <HeaderMain/>
            <HeaderForm/>
            <HeaderDropdown/>
        </header>
        <MobileButton/>
    </>
  )
}

export default Header