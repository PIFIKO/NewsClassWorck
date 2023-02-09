import style from './war.module.scss';
import fire from '../../public/svg/fire.svg';
import camera from '../../public/svg/camera.svg';

const War = () =>{
    return(
        <div className= {style.container}>
            <div className= {style.wrapper}>
                <div className={style.news}>
                    <div className= {style.title}>
                        <h2 className = {style.des}>Всі новини</h2>
                        <a className = {style.lin} href="#">Архів</a>
                    </div>
                    <div className= {style.wrapperTab}>
                        <div className={style.tabActive}>Всі</div>
                        <div className={style.tab}>Новини</div>
                        <div className={style.tab}>Статті</div>
                    </div>
                    <div className= {style.newsWrapper}>
                        <div className = {style.newsInfo}>
                            <a href="" className = {style.newsHeve}>
                                <img src='/svg/fire.svg' alt="" />
                                <div className= {style.newsHeveDesFire}>Термінова новина</div>
                            </a>
                            <a href="" className = {style.newsDes}>
                            <span className = {style.timer}>14:59</span> "Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано
                            </a>
                            <hr />
                        </div>
                        <div className = {style.newsInfo}>
                            <a  href="" className = {style.newsHeve}>
                                <img src='/svg/camera.svg' alt="" />
                                <div className= {style.newsHeveDesCam}>Новина з фото</div>
                            </a>
                            <a href="" className = {style.newsDes}>
                            <span className = {style.timer}>14:59</span> "Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано
                            </a>
                            <hr />  
                        </div>  
                        <div className = {style.newsInfo}>
                            <a href="" className = {style.newsDes}>
                            <span className = {style.timer}>14:59</span> "Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано
                            </a>
                            <hr />  
                        </div>  
                        <div className = {style.newsInfo}>
                            <a href="" className = {style.newsDes}>
                            <span className = {style.timer}>14:59</span> "Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано
                            </a>
                            <hr />  
                        </div>  
                          
                        <div className = {style.whiteBlock}></div>
                    </div>   
                    <button className = {style.more}> 
                            <img className ={style.moreImg} src='/svg/group.svg' alt="" /> Завантажити ще 
                    </button>
                </div>
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