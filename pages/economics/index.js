import style from '../economics/economics.module.scss'
import NewsBlock from '../../components/NewsBlock/NewsBlock';
import styleCol from '../war/war.module.scss';
import Writers from '../../components/Writers/Writers'

const Economics = () => (
  <div className={style.container}>
  <div className={style.wrapperPol}>
    <Writers/>
    <NewsBlock/>
  </div>
</div>
  );
  
  export default Economics;