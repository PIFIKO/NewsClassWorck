import { useState } from 'react';

import style from './RegionBlock.module.scss'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


const RegionBlock = () =>{
    const regionCard = [
        {
            citi: 'Київ',
            dataNews: [
                {
                    dataNews: '05 серпня',
                    news: [
                        { time: '14:59', des: 'ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи'},
                        { time: '14:59', des: 'На Київщині загиблого під час окупації чоловіка знайшли у колодязі: його прикмети'},
                        
                    ]
                },
                {
                    dataNews: '04 серпня',
                    news: [
                        { time: '14:59', des: 'КМДА контролюватиме якість підготовки до опалювального сезону'},
                        { time: '14:59', des: 'Дружина Зеленського чесно зізналася, чи боїться смерті'},
                        { time: '14:59', des: 'ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи'},
                    ]
                },
            ],
            
        },
        {
            citi: 'Одеса',
            dataNews: [
                {
                    dataNews: '05 серпня',
                    news: [
                        { time: '14:59', des: 'Ремонт зруйнованого російськими ракетами будинку у Сергіївці коштуватиме понад 40...'},
                        { time: '14:59', des: 'На Одещині рибалки незаконно наловили раків на 8 млн гривень'},
                        { time: '14:59', des: 'Екіпаж турецького судна вперше з початку війни повернувся з Одеси додому'},
                        { time: '14:59', des: 'Дружина Зеленського чесно зізналася, чи боїться смерті'},
                        { time: '14:59', des: 'Ремонт зруйнованого російськими ракетами будинку у Сергіївці коштуватиме понад 40...'},
                        
                    ]
                },
            ],
            
        },
        {
            citi: 'Харків',
            dataNews: [
                {
                    dataNews: '05 серпня',
                    news: [
                        { time: '14:59', des: 'ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи'},
                        { time: '14:59', des: 'На Київщині загиблого під час окупації чоловіка знайшли у колодязі: його прикмети'},
                        { time: '14:59', des: 'ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи'},
                        { time: '14:59', des: 'Екіпаж турецького судна вперше з початку війни повернувся з Одеси додому'},
                        { time: '14:59', des: 'Дружина Зеленського чесно зізналася, чи боїться смерті'},
                        
                        
                    ]
                },
            ],
            
        },
       
    ];

  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    mode: "free",
    created() {
      setLoaded(true)
    },
    rubberband: false,
    slides: {
      perView: 3,
      spacing: 15,
    },
  })

    return(
        <div className={style.region} >
            <div className= {style.titleWrapper}>
                <div className={style.choiseTitle}>
                    Регіони
                </div>
                <div className={style.regionAll}>
                    Всі новини розділу
                </div>
            </div>
            <div ref={sliderRef} className={`keen-slider ${style.regionWrapper}`} >
            {
             regionCard.map((item , id) => {
                return(
                     <div key={id} className={`keen-slider__slide ${style.regionCard}`}>
                        <div className= {style.cardTitle}>{item.citi}</div>

                        {item.dataNews.map((item, id) =>{
                            return(
                            <div key={id} className = {style.listCard}>
                                <div className = {style.listCardData}>{item.dataNews}</div>
                                {item.news.map(({time,des}, id) =>{
                                    return(
                                        <div key={id} className = {style.listTitle}><span className = {style.timer}>{time}</span>{des} 
                                        <hr/>
                                        </div>
                                    )
                                })}
                            </div>
                            )
                        })}
                        <button className = {style.allNews}>Більше новин <div className={style.ring}><img src="/svg/arrowright.svg" alt="arrow" /></div></button>
                    </div>
                )
            })
        }
        </div>
    </div>
    )
}

export default RegionBlock;