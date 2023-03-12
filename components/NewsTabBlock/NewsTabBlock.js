import {useState, useEffect} from 'react'

import style from './NewsTabBlock.module.scss'

export const newsArr = [
    { type: 'news', des: '"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано', time: '14:59',newsHeve: true, title: 'Термінова новина', img: '/svg/fire.svg', styleTitle: style.newsHeveDesFire},
    { type: 'news',des: '"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано', time: '14:59',newsHeve: true, title: 'Новина з фото',img: '/svg/camera.svg',styleTitle: style.newsHeveDesCam},
    {type: 'articles', des: '"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано', time: '14:59',newsHeve: null},
    { type: 'articles', des: '"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано', time: '14:59',newsHeve: null},
    { type: 'news', des: '"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано', time: '14:59',newsHeve: true, title: 'Новина з фото',img: '/svg/camera.svg',styleTitle: style.newsHeveDesCam},
    

]
export const buttonTab = [
    {filter: 'all' , title: 'Всі'},
    {filter: 'news' , title: 'Новини'},
    {filter: 'articles' , title: 'Статті'},
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
                    {buttonTab.map(({filter, title}, id)=>{
                        const active = newsTab === filter ? style.tabActive : style.tab
                        return(
                            <div key = {id} onClick={() => setnewsTab(filter)} className={active}>{title}</div>
                        )
                        
                    })}
                   
                </div>
                <div className= {style.newsWrapper}>
                    
                    {news.map(({des, time, newsHeve, title,img, styleTitle}, id) =>{
                        return(
                        <div key={id} className = {style.newsInfo}>
                        {newsHeve ? 
                        <a  href="#" className = {style.newsHeve}>
                            <img src= {img}   alt="ico" />
                            <div className= {styleTitle}>{title}</div>
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