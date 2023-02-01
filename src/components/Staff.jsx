import React, {useEffect, useState} from 'react'
import avatar from '../assets/homePage/avatar.png'
import avatar1 from '../assets/homePage/avatar1.png'
import x from '../assets/homePage/x.png'
import avatar2 from '../assets/homePage/avatar2.png'
import bluefacebook from '../assets/homePage/blueFacebook.svg'
import blueinsta from '../assets/homePage/blueInsta.svg'
import bluewhatsapp from '../assets/homePage/blueWhatsapp.svg'


import AOS from 'aos'
import 'aos/dist/aos.css'

function Staff() {

  useEffect( () => {
    AOS.init({duration: 2000})
  }, []);

  const [staffDetail, setStaffDetail] = useState(false);

  const handleDetailOpen = () => {
    setStaffDetail(true);
  };

  const handleDetailClose = () => {
    setStaffDetail(false)
  };

  const detailStyle = {
    display: staffDetail ? 'flex' : 'none'
  };

 
  return (
    <>
      <section className="staff" data-aos='fade-up'>
        <h3>ჩვენი გუნდი</h3>
        <div className='staff-box'>
            <div className='staff-arrow staff-leftarrow'>
               
            </div>
            <div className='staff-gallery'>
                <div className='staff-gallery-items'>
                    <img onClick={handleDetailOpen} src={avatar} alt="avatar"/>
                    <span className='staff-line1'>შანიძე</span>
                    <span className='staff-line2'>მზექალა</span>
                    <span className='staff-line3'>პედაგოგი - ბავშვთა ფსიქოლოგი</span>
                    <span className='staff-line4'>სტაჟი 11 წელი</span>
                </div>
                <div className='staff-gallery-items staff-item2'>
                    <img onClick={handleDetailOpen} src={avatar1} alt="avatar"/>
                    <span className='staff-line1'>შანიძე</span>
                    <span className='staff-line2'>მზექალა</span>
                    <span className='staff-line3'>პედაგოგი - ბავშვთა ფსიქოლოგი</span>
                    <span className='staff-line4'>სტაჟი 11 წელი</span>
                </div>
                <div className='staff-gallery-items staff-item3'>
                    <img onClick={handleDetailOpen} src={avatar} alt="avatar"/>
                    <span className='staff-line1'>შანიძე</span>
                    <span className='staff-line2'>მზექალა</span>
                    <span className='staff-line3'>პედაგოგი - ბავშვთა ფსიქოლოგი</span>
                    <span className='staff-line4'>სტაჟი 11 წელი</span>
                </div>
                <div className='staff-gallery-items staff-item4'>
                    <img onClick={handleDetailOpen} src={avatar1} alt="avatar"/>
                    <span className='staff-line1'>შანიძე</span>
                    <span className='staff-line2'>მზექალა</span>
                    <span className='staff-line3'>პედაგოგი - ბავშვთა ფსიქოლოგი</span>
                    <span className='staff-line4'>სტაჟი 11 წელი</span>
                </div>
            </div>
            <div className='staff-arrow staff-rightarrow'>
                
            </div>
        </div>
      </section>



      <div className='staff-detail-info' style={detailStyle}>

        <div className='detail-info-content'>

          <div className='detail-info-header'>
            <h3>პედადოგი</h3>
            <div>
              <img onClick={handleDetailClose} src={x} alt="close" />
            </div>
          </div>

          <div className='detail-main-info'>

            <div className='detail-avatar-info'>

              <div>
                <img src={avatar2} alt="avatar" />
              </div>

              <div className='avatar-info-text'>

                <p className='avatar-info-text1'>პედაგოგი</p>
                <p className='avatar-info-text2'>შანიძე</p>
                <p className='avatar-info-text3'>მზექალა</p>
                <p className='avatar-info-text4'>პედაგოგი-ფსიქოლოგი</p>
                <p className='avatar-info-text5'>სტაჟი 11 წელი</p>

                <div className='detail-info-socials'>
                  <img src={bluefacebook} alt="facebook" />
                  <img src={blueinsta} alt="instagram" />
                  <img src={bluewhatsapp} alt="whatsapp" />
                </div>

              </div>

            </div>

              <p className='staff-detail-info-content-text1'>ჩვენ შევქმენით სივრცე, სადაც თითოეული ბავშვს აქვს შესაძლებლობა გამოავლინოს და განავითაროს ინდივიდუალური შესაძლებლობები და ტალანტები.
              </p>
              <p className='staff-detail-info-content-text2'>ჩვენი ამოცანაა - თითოეული ბავშვისთვის ბაღში გატარებული ყველა დღე იყოს კომფორტული და ბედნიერი.
              </p>
              <ul>
                <li>ინგლისურენოვანი საბავშვო კლუბი 2-დან 7 წლამდე ბავშვებისთვის. დაცული და იზოლირებული გარემო, საკუთარი სამზარეულო, სამედიცინო ოთახი</li>
                <li>
                2-დან 12 წლამდე ბავშვებისთვის დამატებითი სერვისები. სტუდია ბავშვის დამატებითი განვითარებისთვის, შემოქმედებითი წრეები, სპორტის სექციები
                </li>
                <li>Taati - თქვენი ბავშვის ყოველღიური განვითარება</li>
              </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default Staff