import style from './NewsBlock.module.scss';
import PromoBlock from '../PromoBlock/PromoBlock';


const NewsBlock = () => {
    return(
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
            <div className = {style.newsInfo}>
                <a href="" className = {style.newsHeve}>
                    <img src='/svg/fire.svg' alt="" />
                    <div className= {style.newsHeveDesFire}>Термінова новина</div>
                </a>
                <a href="" className = {style.newsDes}>
                <span className = {style.timer}>14:59</span> До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини
                </a>
                <hr />  
                </div> 
                <div className = {style.newsInfo}>
                <a href="" className = {style.newsDes}>
                <span className = {style.timer}>14:59</span> До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини
                </a>
                <hr />  
                </div>  
                <div className = {style.newsInfo}>
                <a  href="" className = {style.newsHeve}>
                    <img src='/svg/Exclude.svg' alt="" />
                    <div className= {style.newsHeveDesCam}>Новина з відео</div>
                </a>
                <a href="" className = {style.newsDes}>
                <span className = {style.timer}>14:59</span> "Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано
                </a>
                <hr />  
                </div> 
                <div className = {style.newsInfo}>
                <a href="" className = {style.newsDes}>
                <span className = {style.timer}>14:59</span> "Бийся на світлій стороні": як спортсмени, меценати й волонетри рятують життя українців
                </a>
                <hr />  
                </div>  
                <div className = {style.newsInfo}>
                <a href="" className = {style.newsDes}>
                <span className = {style.timer}>14:59</span> "Бийся на світлій стороні": як спортсмени, меценати й волонетри рятують життя українців
                </a>
                <hr />  
                </div>  
                <button className = {style.allNews}>Більше <div className={style.ring}><img src="/svg/arrowright.svg" alt="arrow" /></div></button>  
            </div>
        </div> 
        </div>
       
      )
  };
    
    export default NewsBlock;