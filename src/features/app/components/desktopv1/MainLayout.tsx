import styles from "./MainLayout.module.scss";
import Logotype from "../../assets/logotype.png";
import alarm from "../../assets/alarm.png";
import cash from "../../assets/cash.png";
import background from "../../assets/main__img.png";
import main__img3 from "../../assets/main__img3.png"
import arrow from "../../assets/arrow.png"
import GoogleSheetsForm from "../googleSheet/GoogleSheet";

const MainLayout: React.FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <div className={styles.main__logo}>
          <img src={Logotype} alt="Tass Cooking" loading="lazy" />
          <span>ONLINE MARAFON</span>
        </div>
        <div className={styles.adapt}>
          <img className={styles.adapt__img} src={background} alt="" />
        </div>
        <div className={styles.main__content}>
          <div className={styles.main__timer}>
            <button className={styles.main__timerButton}>
              <img src={alarm} alt="alarm icon" /> 1-2 MAY | SOAT 20:00 UZB
            </button>
          </div>

          <div className={styles.main__heading}>
            <span className={styles.main__title}>INSTAGRAM</span>
            <div className={styles.main__titleBlock}>
              <span className={styles.main__title}>BLOG</span>
              <span className={styles.main__subtitle}>
                ORQALI MIJOZLAR OQIMINI OSHIRISH USULLARI
              </span>
            </div>
          </div>

          <div className={styles.main__register}>
            <a href="/register" className={styles.register__button}>RO'YXATDAN O'TISH</a>
            <div className={styles.price}>
              <div className={styles.number}><del>1 000 000</del></div>
              <div className={styles.free}>BEPUL</div>
              <div className={styles.cash}><img src={cash} alt="" /></div>
            </div>
          </div>
        </div>
        <div className={styles.side__bar}>
          <div className={styles.sb__title}>ONLINE MARAFONDA BILIB OLASIZ: </div>
          <div className={styles.sb__content}>
           <button className={styles.sb__text}>
            <img src={arrow} alt="" />INSTAGRAM ORQALI ILK 10 000 MINGTA OBUNACHIGA ERISHISH YO'LLARI 
           </button>
           <button className={styles.sb__text}>
            <img src={arrow} alt="" /> MIJOZLAR OQIMINI 10X GA OSHIRISH USULLARI 
           </button>
           <button className={styles.sb__text}>
            <img src={arrow} alt="" />  BLOGGERLAR AYTISHMAYDIGAN 10 TA SIR
           </button>
           <button className={styles.sb__text}>
            <img src={arrow} alt="" /> KATTA BRENDLAR BILAN HAMKORLIKNI YO'LGA QO'YISH
           </button>
           <button className={styles.sb__text}>
            <img src={arrow} alt="" /> SHAXSIY BREND QURISH UCHUN 10 TA QADAM
           </button>
           
          </div>
          <img src={main__img3 } className={styles.sb__img} alt="" />
          
          <div className={styles.sb__btn}>
          <a href="/register" className={styles.register__button}>RO'YXATDAN O'TISH</a>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default MainLayout;
