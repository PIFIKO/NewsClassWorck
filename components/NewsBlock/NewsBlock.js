import style from './NewsBlock.module.scss';


const NewsBlock = ({state}) => {
    const {colNews ,name,News} = state
    console.log(News[0]);
    return(
        <div className={style.politics}>
        <div className={style.wrapperCol}>
            <div className={style.title}>{name}</div>
            <button className={style.allCol}>Всі новини розділу</button>
        </div>
        <div className={style.wrapperPolNews}>
            {News[0].map(({title, time, photo, id}) =>{
                return(
                    <div className={style.bigNews} key = {id}>
                        <img src={photo} alt="image" />
                        <div className={style.timeBig}>{time}</div>
                        <div className={style.bigTitle}>{title}</div>
                    </div>
                )
            })}
            <div className={style.litNews} >
            {News[1].map(({title, time, photo, id}) =>{
                return(
                    <div className={style.litNewsCard} key = {id}>
                        <img src={photo} alt="image" />
                        <div className={style.timeBig}>{time}</div>
                        <div className={style.litTitle}>{}{title}</div>
                    </div>
                )
            })}
            </div>
            
            <div className={style.colNews}>
            <div className={style.colNewsTitle}>Новини розділу</div>
                {colNews.map(({title, time, filter, id}) =>{
                    return(
                        <div key={id} className = {style.newsInfo}>
                            {filter === 'video' ? <a href="" className = {style.newsHeve}><img src='/svg/Exclude.svg' alt="video" /><span className= {style.newsHeveDesCam}>Новина з відео</span></a> : null}
                            {filter === 'fire' ? <a href="" className = {style.newsHeve}><img src='/svg/fire.svg' alt="fire" /><span className= {style.newsHeveDesFire}>Термінова новина</span></a> : null}
                            <a href="" className = {style.newsDes}>
                                <span className = {style.timer}>{time}</span> {title}
                            </a>
                            <hr />  
                        </div> 
                    )   
                })}
                <button className = {style.allNews}>Більше <div className={style.ring}><img src="/svg/arrowright.svg" alt="arrow" /></div></button>  
            </div>
        </div> 
        </div>
       
      )
    };
    
    export default NewsBlock;