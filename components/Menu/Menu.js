import { useState } from 'react';

import style from './Menu.module.scss'

const Menu = () =>{

    const [leng, useLang] = useState(null);
    console.log(leng)
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
                    <div className={style.city}>
                        <a href="#">Київ</a>
                        <a href="#">Одеса</a>
                        <a href="#">Харків</a>
                    </div>   
                </div>
                <div className={style.wrapperLink}>
                    <div className={style.serch}>
                        <button type="submit" className= {style.serchBtn}><img className = {style.serchImg} src='/svg/MagnifyingGlass.svg' alt="MagnifyingGlass" /></button>
                        <input className ={style.serchIn} type="text" name="serchNews" placeholder="Пошук новин"/>
                    </div>
                    <div className = {style.social}>
                        <a href=""><img src='/svg/TelegramlogoGre.svg' alt="" /></a>
                        <a href=""><img src='/svg/Facebook.svg' alt="" /></a>
                        <a href=""><img src='/svg/Instagram logo.svg' alt="" /></a>
                        <a href=""><img src='/svg/YouTube logo.svg' alt="" /></a>
                    </div>
                    <div className={style.divider}><span></span></div>
                    <ul className={style.langs}>
                        <li onClick = {() => useLang('ru')} className = {style.lang}>RU</li>
                        <li onClick = {() => useLang('ua')} className = {style.langActive}>UA</li>
                    </ul>
                    
                    <select  className={style.langsSel}>
                        <option className = {style.langActive} value = 'ru'>RU</option>
                        <option className = {style.lang} value = 'ua' selected>UA</option>
                    </select>
                </div> 
                
    
            </div>
            
        </div>
    )
}

export default Menu;