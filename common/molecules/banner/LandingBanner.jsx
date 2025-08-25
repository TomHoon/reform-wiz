import C_1280 from '@/common/pages/C_1280';
import styles from '@/styles/banner/LandingBannerLand.module.scss';

export default function LandingBanner() {
 return (
  <div className={styles.bannerContainer}>
   <C_1280>
    <div className={styles.bannerContent}>
     <p>
      <img src="https://www.wishket.com/static/img/acquisition/icon_free.svg" alt="" />
      <span>프로젝트를 등록하면 알맞은 견적과 상세 내용을 상담해 드려요.</span>
     </p>

     <a href="" className={styles.freeProject}>
      무료로 견적 받아보기
     </a>

    </div>
   </C_1280>

  </div>

 )
}