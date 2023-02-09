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

  return (
    <Carousel
    showThumbs= {false}
    infiniteLoop ={true}
    
    statusFormatter={(current, total) => ` ${current} /  ${total}`}
    renderIndicator={(onClickHandler, isSelected, index, label) => {
        if (isSelected) {
            return (
                <li
                    style={{ 
                        ...indicatorStyles, 
                        background: 'rgba(255, 255, 255, 0.32)', 
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
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
        <div>
            <h1 className={style.description}>Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій <br /> команді немає»</h1>
                <img src="/img.jpg" />
        </div>
        <div>
            <h1 className={style.description}>Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій команді немає»</h1>
                <img src="/img.jpg" />
        </div>
        <div>
            <a href=""><h1 className={style.description}>Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій команді немає»</h1></a>
                <img src="/img.jpg" />
        </div>
        <div>
            <h1 className={style.description}>Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій команді немає»</h1>
                <img src="/img.jpg" />
        </div>
     
    </Carousel>
);
};
export default News;