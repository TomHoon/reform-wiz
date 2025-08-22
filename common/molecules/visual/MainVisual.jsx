import styles from '@/styles/visual/MainVisual.module.scss';
import C_1280 from '@/common/pages/C_1280';

export default function MainVisual() {
 return (
  <>


   <C_1280>
    <section className={styles.container}>


     <div className={styles.introLeft}>

      <div className={styles.title}>
       <ul>
        <li>
         고가구리폼
        </li>

        <li>
         소파리폼
        </li>

        <li>
         가죽교체
        </li>

       </ul>
       <span className={styles.subtitle}>쉽고 빠르게 매칭해 드려요</span>
      </div>

      <div className={styles.content}>
       <p>
        IT프로젝트 고민은 이제 끝!<br />
        위시켓에서 성공적인 IT 프로젝트를 경험하세요.
       </p>
      </div>

      <div className={styles.buttons}>
       <a href="" className={styles.freeEnrollBtn}>무료로 견적 받기</a>
       <a href="" className={styles.askBtn}>견적상담신청</a>
      </div>

     </div>


     {/* 오른쪽 영역 */}
     <div className={styles.introRight}>
      <img src="https://www.wishket.com/static/img/acquisition/main_side.svg" alt="" />
     </div>

    </section >
   </C_1280>
   <hr className={styles.hr} />
  </>
 )
}