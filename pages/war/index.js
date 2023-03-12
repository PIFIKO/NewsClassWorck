import style from './war.module.scss';
import NewsTabBlock from '../../components/NewsTabBlock/NewsTabBlock'
import RegionBlock from '../../components/RegionBlock/RegionBlock';


const choceNews = [
    {img: "/card.jpg", data: '05 серпня 11:00', title: 'Селезньов розповів, навіщо росіяни спустошують склади боєприпасів у Білорусі.'},
    {img: "/card.jpg", data: '05 серпня 11:00', title: 'Селезньов розповів, навіщо росіяни спустошують склади боєприпасів у Білорусі.'},
    {img: "/card.jpg", data: '05 серпня 11:00', title: 'Селезньов розповів, навіщо росіяни спустошують склади боєприпасів у Білорусі.'},
    {img: "/card.jpg", data: '05 серпня 11:00', title: 'Селезньов розповів, навіщо росіяни спустошують склади боєприпасів у Білорусі.'},
    {img: "/card.jpg", data: '05 серпня 11:00', title: 'Селезньов розповів, навіщо росіяни спустошують склади боєприпасів у Білорусі.'},
    {img: "/card.jpg", data: '05 серпня 11:00', title: 'Селезньов розповів, навіщо росіяни спустошують склади боєприпасів у Білорусі.'},
    
]



export const ChoceRedaction = () =>{
    return(
        <div className={style.choise} >
            <div className={style.choiseTitle}>Вибір редакції</div>
            <div className= {style.choiseWrapper}>
                {
                    choceNews.map(({img, data,title}, id) =>{
                        return(
                            <div key = {id} className={style.card}>
                                <img className = {style.cardImg} src={img} alt="#" />
                                <div className={style.data}>{data}</div>
                                <div className={style.cardDes}>{title}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        
    )
}



const War = () =>{
    return(
        <div className= {style.container}>
            <div className= {style.wrapper}>
                <NewsTabBlock/>
                <ChoceRedaction/>
                <RegionBlock/>
            </div>
        </div>
    )
}

export default War;