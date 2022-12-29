import React from 'react'
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

function Services() {
  return (
    <>
      <section className="services">
        <h2>Дополнительные услуги</h2>
        <div className="services-container">
            <div className="services-rows">
                <div className="service-items">
                    <div>
                        <img src={ioga} alt="ioga"/>
                    </div>
                    <p>Йога</p>
                </div>

                <div className="service-items">
                    <div>
                        <img src={shapes} alt="shapes"/>
                    </div>
                    <p>Монтессори группа с уникальным 
древесинным оборудованием</p>
                </div>

                <div className="service-items">
                    <div>
                        <img src={golf} alt="golf"/>
                    </div>
                    <p>Гольф для 
малышей</p>
                </div>

                <div className="service-items">
                    <div>
                        <img src={bike} alt="bike"/>
                    </div>
                    <p>Занятия с беговелами</p>
                </div>
            </div>

            <div className="services-rows">
                <div className="service-items">
                    <div>
                        <img src={lego} alt="lego"/>
                    </div>
                    <p>Легостроение и конструирование</p>
                </div>

                <div className="service-items">
                    <div>
                        <img src={eraser} alt="eraser"/>
                    </div>
                    <p>Тестопластика и глинопластика</p>
                </div>

                <div className="service-items">
                    <div>
                        <img src={mic} alt="mic"/>
                    </div>
                    <p>Риторика и ораторское мастерство</p>
                </div>

                <div className="service-items">
                    <div>
                        <img src={climb} alt="climb"/>
                    </div>
                    <p>Занятия по скалолазанию</p>
                </div>
            </div>

            <div className="services-rows">
                <div className="service-items">
                    <div>
                        <img src={book} alt="book"/>
                    </div>
                    <p>Театрализация на английском языке</p>
                </div>

                <div className="service-items">
                    <div>
                        <img src={cook} alt="cook"/>
                    </div>
                    <p>Кулинария и этикет сервисного стола</p>
                </div>

                <div className="service-items">
                    <div>
                        <img src={food} alt="food"/>
                    </div>
                    <p>Песочная терапия. Работа на интерактивных столах и досках</p>
                </div>

            </div>
        </div>

      </section>
    </>
  )
}

export default Services