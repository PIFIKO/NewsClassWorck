import { Carousel } from 'react-responsive-carousel';

import style from './slider.module.scss'

const News = () => {
    const indicatorStyles = {
        background: 'rgba(255, 255, 255, 0.16)',
        width: 304,
        height: 80,
        display: 'inline-block',
        borderRadius: 12
    };
    const arrowStyles = {
        position: 'absolute',
        zIndex: 2,
        border: '1px solid rgba(255, 255, 255, 0.7)',
        borderRadius: 88,
        width: 40,
        height: 40,
        cursor: 'pointer',
        background: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };
    
  return (
    
    <Carousel
    
    showThumbs= {false}
    infiniteLoop ={true}

     statusFormatter={(current, total) =>  total && (  <span className={style.total}>{current} {total} </span>) }
   

    
    renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
            <div className={style.container}>
                <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles,top: 454, left: 123 }}>
                    <img style={{width: 12 ,height: 12,}} src="/svg/prevArrow.svg" alt="#" />
                </button>
            </div>
            
        )
    }
    renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
            <div className={style.container}>
                <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, top: -200 }}>
                    <img style={{width: 12 ,height: 12,}} src="/svg/prevArrow.svg" alt="#" />
                </button>
            </div>
            
        )
    }
    
    renderIndicator={(onClickHandler, isSelected, index, label) => {
        if (isSelected) {
            return (
                    <li
                    style={{ 
                        ...indicatorStyles, 
                        background: 'rgba(255, 255, 255, 0.32)', 
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        
                    }}
                    aria-label={`Selected: ${label} ${index + 1}`}
                    title={`Selected: ${label} ${index + 1}`}
                    >     
                    <div className={style.wrapper}>
                        <div ><img className={style.img} src='/Man.jpg' alt="" /></div> 
                        <div className={style.title}>Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б...</div>
                    </div>
                </li>    
            );
        }
        
        return (  
            
            <li
            style={indicatorStyles}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
            >     
                <div className={style.wrapper}>
                    <div><img className={style.img} src='/Man.jpg' alt="" /></div> 
                    <div className={style.title}>Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б...</div>
                </div>
            </li>
            
        );
    }}
    >   
        
        <div className={style.photo} key="slide1">
            <div className={style.container}>
                <a  href="" className={style.description}>Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій команді немає»</a>
            </div>
                <img className={style.photo} src="/img.jpg" />
        </div>
        <div className={style.photo} key="slide2">
            <div className={style.container}>
                <a  href="" className={style.description}>Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій команді немає»</a>
            </div>
                <img className={style.photo} src="/img.jpg" />
        </div>
        <div className={style.photo} key="slide3">
            <div className={style.container}>
                <a  href="" className={style.description}>Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій команді немає»</a>
            </div>
                <img className={style.photo} src="/img.jpg" />
        </div>
       
        <div className={style.photo} key="slide4">
            <div className={style.container}>
                <a  href="" className={style.description}>Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій команді немає»</a>
            </div>
                <img className={style.photo} src="/img.jpg" />
        </div>
        
    </Carousel>
    
);
};
export default News;