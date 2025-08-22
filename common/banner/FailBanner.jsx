import C_1280 from '@/common/pages/C_1280';
import styles from '@/styles/banner/FailBanner.module.scss';

export default function FailBanner() {
 return (
  <div className={styles.container}>
   <C_1280>
    <div className={styles.wrapper}>
     <div className={styles.left}>
      <p>
       처음 시작한 IT프로젝트, <br />
       실패할까봐 불안하세요?
      </p>
      <span>
       리폼위즈는 실패를 줄이고 성공적으로 프로젝트를 <br />
       진행할 수 있는 완벽한 플랫폼입니다.
      </span>
     </div>

     <div className={styles.right}>
      <img src="https://www.wishket.com/static/img/acquisition/not-fail.svg" alt="" />
     </div>
    </div>
   </C_1280 >
  </div>
 )
}