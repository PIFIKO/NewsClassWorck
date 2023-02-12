import style from './politics.module.scss';
import Writers from '../../components/Writers/Writers'
import NewsBlock from '../../components/NewsBlock/NewsBlock';
import PromoBlock from '../../components/PromoBlock/PromoBlock';





const Politics = () => {

  return(
    <div className={style.container}>
      <div className={style.wrapperPol}>
        <Writers/>
        <div>
          <NewsBlock/>
          <PromoBlock/>
        </div>
      </div>
    </div>
    )
};
  
  export default Politics;