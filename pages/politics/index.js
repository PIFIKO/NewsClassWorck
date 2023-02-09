import style from './politics.module.scss';
import styleCol from '../war/war.module.scss';
import Writers from '../../components/Writers/Writers'
import { Carousel } from 'react-responsive-carousel';


export const Slider  = () => {
  const arrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    cursor: 'pointer',
    width: 48,
    height: 48,
    right: 8,
    background: 'rgba(255, 255, 255, 0.16)',
    boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.24)',
    borderRadius: 88,
    border: 'none'
};
 const arrowNex = {
  height: 16,
  width: 16,
 }
 const arrowPrev = {
  height: 16,
  width: 16,
 }



return (
    <Carousel
        showThumbs = {false}
        showStatus = {false} 
        showIndicators = {false}
        infiniteLoop = {false}
        emulateTouch = {true}
        centerMode
        centerSlidePercentage={35}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <div className={style.bgButtonPrev}>
                <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 15 }}>
                    <img style={{...arrowPrev}} src="/svg/prevArrow.svg" alt="#" />
                </button>
              </div>
            )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <div className={style.bgButtonNext}>
                <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 15 }}>
                    <img style={{...arrowNex}} src="/svg/NextArrow.svg" alt="#" />
                </button>
              </div>
            )
        }
    >
        <div key="slide1" style={{ paddingTop: 20}}>
            <div className={style.pomoBlock}>
              <div  className={style.timePromo}>05 серпня 11:00</div>
              <div className={styleCol.newsDes}>Акція! Телевізори Samsung з вигодою та в оплату частинами до 1 платежів</div>
            </div>
        </div>
        <div key="slide2" style={{ paddingTop: 20 }}>
            <div className={style.pomoBlock}>
              <div  className={style.timePromo}>05 серпня 12:00</div>
              <div className={styleCol.newsDes}>Акція! Телевізори Samsung з вигодою та в оплату частинами до 2 платежів</div>
            </div>
        </div>
        <div key="slide3" style={{ paddingTop: 20}}>
        <div className={style.pomoBlock}>
              <div  className={style.timePromo}>05 серпня 13:00</div>
              <div className={styleCol.newsDes}>Акція! Телевізори Samsung з вигодою та в оплату частинами до 3 платежів</div>
            </div>
        </div>
        <div key="slide4" style={{ paddingTop: 20}}>
        <div className={style.pomoBlock}>
              <div  className={style.timePromo}>05 серпня 13:00</div>
              <div className={styleCol.newsDes}>Акція! Телевізори Samsung з вигодою та в оплату частинами до 3 платежів</div>
            </div>
        </div>
    </Carousel>
);
};

const Politics = () => {

  return(
    <div className={style.container}>
      <div className={style.wrapperPol}>
        <Writers/>
        <div className={style.politics}>
          <div className={style.wrapperCol}>
            <div className={style.title}>Політика</div>
            <button className={style.allCol}>Всі новини розділу</button>
          </div>
          <div className={style.wrapperPolNews}>
            <div className={style.bigNews}>
              <img src="/image.jpg" alt="image" />
              <div className={style.timeBig}>05 серпня 11:00</div>
              <div className={style.bigTitle}>У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною.</div>
            </div>
            <div className={style.litNews}>
              <div className={style.litNewsCard}>
                <img src="/image.jpg" alt="image" />
                <div className={style.timeBig}>05 серпня 11:00</div>
                <div className={style.litTitle}>У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною.</div>
              </div>
              <div className={style.litNewsCard}>
                <img src="/image.jpg" alt="image" />
                <div className={style.timeBig}>05 серпня 11:00</div>
                <div className={style.litTitle}>У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною.</div>
              </div>
            </div>
            <div className={style.colNews}>
              <div className={style.colNewsTitle}>Новини розділу</div>
              <div className = {styleCol.newsInfo}>
                  <a href="" className = {styleCol.newsHeve}>
                    <img src='/svg/fire.svg' alt="" />
                    <div className= {styleCol.newsHeveDesFire}>Термінова новина</div>
                  </a>
                  <a href="" className = {styleCol.newsDes}>
                  <span className = {styleCol.timer}>14:59</span> До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини
                  </a>
                  <hr />  
               </div> 
               <div className = {styleCol.newsInfo}>
                  <a href="" className = {styleCol.newsDes}>
                  <span className = {styleCol.timer}>14:59</span> До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини
                  </a>
                  <hr />  
               </div>  
               <div className = {styleCol.newsInfo}>
                  <a  href="" className = {styleCol.newsHeve}>
                      <img src='/svg/Exclude.svg' alt="" />
                      <div className= {styleCol.newsHeveDesCam}>Новина з відео</div>
                  </a>
                  <a href="" className = {styleCol.newsDes}>
                  <span className = {styleCol.timer}>14:59</span> "Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано
                  </a>
                  <hr />  
               </div> 
               <div className = {styleCol.newsInfo}>
                  <a href="" className = {styleCol.newsDes}>
                  <span className = {styleCol.timer}>14:59</span> "Бийся на світлій стороні": як спортсмени, меценати й волонетри рятують життя українців
                  </a>
                  <hr />  
               </div>  
               <div className = {styleCol.newsInfo}>
                  <a href="" className = {styleCol.newsDes}>
                  <span className = {styleCol.timer}>14:59</span> "Бийся на світлій стороні": як спортсмени, меценати й волонетри рятують життя українців
                  </a>
                  <hr />  
               </div>  
               <button className = {style.allNews}>Більше <div className={styleCol.ring}><img src="/svg/arrowright.svg" alt="arrow" /></div></button>  
            </div>
          </div>
        </div>
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
      </div>
    </div>
    )
};
  
  export default Politics;