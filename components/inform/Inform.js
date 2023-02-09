import style from './Inform.module.scss'

const Inform = () => {
    return(
        <div className={style.inform}>
            <div className={style.container}>
                <div className={style.wrapper}>
                    <div className={style.contant}>
                        <ul className= {style.informBlock}>
                            <li className ={style.title}>Всі новини</li>
                        </ul>
                        <ul className= {style.informBlock}>
                            <li className ={style.title}>COVID-19</li>
                        </ul>
                        <ul className= {style.informBlock}>
                            <li className ={style.title}>Політика</li>
                            <li className ={style.descrip}>Україна</li>
                            <li className ={style.descrip}>Світ</li>
                        </ul>

                    </div>
                    <div className={style.contant}>
                        <ul className= {style.informBlock}>
                            <li className ={style.title}>Здоров’я</li>
                            <li className ={style.descrip}>Дієти</li>
                            <li className ={style.descrip}>Краса</li>
                            <li className ={style.descrip}>Секс</li>
                            <li className ={style.descrip}>Психологія</li>
                            <li className ={style.descrip}>Медицина</li>
                            
                        </ul>
                        <ul className= {style.informBlock}>
                            <li className ={style.title}>Події</li>
                            <li className ={style.descrip}>ДТП</li>
                            <li className ={style.descrip}>Катастрофи</li>
                            <li className ={style.descrip}>Кримінал</li>

                        </ul>
                    </div>
                    <div className={style.contant}>
                        <ul className= {style.informBlock}>
                            <li className ={style.title}>Лайфстайл</li>
                            <li className ={style.descrip}>Історії з життя</li>
                            <li className ={style.descrip}>Подорожі</li>
                            <li className ={style.descrip}>Кухня</li>
                            <li className ={style.descrip}>Шоубізнес</li>
                            <li className ={style.descrip}>Мода та стиль</li>
                            <li className ={style.descrip}>Зірковий гороскоп</li>
                        </ul>
                        <ul className= {style.informBlock}>
                            <li className ={style.title}>Суспільство</li>
                            <li className ={style.descrip}>Охорона здоров’я</li>
                            <li className ={style.descrip}>Безпека</li>
                            <li className ={style.descrip}>Екологія</li>
                            <li className ={style.descrip}>Релігія</li>
                        </ul>
                    </div>
                    <div className={style.contant}>
                        <ul className= {style.informBlock}>
                            <li className ={style.title}>Регіони</li>
                            <li className ={style.descrip}>Київ</li>
                            <li className ={style.descrip}>Одеса</li>
                            <li className ={style.descrip}>Харків</li>
                            <li className ={style.descrip}>Львів</li>
                        </ul>
                        <ul className= {style.informBlock}>
                            <li className ={style.title}>Техно</li>
                            <li className ={style.descrip}>Наука</li>
                            <li className ={style.descrip}>Гаджети</li>
                            <li className ={style.descrip}>ІТ</li>
                            <li className ={style.descrip}>Космос</li>
                        </ul>
                    </div>
                    <div className={style.contant}>
                    <ul className= {style.informBlock}>
                            <li className ={style.title}>Економіка</li>
                            <li className ={style.descrip}>Фінанси</li>
                            <li className ={style.descrip}>Комунальні послуги</li>
                            <li className ={style.descrip}>Бізнес</li>
                            <li className ={style.descrip}>Львів</li>
                        </ul>
                        <ul className= {style.informBlock}>
                            <li className ={style.title}>Спорт</li>
                            
                        </ul>
                    </div>
                    <div className={style.contant}>
                    <ul className= {style.informBlock}>
                            <li className ={style.About}>Про нас</li>
                            <li className ={style.About}>Контакти</li>
                            <li className ={style.About}>Структура власності</li>
                            <li className ={style.About}>Команда</li>
                            <li className ={style.About}>Медіакіт</li>
                        </ul>
                    </div>
                </div>
                <div className= {style.contactUs}>
                    <div className= {style.contactUsTitle}>Новини у зручному форматі</div>
                    <div className= {style.contactUswrapper}>
                        <a className = {style.contactUsDes} href=""><img src='/svg/YouTubeLogo.svg' alt="YouTubeLogo" />YouTube</a>
                        <a className = {style.contactUsDes} href=""><img src='/svg/TelegramLogo.svg' alt="TelegramLogo" />Telegram</a>
                        <a className = {style.contactUsDes} href=""><img src='/svg/InstagramLogo.svg' alt="InstagramLogo" />Instagram</a>
                        <a className = {style.contactUsDes} href=""><img src='/svg/FacebookLogo.svg' alt="FacebookLogo" />Facebook</a>
                        <a className = {style.contactUsDes} href=""><img src='/svg/TikTokLogo.svg' alt="TikTokLogo" />TikTok</a>
                        <a className = {style.contactUsDes} href=""><img src='/svg/GoogleNewsLogo.svg' alt="GoogleNewsLogo" />Google News</a>
                    </div>
                </div>
            </div>
        </div>
        
        
    );
}
export default Inform;