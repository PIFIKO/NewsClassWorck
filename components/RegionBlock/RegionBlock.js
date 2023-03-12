import style from './RegionBlock.module.scss'

const RegionBlock = () =>{
    const regionCard = [
        {
            citi: 'Київ',
            dataNews: [
                {
                    dataNews: '05 серпня',
                    news: [
                        { time: '14:59', des: 'ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи'},
                        {dataNews: '05 серпня', time: '14:59', des: 'На Київщині загиблого під час окупації чоловіка знайшли у колодязі: його прикмети'}
                    ]
                },
                
                
            ],
            
        },
        {
            citi: 'Київ',
            dataNews: [
                {
                    dataNews: '05 серпня',
                    news: [
                        { time: '14:59', des: 'ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи'},
                        {dataNews: '05 серпня', time: '14:59', des: 'На Київщині загиблого під час окупації чоловіка знайшли у колодязі: його прикмети'}
                    ]
                },
                
                
            ],
            
        }
    ];



    
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
            <div className={style.regionWrapper}>
                        {/* <div className={style.regionCard}>
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
                        </div> */}
            {
            regionCard.map(item => {
                return(
                    <div className={style.regionCard}>
                        <div className= {style.cardTitle}>{item.citi}</div>
                        {item.dataNews.map(item =>{
                            return(
                                <div className = {style.listCard}>
                                <div className = {style.listCardData}>{item.dataNews}</div>
                                {item.news.map(({time,des}) =>{
                                    return(
                                        <div className = {style.listTitle}><span className = {style.timer}>{time}</span>{des}
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