import style from './Menu.module.scss'

const Menu = () =>{
    return(
        <div className = {style.headMenu}>
            <div className={style.container}>
                <div className= {style.wrapper}>
                    <menu className={style.menu}>
                    <div className={style.slider}>
                            <span></span>
                            <span></span>
                        </div>
                        <div className={style.title}>Меню</div>
                    </menu>
                    <ul className={style.city}>
                        <li><a href="#">Київ</a></li>
                        <li><a href="#">Одеса</a></li>
                        <li><a href="#">Харків</a></li>
                    </ul>   
                </div>
                <div className={style.wrapperLink}>
                    <form className={style.serch}>
                        <button className= {style.serchBtn}><img className = {style.serchImg} src='/svg/MagnifyingGlass.svg' alt="MagnifyingGlass" /></button>
                        <input className ={style.serchIn} type="text" name="serchNews" placeholder="Пошук новин"/>
                    </form>
                    <div className = {style.social}>
                        <a href=""><img src='/svg/TelegramlogoGre.svg' alt="" /></a>
                        <a href=""><img src='/svg/Facebook.svg' alt="" /></a>
                        <a href=""><img src='/svg/Instagram logo.svg' alt="" /></a>
                        <a href=""><img src='/svg/YouTube logo.svg' alt="" /></a>
                    </div>
                    <div className={style.divider}><span></span></div>
                    <ul className={style.langs}>
                        <li className = {style.lang}>RU</li>
                        <li className = {style.langActive}>UA</li>
                    </ul>
                </div> 
            </div>
            
        </div>
    )
}

export default Menu;