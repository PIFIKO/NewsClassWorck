import style from './Writers.module.scss'


const Writers = () => {
    return(
        <div className={style.columns}>
        <div className={style.wrapperCol}>
          <div className={style.title}>Колонки</div>
          <button className={style.allCol}>Всі колонки</button>
        </div>
        <div className={style.pepolWrapp}>
          <div className={style.pepol}>
            <div className={style.wrapperFoTex}>
              <img src="/pepool/Avatar.png" alt="Avatar" />
              <div className={style.wrapperTex}>
                <div className={style.name}>Юлія Стахівська</div>
                <div className={style.position}>письменниця</div>
              </div>
            </div>
            <h2 className = {style.des}>Жінок в часи небезпеки приваблюють сильні чоловіки</h2>
            <div className={style.time}>04 серпня 15:15</div>
          </div>
            <hr />
          <div className={style.pepol}>
            <div className={style.wrapperFoTex}>
              <img src="/pepool/Avatar.png" alt="Avatar" />
              <div className={style.wrapperTex}>
                <div className={style.name}>Юлія Стахівська</div>
                <div className={style.position}>письменниця</div>
              </div>
            </div>
            <h2 className = {style.des}>Жінок в часи небезпеки приваблюють сильні чоловіки</h2>
            <div className={style.time}>04 серпня 15:15</div>
          </div>
            <hr />
        </div>
        <button className ={style.allCols}>Всі колонки</button>
      </div>
    )
}

export default Writers