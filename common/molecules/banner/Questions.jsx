import C_1280 from '@/common/pages/C_1280';
import styles from '@/styles/banner/Questions.module.scss';

export default function Questions() {
 return (
  <div className={styles.container}>
   <C_1280>
    <div className={styles.wrapper}>
     <div className={styles.left}>
      <p>자주 묻는 질문</p>
     </div>

     <div className={styles.right}>
      <div className={styles.row}>
       <p>리폼가구 상담 후 결과는 얼마나 걸리나요?</p>
       <button>
        <img src="https://www.wishket.com/static/img/acquisition/icon_question_toggle.svg" alt="" />
       </button>
      </div>

      <div className={styles.row}>
       <p>견적 상담만 받고 싶은데 어떻게 해야 하나요?</p>
       <button>
        <img src="https://www.wishket.com/static/img/acquisition/icon_question_toggle.svg" alt="" />
       </button>
      </div>


      <div className={styles.row}>
       <p>프리랜서나 기간 단위로도 인력을 구인할 수 있나요?</p>
       <button>
        <img src="https://www.wishket.com/static/img/acquisition/icon_question_toggle.svg" alt="" />
       </button>
      </div>


      <div className={styles.row}>
       <p>이용요금은 얼마인가요?</p>
       <button>
        <img src="https://www.wishket.com/static/img/acquisition/icon_question_toggle.svg" alt="" />
       </button>
      </div>

     </div>
    </div>
   </C_1280>
  </div>
 )
}