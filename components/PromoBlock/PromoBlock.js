import { useState } from 'react';

import style from './PromoBlock.module.scss';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


export const Slider  = () => {
  const RenderArrowNext = (props) =>{
    const disabeld = props.disabled ? `${style.arrowDisabled}` : "";
    console.log(props.disabled)
    return(
      <div  onClick={props.onClick} className={`${style.bgButtonNext} ${disabeld}`}>
        <button className= {style.arrowStyles}>
            <img  src="/svg/NextArrow.svg" alt="#" />
        </button>
      </div>
    )
  }
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    mode: "free",
    created() {
      setLoaded(true)
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    rubberband: false,
    slides: {
      perView: 3,
      spacing: 15,
    },
  })

  return (
    <div ref={sliderRef} className="keen-slider" style={{ paddingTop: 20 }}>
      {loaded && instanceRef.current &&( 

        <RenderArrowNext onClick={(e) =>
          e.stopPropagation() || instanceRef.current?.next()
          
        }
        disabled={
          currentSlide 
        }

      />)}
      <div className="keen-slider__slide">
        <div className={style.pomoBlock}>
                <div  className={style.timePromo}>05 серпня 13:00</div>
                <div className={style.newsDes}>Акція! Телевізори Samsung з вигодою та в оплату частинами до 3 платежів</div>
        </div>
      </div>
      
      <div className="keen-slider__slide">
        <div className={style.pomoBlock}>
                <div  className={style.timePromo}>05 серпня 13:00</div>
                <div className={style.newsDes}>Акція! Телевізори Samsung з вигодою та в оплату частинами до 3 платежів</div>
        </div>
      </div>
      <div className="keen-slider__slide">
        <div className={style.pomoBlock}>
                <div  className={style.timePromo}>05 серпня 13:00</div>
                <div className={style.newsDes}>Акція! Телевізори Samsung з вигодою та в оплату частинами до 3 платежів</div>
        </div>
      </div>
      <div className="keen-slider__slide">
        <div className={style.pomoBlock}>
                <div  className={style.timePromo}>05 серпня 13:00</div>
                <div className={style.newsDes}>Акція! Телевізори Samsung з вигодою та в оплату частинами до 3 платежів</div>
        </div>
      </div>
    </div>
  )
}



const PromoBlock = () => {

    return(
        <div className={style.promo}>
        <div style = {{marginBottom: 24}} className={style.wrapperCol}>
            <div className={style.title}>Промо</div>
            <button className={style.allCol}>Всі матеріали</button>
        </div>
        <div className={style.wrapperPromo}>
            <img className = {style.promoImg} src="/promoImg.jpg" alt="promoImg" />
            <div className={style.secondBlock}>
            <div className={style.timeWrapper}>
                <div  className={style.timePromo}>05 серпня 11:00</div>
                <div className={style.labelePromo}>
                <img src="/svg/megaphone.svg" alt="megaphone" />
                <div  className={style.timePromo}>Промо</div>
                </div>
            </div>
            <div className={style.titlePromo}>Акція! Телевізори Samsung з вигодою та в оплату частинами до 12 платежів</div>
            </div>
        </div>
        <Slider/>
        </div>
      )
  };
    
    export default PromoBlock;