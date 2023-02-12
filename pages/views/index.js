import style from './views.module.scss';
import Writers from '../../components/Writers/Writers'
import NewsBlock from '../../components/NewsBlock/NewsBlock';


const Views = () => (
  <div className={style.container}>
    <div className={style.wrapperPol}>
      <Writers/>
      <NewsBlock/>
    </div>
  </div>
  );
  
  export default Views;