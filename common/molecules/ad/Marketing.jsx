import styles from '@/styles/ad/Marketing.module.scss';
import C_1280 from '@/common/pages/C_1280';

export default function Marketing() {
 return (
  <div className={styles.container}>

   <C_1280>
    <div className={styles.row}>

     <div className={styles.left}>
      <div className={styles.desc}>
       <p className={styles.top}>믿을 수 있는 전문가</p>
       <p className={styles.middle}>경험부터 실력까지 꼼꼼한<br />리폼위즈 검증 시스템</p>
       <p className={styles.bottom}>클라이언트 리뷰, 레퍼런스 체크, 신원 인증을 통해</p>
      </div>
     </div>

     <div className={styles.right}>
      <img src="https://www.wishket.com/static/img/acquisition/professional.gif" alt="" />
     </div>

    </div>

    <div className={styles.row}>
     <div className={styles.left}>
      <img src="https://www.wishket.com/static/img/acquisition/easy-and-fast.gif" alt="" />
     </div>

     <div className={styles.right}>
      <div className={styles.desc}>
       <p className={styles.top}>믿을 수 있는 전문가</p>
       <p className={styles.middle}>경험부터 실력까지 꼼꼼한<br />리폼위즈 검증 시스템</p>
       <p className={styles.bottom}>클라이언트 리뷰, 레퍼런스 체크, 신원 인증을 통해</p>
      </div>
     </div>
    </div>

    <div className={styles.row}>
     <div className={styles.left}>
      <div className={styles.desc}>
       <p className={styles.top}>믿을 수 있는 전문가</p>
       <p className={styles.middle}>경험부터 실력까지 꼼꼼한<br />리폼위즈 검증 시스템</p>
       <p className={styles.bottom}>클라이언트 리뷰, 레퍼런스 체크, 신원 인증을 통해</p>
      </div>
     </div>

     <div className={styles.right}>
      <img src="	https://www.wishket.com/static/img/acquisition/escrow.gif" alt="" />
     </div>
    </div>

   </C_1280>
  </div>
 )
}