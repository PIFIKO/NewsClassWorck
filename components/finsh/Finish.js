import style from './finish.module.scss'

const Finish = () =>{
    return(
        <div className={style.finish}>
            <div className={style.container}>
                <div className={style.title}>© 2020-2022, ТОВ «Медіа Мережі»</div>
                <div className={style.wrapper}>
                    <a href="#" className={style.description}>Політика користувача</a>
                    <a href="#" className={style.description}>Політика конфіденційності</a>
                    <a href="#" className={style.description}>Політика Cookie-файлів</a>
                </div>
            </div>
        </div>
    );
}

export default Finish;