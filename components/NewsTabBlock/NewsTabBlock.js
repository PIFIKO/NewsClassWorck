import {useState, useEffect} from 'react'

import style from './NewsTabBlock.module.scss'

export const newsArr = [
    { type: 'news', des: '"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано', time: '14:59',newsHeve: 'fire'},
    { type: 'news',des: '"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано', time: '14:59',newsHeve: 'photo'},
    {type: 'articles', des: '"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано', time: '14:59',newsHeve: null},
    { type: 'articles', des: '"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано', time: '14:59',newsHeve: null},
    { type: 'news', des: '"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано', time: '14:59',newsHeve: 'photo'},

]


const NewsTabBlock = () =>{
    const [news, setNews] = useState(newsArr)
    const [newsTab, setnewsTab] = useState('all');

    useEffect(() =>{
        if (newsTab == 'all'){
            return setNews(newsArr)
        }
        const filNews = newsArr.filter(({type}) => type !== newsTab);
        setNews(filNews);
    },[newsTab])

    

    return(
        <div className={style.news}>
                <div className= {style.title}>
                    <h2 className = {style.des}>Всі новини</h2>
                    <a className = {style.lin} href="#">Архів</a>
                </div>
                <div className= {style.wrapperTab}>
                    <div onClick={() => setnewsTab('all')} className={style.tabActive}>Всі</div>
                    <div onClick={() => setnewsTab('news')} className={style.tab}>Новини</div>
                    <div onClick={() => setnewsTab('articles')} className={style.tab}>Статті</div>
                </div>
                <div className= {style.newsWrapper}>
                    
                    {news.map(({des, time, newsHeve}, id) =>{
                        return(
                        <div key={id} className = {style.newsInfo}>
                            {newsHeve == 'photo' ? 
                            <a  href="" className = {style.newsHeve}>
                                <img src= '/svg/camera.svg'  alt="" />
                                <div className= {style.newsHeveDesCam}>Новина з фото</div>
                            </a> : null}
                            {newsHeve == 'fire' ? 
                            <a href="" className = {style.newsHeve}>
                                <img src='/svg/fire.svg' alt="" />
                                <div className= {style.newsHeveDesFire}>Термінова новина</div>
                            </a> : null}
                        <a href="" className = {style.newsDes}>
                            <span className = {style.timer}>{time}</span> {des}
                        </a>
                        <hr />  
                        </div>
                        )
                    })}
                    <div className = {style.whiteBlock}></div>
                </div>   
                <button className = {style.more}> 
                        <img className ={style.moreImg} src='/svg/group.svg' alt="" /> Завантажити ще 
                </button>
        </div>
    )
}
export default NewsTabBlock;