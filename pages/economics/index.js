import style from '../economics/economics.module.scss'
import styleCol from '../war/war.module.scss';
import Writers from '../../components/Writers/Writers'

const Economics = () => (
  <div className={style.container}>
  <div className={style.wrapperPol}>
    <Writers/>
    <div className={style.politics}>
      <div className={style.wrapperCol}>
        <div className={style.title}>Економіка</div>
        <button className={style.allCol}>Всі новини розділу</button>
      </div>
      <div className={style.wrapperPolNews}>
        <div className={style.bigNews}>
          <img src="/image.jpg" alt="image" />
          <div className={style.timeBig}>05 серпня 11:00</div>
          <div className={style.bigTitle}>У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною.</div>
        </div>
        <div className={style.litNews}>
          <div className={style.litNewsCard}>
            <img src="/image.jpg" alt="image" />
            <div className={style.timeBig}>05 серпня 11:00</div>
            <div className={style.litTitle}>У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною.</div>
          </div>
          <div className={style.litNewsCard}>
            <img src="/image.jpg" alt="image" />
            <div className={style.timeBig}>05 серпня 11:00</div>
            <div className={style.litTitle}>ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи</div>
          </div>
        </div>
        <div className={style.colNews}>
          <div className={style.colNewsTitle}>Новини розділу</div>
          <div className = {styleCol.newsInfo}>
              <a href="" className = {styleCol.newsDes}>
              <span className = {styleCol.timer}>14:59</span> McDonald’s відновлює роботу ресторанів в Україні: де відкриються перші
              </a>
              <hr />  
           </div>  
           <div className = {styleCol.newsInfo}>
              <a  href="" className = {styleCol.newsHeve}>
                  <img src='/svg/RssSimple.svg' alt="" />
                  <div className= {styleCol.newsHeveDesFire}>Онлайн</div>
              </a>
              <a href="" className = {styleCol.newsDes}>
              <span className = {styleCol.timer}>14:59</span> Рада готує новий податковий сюрприз для обмінників: Гетманцев дав роз'яснення
              </a>
              <hr />  
           </div> 
           <div className = {styleCol.newsInfo}>
              <a href="" className = {styleCol.newsDes}>
              <span className = {styleCol.timer}>14:59</span> Росія хоче перемкнути Запорізьку АЕС на Крим: експерт пояснив шанси і ризики
              </a>
              <hr />  
           </div>  
           <div className = {styleCol.newsInfo}>
              <a href="" className = {styleCol.newsDes}>
              <span className = {styleCol.timer}>14:59</span> Як Ощадбанк під час війни безперебійно підтримує аграріїв
              </a>
              <hr />  
           </div>  
           <div className = {styleCol.newsInfo}>
              <a href="" className = {styleCol.newsDes}>
              <span className = {styleCol.timer}>14:59</span>Переселенці зможуть отримувати виплати навіть у разі втрати паспорта: що відомо
              </a>
              <hr />  
           </div>  
           <button className = {style.allNews}>Більше <div className={styleCol.ring}><img src="/svg/arrowright.svg" alt="arrow" /></div></button>  
        </div>
      </div>
    </div>
  </div>
</div>
  );
  
  export default Economics;