import { useState } from "react";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import style from './slider.module.scss';


function ThumbnailPlugin(mainRef) {
    return (slider) => {
      function removeActive() {
        slider.slides.forEach((slide) => {
          slide.children[0].classList.remove(style.activeSlide)
        })
      }
      function addActive(idx) {
        slider.slides[idx].children[0].classList.add(style.activeSlide)
        
      }
  
      function addClickEvents() {
        slider.slides.forEach((slide, idx) => {
          slide.addEventListener("click", () => {
            if (mainRef.current) mainRef.current.moveToIdx(idx)
          })
        })
      }
  
      slider.on("created", () => {
        if (!mainRef.current) return
        addActive(slider.track.details.rel)
        addClickEvents()
        mainRef.current.on("animationStarted", (main) => {
          removeActive()
          const next = main.animator.targetIdx || 0
          addActive(main.track.absToRel(next))
          slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
        })
      })
    }
  }
  function Arrow(props) {
    const disabeld = props.disabled ? `${style.arrowDisabled}` : ""
    return (
      <svg
        onClick={props.onClick}
        className={` ${
          props.left ? style.PrevBtn : style.NextBtn
        } ${disabeld}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 40 40" 
        fill="none"

      >
        {props.left && (
            <>
        <g clipPath="url(#clip0_9971_908)">
        <path d="M21.4991 26.0001C21.5649 26.0005 21.6301 25.9879 21.691 25.963C21.7519 25.9381 21.8073 25.9014 21.8541 25.8551C21.9009 25.8086 21.9381 25.7533 21.9635 25.6924C21.9889 25.6315 22.002 25.5661 22.002 25.5001C22.002 25.4341 21.9889 25.3687 21.9635 25.3078C21.9381 25.2469 21.9009 25.1916 21.8541 25.1451L17.7691 21.0601C17.4882 20.7788 17.3304 20.3976 17.3304 20.0001C17.3304 19.6026 17.4882 19.2213 17.7691 18.9401L21.8541 14.8551C21.9482 14.7609 22.0011 14.6332 22.0011 14.5001C22.0011 14.3669 21.9482 14.2392 21.8541 14.1451C21.7599 14.0509 21.6322 13.998 21.4991 13.998C21.3659 13.998 21.2382 14.0509 21.1441 14.1451L17.0591 18.2301C16.8262 18.4623 16.6415 18.7382 16.5155 19.0419C16.3895 19.3457 16.3246 19.6713 16.3246 20.0001C16.3246 20.3289 16.3895 20.6545 16.5155 20.9583C16.6415 21.262 16.8262 21.5379 17.0591 21.7701L21.1441 25.8551C21.1908 25.9014 21.2462 25.9381 21.3071 25.963C21.368 25.9879 21.4333 26.0005 21.4991 26.0001Z" fill="white"/>
        </g>
        <rect className={style.ArrowRectOne} x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="white"  strokeOpacity="0.7"/>
        <defs>
        <clipPath id="clip0_9971_901">
        <rect className={style.ArrowRectTwo} width="12" height="12" fill="white" transform="translate(15 14)"/>
        </clipPath>
        </defs>
        </>
        )}
        {!props.left && (
            <>
          <g clipPath="url(#clip0_9971_908)">
          <path d="M18.5009 26.0001C18.4351 26.0005 18.3699 25.9879 18.309 25.963C18.2481 25.9381 18.1927 25.9014 18.1459 25.8551C18.0991 25.8086 18.0619 25.7533 18.0365 25.6924C18.0111 25.6315 17.998 25.5661 17.998 25.5001C17.998 25.4341 18.0111 25.3687 18.0365 25.3078C18.0619 25.2469 18.0991 25.1916 18.1459 25.1451L22.2309 21.0601C22.5118 20.7788 22.6696 20.3976 22.6696 20.0001C22.6696 19.6026 22.5118 19.2213 22.2309 18.9401L18.1459 14.8551C18.0518 14.7609 17.9989 14.6332 17.9989 14.5001C17.9989 14.3669 18.0518 14.2392 18.1459 14.1451C18.2401 14.0509 18.3678 13.998 18.5009 13.998C18.6341 13.998 18.7618 14.0509 18.8559 14.1451L22.9409 18.2301C23.1738 18.4623 23.3585 18.7382 23.4845 19.0419C23.6105 19.3457 23.6754 19.6713 23.6754 20.0001C23.6754 20.3289 23.6105 20.6545 23.4845 20.9583C23.3585 21.262 23.1738 21.5379 22.9409 21.7701L18.8559 25.8551C18.8092 25.9014 18.7538 25.9381 18.6929 25.963C18.632 25.9879 18.5667 26.0005 18.5009 26.0001Z" fill="white"/>
          </g>
          <rect className={style.ArrowRectOne} x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="white"  strokeOpacity="0.7"/>
          <defs>
          <clipPath id="clip0_9971_908">
          <rect className={style.ArrowRectTwo} width="12" height="12" fill="white" transform="translate(15 14)"/>
          </clipPath>
          </defs>
          </>
        )}
      </svg>
    )
}


 function Couner(props){
  const disabeld = props.disabled ? `${style.arrowDisabled}` : ""
  console.log(props.total)
  return(
    <div className= {style.couner}>
      <span>{props.currentSlide + 1}</span>
        <span>/</span> 
      <span>{props.total}</span>
    </div>
  )
 }

const News = () => {
    

const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })
  
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  )

  return (
    <div className={style.container}>
      <div ref={sliderRef} className={`keen-slider ${style.keen__slider}`}>
        <div className={"keen-slider__slide number-slide1" }>
             <div className={style.photo} key="slide1">
                     <a  href="" className={style.description}>Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій команді немає»</a>
                     <img className={style.photo} src="/img.jpg" />
             </div>
        </div>
        <div className="keen-slider__slide number-slide2">
            <div className={style.photo} key="slide1">
                <a  href="" className={style.description}>Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій команді немає»</a>
                <img className={style.photo} src="/img.jpg" />
            </div>
        </div>
        <div className="keen-slider__slide number-slide 3">
            <div className={style.photo} key="slide1">
                <a  href="" className={style.description}>Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій команді немає»</a>
                <img className={style.photo} src="/img.jpg" />
            </div>
        </div>
        <div className="keen-slider__slide number-slide 4">
            <div className={style.photo} key="slide1">
                <a  href="" className={style.description}>Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій команді немає»</a>
                <img className={style.photo} src="/img.jpg" />
            </div>
        </div>
        <div className="keen-slider__slide number-slide 5">
            <div className={style.photo} key="slide1">
                <a  href="" className={style.description}>Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій команді немає»</a>
                <img className={style.photo} src="/img.jpg" />
            </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
                
              }
              
            />
          </>
        ) }
        {loaded && instanceRef.current && (
          <Couner
            // disabeld ={instanceRef.current.track.details.slides.length === currentSlide}
            currentSlide = {currentSlide}
            total = {instanceRef.current.track.details.slides.length}
          />
          )
        }
      </div>

      <div ref={thumbnailRef} className={` ${style.thumbnail}`}>
        <div className="keen-slider__slide number-slide1 ">
            <div className={style.wrapper}>
                <div><img className={style.img} src='/Man.jpg' alt="" /></div> 
                <div className={style.title}>Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б...</div>
            </div>
        </div>
        <div className="keen-slider__slide number-slide2 ">
            <div className={style.wrapper}>
                <div><img className={style.img} src='/Man.jpg' alt="" /></div> 
                <div className={style.title}>Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б...</div>
            </div>
        </div>
        <div className="keen-slider__slide number-slide3 ">
            <div className={style.wrapper}>
                <div><img className={style.img} src='/Man.jpg' alt="" /></div> 
                <div className={style.title}>Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б...</div>
            </div>
        </div>
        <div className="keen-slider__slide number-slide 4 ">
            <div className={style.wrapper}>
                <div><img className={style.img} src='/Man.jpg' alt="" /></div> 
                <div className={style.title}>Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б...</div>
            </div>
        </div>
        <div className="keen-slider__slide number-slide 5 ">
            <div className={style.wrapper}>
                <div><img className={style.img} src='/Man.jpg' alt="" /></div> 
                <div className={style.title}>Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б...</div>
            </div>
        </div>
      </div>
      
    </div>
  )
};
export default News;