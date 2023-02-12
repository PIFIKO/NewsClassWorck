import style from './Writers.module.scss'


const WritersData = [
  { id: 1,photo:'/pepool/Avatar.png', name: 'Юлія Стахівська', positon: 'письменниця', title: 'Жінок в часи небезпеки приваблюють сильні чоловіки',time: '04 серпня 15:15' },
  { id: 2,photo:'/pepool/Avatar.png', name: 'Юлія Стахівська', positon: 'письменниця', title: 'Жінок в часи небезпеки приваблюють сильні чоловіки',time: '04 серпня 15:15' },
  { id: 3,photo:'/pepool/Avatar.png', name: 'Юлія Стахівська', positon: 'письменниця', title: 'Жінок в часи небезпеки приваблюють сильні чоловіки',time: '04 серпня 15:15'  },
  { id: 4,photo:'/pepool/Avatar.png', name: 'Юлія Стахівська', positon: 'письменниця', title: 'Жінок в часи небезпеки приваблюють сильні чоловіки',time: '04 серпня 15:15'  },
  
];

const Writers = () => {
    return(
      <div className={style.columns}>
        <div className={style.wrapperCol}>
          <div className={style.title}>Колонки</div>
          <button className={style.allCol}>Всі колонки</button>
        </div>
        <div className={style.pepolWrapp}>
          {
             WritersData.map(({id,photo,name,positon,title,time}) =>{
              return (
                <div key={id} className={style.pepol} >
                  <div className={style.wrapperFoTex}>
                    <img src={photo} alt="Avatar" />
                    <div className={style.wrapperTex}>
                      <div className={style.name}>{name}</div>
                      <div className={style.position}>{positon}</div>
                    </div>
                  </div>
                  <h2 className = {style.des}>{title}</h2>
                  <div className={style.time}>{time}</div>
                  
                </div>
              )
            })
          }
        </div>
        <button className ={style.allCols}>Всі колонки</button>
      </div>
    )
}

export default Writers