import React, {useEffect} from 'react'
import ioga from '../assets/homePage/ioga.png'
import shapes from '../assets/homePage/shapes.png'
import golf from '../assets/homePage/golf.png'
import bike from '../assets/homePage/bike.png'
import lego from '../assets/homePage/lego.png'
import eraser from '../assets/homePage/eraser.png'
import mic from '../assets/homePage/micblue.png'
import climb from '../assets/homePage/climb.png'
import book from '../assets/homePage/book.png'
import cook from '../assets/homePage/cook.png'
import food from '../assets/homePage/food.png'

import AOS from 'aos'
import 'aos/dist/aos.css'

function Services() {

    useEffect( () => {
        AOS.init({duration:2000});
    }, []);

  return (
    <>
      <section className="services">
        <h2 data-aos='fade-up'>დამატებითი მომსახურეობები</h2>
        <div className="services-container">
            <div className="services-rows" data-aos='fade-up'>
                <div className="service-items">
                    <div className='service-items-imgbox'>
                        <img src={ioga} alt="ioga"/>
                    </div>
                    <p>იოგა</p>
                </div>

                <div className="service-items">
                    <div className='service-items-imgbox'>
                        <img src={shapes} alt="shapes"/>
                    </div>
                    <p>მონტესორის ჯგუფი უნიკალური ხის მოწყობილობებით</p>
                </div>

                <div className="service-items">
                    <div className='service-items-imgbox'>
                        <img src={golf} alt="golf"/>
                    </div>
                    <p>გოლფი ბავშვებისთვის</p>
                </div>

                <div className="service-items">
                    <div className='service-items-imgbox'>
                        <img src={bike} alt="bike"/>
                    </div>
                    <p>ველოსპორტი</p>
                </div>
            </div>

            <div className="services-rows" data-aos='fade-up'>
                <div className="service-items">
                    <div className='service-items-imgbox'>
                        <img src={lego} alt="lego"/>
                    </div>
                    <p>კონსტრუირება და ლეგო</p>
                </div>

                <div className="service-items">
                    <div className='service-items-imgbox'>
                        <img src={eraser} alt="eraser"/>
                    </div>
                    <p>პლასტელინისგან და თიხისგან ძერწვა</p>
                </div>

                <div className="service-items">
                    <div className='service-items-imgbox'>
                        <img src={mic} alt="mic"/>
                    </div>
                    <p>რიტორიკა და ორატორული უნარები</p>
                </div>

                <div className="service-items">
                    <div className='service-items-imgbox'>
                        <img src={climb} alt="climb"/>
                    </div>
                    <p>კლდეზე ცოცვა</p>
                </div>
            </div>

            <div className="services-rows" data-aos='fade-up'>
                <div className="service-items">
                    <div className='service-items-imgbox'>
                        <img src={book} alt="book"/>
                    </div>
                    <p>თეატრალური უნარები</p>
                </div>

                <div className="service-items">
                    <div className='service-items-imgbox'>
                        <img src={cook} alt="cook"/>
                    </div>
                    <p>კულინარია და სუფრის სერვისის ეტიკეტი</p>
                </div>

                <div className="service-items">
                    <div className='service-items-imgbox'>
                        <img src={food} alt="food"/>
                    </div>
                    <p>ქვიშის თერაპია</p>
                </div>

            </div>
        </div>

      </section>
    </>
  )
}

export default Services