import style from './war.module.scss';
import NewsTabBlock from '../../components/NewsTabBlock/NewsTabBlock'

import fire from '../../public/svg/fire.svg';
import camera from '../../public/svg/camera.svg';

const War = () =>{
    return(
        <div className= {style.container}>
            <div className= {style.wrapper}>
                <NewsTabBlock/>
                <div className={style.choise} >
                    <div className={style.choiseTitle}>
                        Вибір редакції
                    </div>
                    <div className= {style.choiseWrapper}>
                        <div className={style.card}>
                            <img className = {style.cardImg} src="/card.jpg" alt="" />
                            <div className={style.data}>05 серпня 11:00</div>
                            <div className={style.cardDes}>Селезньов розповів, навіщо росіяни спустошують склади боєприпасів у Білорусі.</div>
                        </div>
                        <div className={style.card}>
                            <img className = {style.cardImg} src="/card.jpg" alt="" />
                            <div className={style.data}>05 серпня 11:00</div>
                            <div className={style.cardDes}>Селезньов розповів, навіщо росіяни спустошують склади боєприпасів у Білорусі.</div>
                        </div>
                        <div className={style.card}>
                            <img className = {style.cardImg} src="/card.jpg" alt="" />
                            <div className={style.data}>05 серпня 11:00</div>
                            <div className={style.cardDes}>Селезньов розповів, навіщо росіяни спустошують склади боєприпасів у Білорусі.</div>
                        </div>
                        <div className={style.card}>
                            <img className = {style.cardImg} src="/card.jpg" alt="" />
                            <div className={style.data}>05 серпня 11:00</div>
                            <div className={style.cardDes}>Селезньов розповів, навіщо росіяни спустошують склади боєприпасів у Білорусі.</div>
                        </div>
                        <div className={style.card}>
                            <img className = {style.cardImg} src="/card.jpg" alt="" />
                            <div className={style.data}>05 серпня 11:00</div>
                            <div className={style.cardDes}>Селезньов розповів, навіщо росіяни спустошують склади боєприпасів у Білорусі.</div>
                        </div>
                        <div className={style.card}>
                            <img className = {style.cardImg} src="/card.jpg" alt="" />
                            <div className={style.data}>05 серпня 11:00</div>
                            <div className={style.cardDes}>Селезньов розповів, навіщо росіяни спустошують склади боєприпасів у Білорусі.</div>
                        </div>
                        
                    </div>
                </div>
                <div className={style.region} >
                    <div className= {style.titleWrapper}>
                        <div className={style.choiseTitle}>
                            Регіони
                        </div>
                        <div className={style.regionAll}>
                            Всі новини розділу
                        </div>
                    </div>
                    <div className={style.regionWrapper}>
                        <div className={style.regionCard}>
                        <div className= {style.cardTitle}>Київ</div>
                            <ul className = {style.listCard}>
                                <li className = {style.listCardData}> 05 серпня</li>
                                <li className = {style.listTitle}><span className = {style.timer}>14:59</span>ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи
                                </li>
                                <hr />
                                <li className = {style.listTitle}><span className = {style.timer}>14:59</span>На Київщині загиблого під час окупації чоловіка знайшли у колодязі: його прикмети
                                </li>
                                <hr />
                            </ul>
                            <button className = {style.allNews}>Більше новин <div className={style.ring}><img src="/svg/arrowright.svg" alt="arrow" /></div></button>
                            
                        </div>
                        <div className={style.regionCard}>
                            <div className= {style.cardTitle}>Київ</div>
                            <ul className = {style.listCard}>
                                <li className = {style.listCardData}> 05 серпня</li>
                                <li className = {style.listTitle}><span className = {style.timer}>14:59</span>ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи
                                </li>
                                <hr />
                                <li className = {style.listTitle}><span className = {style.timer}>14:59</span>На Київщині загиблого під час окупації чоловіка знайшли у колодязі: його прикмети
                                </li>
                                <hr />
                            </ul>
                            <button className = {style.allNews}>Більше новин <div className={style.ring}><img src="/svg/arrowright.svg" alt="arrow" /></div></button>
                        </div>
                        <div className={style.regionCard}>
                            <div className= {style.cardTitle}>Київ</div>
                            <ul className = {style.listCard}>
                                <li className = {style.listCardData}> 05 серпня</li>
                                <li className = {style.listTitle}><span className = {style.timer}>14:59</span>ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи
                                </li>
                                <hr />
                                <li className = {style.listTitle}><span className = {style.timer}>14:59</span>На Київщині загиблого під час окупації чоловіка знайшли у колодязі: його прикмети
                                </li>
                                <hr />
                                <li className = {style.listTitle}><span className = {style.timer}>14:59</span>ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи
                                </li>
                                <hr />
                                <li className = {style.listTitle}><span className = {style.timer}>14:59</span>ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи
                                </li>
                                <hr />
                                <li className = {style.listTitle}><span className = {style.timer}>14:59</span>ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи
                                </li>
                                <hr />
                            </ul>
                            
                            <button className = {style.allNews}>Більше новин <div className={style.ring}><img src="/svg/arrowright.svg" alt="arrow" /></div></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default War;