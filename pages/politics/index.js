import style from './politics.module.scss';
import Writers from '../../components/Writers/Writers'
import NewsBlock from '../../components/NewsBlock/NewsBlock';
import PromoBlock from '../../components/PromoBlock/PromoBlock';

const state  = {
  colNews:[
  { id: 1, title: 'До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини' , time: '14:59', filter: 'fire'},
  { id: 2, title: 'До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини' , time: '14:59', filter: null},
  { id: 3, title: '"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано' , time: '14:59', filter: 'video'},
  { id: 4, title: 'Бийся на світлій стороні": як спортсмени, меценати й волонетри рятують життя українців' , time: '14:59', filter: null},
  { id: 5, title: 'Бийся на світлій стороні": як спортсмени, меценати й волонетри рятують життя українців' , time: '14:59', filter: null},
  ],
  News:[
    [
      {id: 1, title: 'У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною.' , time: '05 серпня 11:00', photo: '/image.jpg'}
    ],
    [
      {id: 1, title: 'У "Слузі" пояснили, чому в росії знову заговорили про переговори з Україною.' , time: '05 серпня 11:00', photo: '/image.jpg'},
      {id: 2, title: 'ТРЦ Ocean Plaza після чуток про закриття оголосив про відновлення роботи' , time: '05 серпня 11:00', photo: '/image.jpg'}
    ]
  ],
  name: 'Політика'
};



const Politics = () => {  

  return(
    <div className={style.container}>
      <div className={style.wrapperPol}>
        <Writers/>
        <div>
          <NewsBlock  state ={state}/>
          <PromoBlock/>
        </div>
      </div>
    </div>
    )
};
  
  export default Politics;