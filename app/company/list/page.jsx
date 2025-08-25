import C_1280 from "@/common/pages/C_1280"
import styles from '@/styles/company/CompanyList.module.scss';

export default function CompanyList() {
 return (
  <div className={styles.container}>
   <C_1280>
    <div className={styles.wrapper}>

     <section className={styles.searchArea}>
      <h3>
       리폼업체 찾기 <br />
       <span className={styles.subGuide}>141,888개의 업체가 있습니다.</span>
      </h3>

      <div className={`${styles.btns} ${styles.active}`}>
       <input type="text" />
       <button>검색</button>
      </div>
     </section>

     <section className={styles.contentArea}>

      <div className={styles.filterArea}>

       <div className={styles.filterTitle}>
        <span>리폼업체 필터</span>
       </div>


       <div className={styles.filterOptions}>

        {/* 필터옵션아이템 */}
        <div className={styles.fOption}>
         <span className={styles.optionTitle}>업체 등급</span>
         <ul>
          <li>
           <input type="checkbox" name="" id="" />
           <img src="https://www.wishket.com/static/renewal/img/global/badge_partner_prime_no_border.svg" alt="" />
          </li>
          <li>
           <input type="checkbox" name="" id="" />
           <img src="https://www.wishket.com/static/renewal/img/global/badge_partner_pro_no_border.svg" alt="" />
          </li>
          <li>
           <input type="checkbox" name="" id="" />
           <img src="https://www.wishket.com/static/renewal/img/global/badge_partner_boost_no_border.svg" alt="" />
          </li>
         </ul>
        </div>

        {/* 필터옵션아이템 */}
        <div className={styles.fOption}>
         <span className={styles.optionTitle}>리폼가구</span>
         <ul>
          <li>
           <input type="checkbox" name="" id="" />
           <span>고가구</span>
          </li>
          <li>
           <input type="checkbox" name="" id="" />
           <span>식탁</span>
          </li>
          <li>
           <input type="checkbox" name="" id="" />
           <span>의자</span>
          </li>
         </ul>
        </div>

        {/* 필터옵션아이템 */}
        <div className={styles.fOption}>
         <span className={styles.optionTitle}>지역</span>
         <ul>
          <li>
           <input type="checkbox" name="" id="" />
           <span>전체</span>
          </li>
          <li>
           <input type="checkbox" name="" id="" />
           <span>서울</span>
          </li>
          <li>
           <input type="checkbox" name="" id="" />
           <span>경기도</span>
          </li>
          <li>
           <input type="checkbox" name="" id="" />
           <span>인천</span>
          </li>
          <li>
           <input type="checkbox" name="" id="" />
           <span>충청도</span>
          </li>
          <li>
           <input type="checkbox" name="" id="" />
           <span>전라도</span>
          </li>
          <li>
           <input type="checkbox" name="" id="" />
           <span>경상도</span>
          </li>
          <li>
           <input type="checkbox" name="" id="" />
           <span>강원도</span>
          </li>
         </ul>
        </div>


       </div>
      </div>

      <div className={styles.listArea}>
       <div className={styles.orderOptions}>
        <ul>
         <li className={styles.active}>
          {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABPUlEQVR4AeySPU+DUBSGCyP8Fk3cLSY13RxdtE3UwYnFIAng4uLEx+qiP9FojG58+RxTGii3X7QdmpSck3vg3vO8nBf03o6vg8BSg/fLoiiKxrMjbW0C4C/An8qy1FinsRUB4M8QLzVNs8iSehobC4Rh6EO7Anzquu4HdSM2EhA44FtSCRelzgKrwJUCcRyPZj+UHKznBD5a9ObV+dYEwO8ReWNt/A1Vg8Cpr7Mss1Ses9eIloBhGBecOE6S5J21EQLXdX2c5/lZEARfjc05Ny0B27Z/ERkwwRG/32vVR/0g8DRN+6vCpbclIA9FpCiKc0ROACdY9sjzm3Xh9PSUArLhed6PaZpD6j55h+eDdd6cnv+YKyC7Mgl+D7HG6gIXxkIBOeD7/rfjOJ9Sd8mlAl2g9Z6DQN0NZb1zi/4AAAD//1qCmogAAAAGSURBVAMADUx4MYuwNNMAAAAASUVORK5CYII=" alt="" /> */}
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABM0lEQVR4AeySMUsDQRCF37MQ/DEK7rVGIWJnaaMG1MJesBEbG1tbG/07YpVK8FeIIgoGIRnfcAh7t3fmckkKIQMDe7ez75t5u0uYcywAYw3+ZxYF65VHmt0EYXgN2iVgjCGzAQS7ArkHcFNpiGJ6QGYX6nwf4Ab6fEEppgO4OOwYNeJQtAc0EJc+UkCwQ5QuygsLmYurjpW2xLUpAHaKbHRXC8nFD/CtC63wPBb3dQoYcFcDrCGM7r2gkLl4T+JbeOJbYa/mIwU88xMDdgGuIhve4jeCnWkqF+80FfejKcD/OmSF2wDXBblBZud6ikfqfCJxKKoB2sADP/DFHdnVUecnEu9O0rlLeNYDfNcnoSDLutCGnvuxOP8GeGWf73jkqy/b5HhAG9XozAIQmVG9nLtFPwAAAP//Ijhn5wAAAAZJREFUAwA1aFkxDfQfQgAAAABJRU5ErkJggg==" alt="" />
          기본 정렬순
         </li>
         <li>
          <div className={styles.divider}></div>
         </li>
         <li>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABPUlEQVR4AeySPU+DUBSGCyP8Fk3cLSY13RxdtE3UwYnFIAng4uLEx+qiP9FojG58+RxTGii3X7QdmpSck3vg3vO8nBf03o6vg8BSg/fLoiiKxrMjbW0C4C/An8qy1FinsRUB4M8QLzVNs8iSehobC4Rh6EO7Anzquu4HdSM2EhA44FtSCRelzgKrwJUCcRyPZj+UHKznBD5a9ObV+dYEwO8ReWNt/A1Vg8Cpr7Mss1Ses9eIloBhGBecOE6S5J21EQLXdX2c5/lZEARfjc05Ny0B27Z/ERkwwRG/32vVR/0g8DRN+6vCpbclIA9FpCiKc0ROACdY9sjzm3Xh9PSUArLhed6PaZpD6j55h+eDdd6cnv+YKyC7Mgl+D7HG6gIXxkIBOeD7/rfjOJ9Sd8mlAl2g9Z6DQN0NZb1zi/4AAAD//1qCmogAAAAGSURBVAMADUx4MYuwNNMAAAAASUVORK5CYII=" alt="" />
          {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABM0lEQVR4AeySMUsDQRCF37MQ/DEK7rVGIWJnaaMG1MJesBEbG1tbG/07YpVK8FeIIgoGIRnfcAh7t3fmckkKIQMDe7ez75t5u0uYcywAYw3+ZxYF65VHmt0EYXgN2iVgjCGzAQS7ArkHcFNpiGJ6QGYX6nwf4Ab6fEEppgO4OOwYNeJQtAc0EJc+UkCwQ5QuygsLmYurjpW2xLUpAHaKbHRXC8nFD/CtC63wPBb3dQoYcFcDrCGM7r2gkLl4T+JbeOJbYa/mIwU88xMDdgGuIhve4jeCnWkqF+80FfejKcD/OmSF2wDXBblBZud6ikfqfCJxKKoB2sADP/DFHdnVUecnEu9O0rlLeNYDfNcnoSDLutCGnvuxOP8GeGWf73jkqy/b5HhAG9XozAIQmVG9nLtFPwAAAP//Ijhn5wAAAAZJREFUAwA1aFkxDfQfQgAAAABJRU5ErkJggg==" alt="" /> */}
          평점 높은순
         </li>
         <li>
          <div className={styles.divider}></div>
         </li>
         <li>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABPUlEQVR4AeySPU+DUBSGCyP8Fk3cLSY13RxdtE3UwYnFIAng4uLEx+qiP9FojG58+RxTGii3X7QdmpSck3vg3vO8nBf03o6vg8BSg/fLoiiKxrMjbW0C4C/An8qy1FinsRUB4M8QLzVNs8iSehobC4Rh6EO7Anzquu4HdSM2EhA44FtSCRelzgKrwJUCcRyPZj+UHKznBD5a9ObV+dYEwO8ReWNt/A1Vg8Cpr7Mss1Ses9eIloBhGBecOE6S5J21EQLXdX2c5/lZEARfjc05Ny0B27Z/ERkwwRG/32vVR/0g8DRN+6vCpbclIA9FpCiKc0ROACdY9sjzm3Xh9PSUArLhed6PaZpD6j55h+eDdd6cnv+YKyC7Mgl+D7HG6gIXxkIBOeD7/rfjOJ9Sd8mlAl2g9Z6DQN0NZb1zi/4AAAD//1qCmogAAAAGSURBVAMADUx4MYuwNNMAAAAASUVORK5CYII=" alt="" />
          {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABM0lEQVR4AeySMUsDQRCF37MQ/DEK7rVGIWJnaaMG1MJesBEbG1tbG/07YpVK8FeIIgoGIRnfcAh7t3fmckkKIQMDe7ez75t5u0uYcywAYw3+ZxYF65VHmt0EYXgN2iVgjCGzAQS7ArkHcFNpiGJ6QGYX6nwf4Ab6fEEppgO4OOwYNeJQtAc0EJc+UkCwQ5QuygsLmYurjpW2xLUpAHaKbHRXC8nFD/CtC63wPBb3dQoYcFcDrCGM7r2gkLl4T+JbeOJbYa/mIwU88xMDdgGuIhve4jeCnWkqF+80FfejKcD/OmSF2wDXBblBZud6ikfqfCJxKKoB2sADP/DFHdnVUecnEu9O0rlLeNYDfNcnoSDLutCGnvuxOP8GeGWf73jkqy/b5HhAG9XozAIQmVG9nLtFPwAAAP//Ijhn5wAAAAZJREFUAwA1aFkxDfQfQgAAAABJRU5ErkJggg==" alt="" /> */}
          작업 많은순
         </li>
         <li>
          <div className={styles.divider}></div>
         </li>
         <li>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABPUlEQVR4AeySPU+DUBSGCyP8Fk3cLSY13RxdtE3UwYnFIAng4uLEx+qiP9FojG58+RxTGii3X7QdmpSck3vg3vO8nBf03o6vg8BSg/fLoiiKxrMjbW0C4C/An8qy1FinsRUB4M8QLzVNs8iSehobC4Rh6EO7Anzquu4HdSM2EhA44FtSCRelzgKrwJUCcRyPZj+UHKznBD5a9ObV+dYEwO8ReWNt/A1Vg8Cpr7Mss1Ses9eIloBhGBecOE6S5J21EQLXdX2c5/lZEARfjc05Ny0B27Z/ERkwwRG/32vVR/0g8DRN+6vCpbclIA9FpCiKc0ROACdY9sjzm3Xh9PSUArLhed6PaZpD6j55h+eDdd6cnv+YKyC7Mgl+D7HG6gIXxkIBOeD7/rfjOJ9Sd8mlAl2g9Z6DQN0NZb1zi/4AAAD//1qCmogAAAAGSURBVAMADUx4MYuwNNMAAAAASUVORK5CYII=" alt="" />
          {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABM0lEQVR4AeySMUsDQRCF37MQ/DEK7rVGIWJnaaMG1MJesBEbG1tbG/07YpVK8FeIIgoGIRnfcAh7t3fmckkKIQMDe7ez75t5u0uYcywAYw3+ZxYF65VHmt0EYXgN2iVgjCGzAQS7ArkHcFNpiGJ6QGYX6nwf4Ab6fEEppgO4OOwYNeJQtAc0EJc+UkCwQ5QuygsLmYurjpW2xLUpAHaKbHRXC8nFD/CtC63wPBb3dQoYcFcDrCGM7r2gkLl4T+JbeOJbYa/mIwU88xMDdgGuIhve4jeCnWkqF+80FfejKcD/OmSF2wDXBblBZud6ikfqfCJxKKoB2sADP/DFHdnVUecnEu9O0rlLeNYDfNcnoSDLutCGnvuxOP8GeGWf73jkqy/b5HhAG9XozAIQmVG9nLtFPwAAAP//Ijhn5wAAAAZJREFUAwA1aFkxDfQfQgAAAABJRU5ErkJggg==" alt="" /> */}
          최근 활동순
         </li>
        </ul>
       </div>











       <div className={styles.companyList}>

        {/* 리스트카드 */}
        <div className={styles.companyItem}>

         <div className={styles.imgWrapper}>
          <img className={styles.profileImg} src="https://cdn.wishket.com/profiles/17966_20240704_f34e8af2cd12415a.png" alt="" />
          <div className={styles.badge} >
           <img src="https://www.wishket.com/static/renewal/img/global/badge_partner_prime.svg" alt="" />
          </div>
         </div>

         <div className={styles.introduction}>

          <p className={styles.nickname}>
           tomhoon123
           <span className={styles.activity}>활동가능</span>
          </p>

          <p className={styles.status}>
           <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABM0lEQVR4AexUu27CQBC8cxwXcaREyg+koEyRtKnzDW5st6n5Ixe2aeloqPkESgp6kCgACcv4mAObwtxYPBuEtcNq9nFjdnW2xI2fOxaI47iVJEkfWAGKIEd8kKbpN5t004giNP0BDsDsCYlfpVQX3mhUQEr5Y+wwBz+jKHo3pagA3squGoqieA2CQIIvAeE4zkfJZ5pruK77rH0dVKBeSLgWJaldmApIPLsSISzLmmOZCvwFEFmWTUv+prlGnufGs4xB3XAtUAHsQL/xVueYHdi2XWyLaz9UoFbHqGSJKk4FsIJ982MH1bjO8fsxsuY73gH7y6fG6Yhw0Bg41ha4aBNTMRXAPWijYQg0Gm78CAX/nuet4Q+MCvi+38Mn+QuQTQjDsIV85+DkMkAFyvzF7uYCGwAAAP//jTnTMgAAAAZJREFUAwAWcY0xSdCHdgAAAABJRU5ErkJggg==" alt="" />
           법인사업자
          </p>

          <p className={styles.intro}>
           저희 가구업체는 고객의 생활 공간을 더욱 아름답고 편리하게 만들기 위해 정직한 품질과 감각적인 디자인을 바탕으로 다양한 제품을 제공합니다. 내구성과 실용성을 고려한 제작 과정은 물론, 트렌드를 반영한 세련된 스타일로 집 안의 분위기를 한층 더 고급스럽게 연출합니다. 고객의 만족을 최우선으로 생각하며, 편안함과 아름다움이 조화를 이루는 가구를 통해 공간의 가치를 높여드립니다.
          </p>

          <ul className={styles.characters}>
           <li>
            <span>서울시 활동</span>
           </li>
           <li>
            <span>수상이력 존재</span>
           </li>
           <li>
            <span>투명한 공정과정</span>
           </li>
           <li>
            <span>투명한 공정과정</span>
           </li>
           <li>
            <span>투명한 공정과정</span>
           </li>
          </ul>
         </div>



         <div className={styles.evaluation}>

          {/* 아이템 */}
          <div className={styles.evalItem}>
           <div className={styles.starIcons}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB8ElEQVR4AeyTPUtbYRTH/+eWtin0BYpLmwRKp9Ip0FJq7lS7tLiog34CQXATUQdXQRG/gV9AwcFBFwXBl2Qw4iB+ADXqpGh0UKM5/m/uTbzJzWNuEAfBh3Nyn/P6e95i4ZHHM6DuAYc+Il36EtFUbJG6Sf1Yt7OXEBqA1/ke1vylJgAZRsgRCqDb318BMoDy0B7NfG4qm/dMQgFwknNW/8nX5w3yMuSzjdOaAF1teqdr0YSmYx2aivdDEGym0qtrsUFNRzt1Nf5TU7Ga9xIAsPEsrEgOIptQzAA6zuX5V0+zKBEIRqEyBUvX6TnigtLucdLypAKgCgsif7xY4x/FD5zm3voLLb8hggJQ+EffObVRuYZquySzx/7CCoATkORBittu4bwRSJ7N28Ten2NdhQQATlTsvXUPknPsOnoJy2qt1dypqwlwAkWI6Lwzv18lI793F0w5RoBO4wV38d9UeOfXpGa+frizK2dGAKJxm6nGQsZKIri6ai0Z1V8zAFpdVOBFjnBX/WxyQfVLdW45ZgYInJfkJeoGJwle5DDvZgJ68w2CJfpK4sstudyvGQBZYQrfNobQvP+L73uLdlHEPtyR5mwLId10nAGyDMMwAiS518emL8XOjrl/wGAHQiaZ8565XcGo6zEC3PDDf58+4BYAAP//2aDEGwAAAAZJREFUAwAlwo0xbFaQcAAAAABJRU5ErkJggg==" alt="" />
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB8ElEQVR4AeyTPUtbYRTH/+eWtin0BYpLmwRKp9Ip0FJq7lS7tLiog34CQXATUQdXQRG/gV9AwcFBFwXBl2Qw4iB+ADXqpGh0UKM5/m/uTbzJzWNuEAfBh3Nyn/P6e95i4ZHHM6DuAYc+Il36EtFUbJG6Sf1Yt7OXEBqA1/ke1vylJgAZRsgRCqDb318BMoDy0B7NfG4qm/dMQgFwknNW/8nX5w3yMuSzjdOaAF1teqdr0YSmYx2aivdDEGym0qtrsUFNRzt1Nf5TU7Ga9xIAsPEsrEgOIptQzAA6zuX5V0+zKBEIRqEyBUvX6TnigtLucdLypAKgCgsif7xY4x/FD5zm3voLLb8hggJQ+EffObVRuYZquySzx/7CCoATkORBittu4bwRSJ7N28Ten2NdhQQATlTsvXUPknPsOnoJy2qt1dypqwlwAkWI6Lwzv18lI793F0w5RoBO4wV38d9UeOfXpGa+frizK2dGAKJxm6nGQsZKIri6ai0Z1V8zAFpdVOBFjnBX/WxyQfVLdW45ZgYInJfkJeoGJwle5DDvZgJ68w2CJfpK4sstudyvGQBZYQrfNobQvP+L73uLdlHEPtyR5mwLId10nAGyDMMwAiS518emL8XOjrl/wGAHQiaZ8565XcGo6zEC3PDDf58+4BYAAP//2aDEGwAAAAZJREFUAwAlwo0xbFaQcAAAAABJRU5ErkJggg==" alt="" />
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB8ElEQVR4AeyTPUtbYRTH/+eWtin0BYpLmwRKp9Ip0FJq7lS7tLiog34CQXATUQdXQRG/gV9AwcFBFwXBl2Qw4iB+ADXqpGh0UKM5/m/uTbzJzWNuEAfBh3Nyn/P6e95i4ZHHM6DuAYc+Il36EtFUbJG6Sf1Yt7OXEBqA1/ke1vylJgAZRsgRCqDb318BMoDy0B7NfG4qm/dMQgFwknNW/8nX5w3yMuSzjdOaAF1teqdr0YSmYx2aivdDEGym0qtrsUFNRzt1Nf5TU7Ga9xIAsPEsrEgOIptQzAA6zuX5V0+zKBEIRqEyBUvX6TnigtLucdLypAKgCgsif7xY4x/FD5zm3voLLb8hggJQ+EffObVRuYZquySzx/7CCoATkORBittu4bwRSJ7N28Ten2NdhQQATlTsvXUPknPsOnoJy2qt1dypqwlwAkWI6Lwzv18lI793F0w5RoBO4wV38d9UeOfXpGa+frizK2dGAKJxm6nGQsZKIri6ai0Z1V8zAFpdVOBFjnBX/WxyQfVLdW45ZgYInJfkJeoGJwle5DDvZgJ68w2CJfpK4sstudyvGQBZYQrfNobQvP+L73uLdlHEPtyR5mwLId10nAGyDMMwAiS518emL8XOjrl/wGAHQiaZ8565XcGo6zEC3PDDf58+4BYAAP//2aDEGwAAAAZJREFUAwAlwo0xbFaQcAAAAABJRU5ErkJggg==" alt="" />
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB8ElEQVR4AeyTPUtbYRTH/+eWtin0BYpLmwRKp9Ip0FJq7lS7tLiog34CQXATUQdXQRG/gV9AwcFBFwXBl2Qw4iB+ADXqpGh0UKM5/m/uTbzJzWNuEAfBh3Nyn/P6e95i4ZHHM6DuAYc+Il36EtFUbJG6Sf1Yt7OXEBqA1/ke1vylJgAZRsgRCqDb318BMoDy0B7NfG4qm/dMQgFwknNW/8nX5w3yMuSzjdOaAF1teqdr0YSmYx2aivdDEGym0qtrsUFNRzt1Nf5TU7Ga9xIAsPEsrEgOIptQzAA6zuX5V0+zKBEIRqEyBUvX6TnigtLucdLypAKgCgsif7xY4x/FD5zm3voLLb8hggJQ+EffObVRuYZquySzx/7CCoATkORBittu4bwRSJ7N28Ten2NdhQQATlTsvXUPknPsOnoJy2qt1dypqwlwAkWI6Lwzv18lI793F0w5RoBO4wV38d9UeOfXpGa+frizK2dGAKJxm6nGQsZKIri6ai0Z1V8zAFpdVOBFjnBX/WxyQfVLdW45ZgYInJfkJeoGJwle5DDvZgJ68w2CJfpK4sstudyvGQBZYQrfNobQvP+L73uLdlHEPtyR5mwLId10nAGyDMMwAiS518emL8XOjrl/wGAHQiaZ8565XcGo6zEC3PDDf58+4BYAAP//2aDEGwAAAAZJREFUAwAlwo0xbFaQcAAAAABJRU5ErkJggg==" alt="" />
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB8ElEQVR4AeyTPUtbYRTH/+eWtin0BYpLmwRKp9Ip0FJq7lS7tLiog34CQXATUQdXQRG/gV9AwcFBFwXBl2Qw4iB+ADXqpGh0UKM5/m/uTbzJzWNuEAfBh3Nyn/P6e95i4ZHHM6DuAYc+Il36EtFUbJG6Sf1Yt7OXEBqA1/ke1vylJgAZRsgRCqDb318BMoDy0B7NfG4qm/dMQgFwknNW/8nX5w3yMuSzjdOaAF1teqdr0YSmYx2aivdDEGym0qtrsUFNRzt1Nf5TU7Ga9xIAsPEsrEgOIptQzAA6zuX5V0+zKBEIRqEyBUvX6TnigtLucdLypAKgCgsif7xY4x/FD5zm3voLLb8hggJQ+EffObVRuYZquySzx/7CCoATkORBittu4bwRSJ7N28Ten2NdhQQATlTsvXUPknPsOnoJy2qt1dypqwlwAkWI6Lwzv18lI793F0w5RoBO4wV38d9UeOfXpGa+frizK2dGAKJxm6nGQsZKIri6ai0Z1V8zAFpdVOBFjnBX/WxyQfVLdW45ZgYInJfkJeoGJwle5DDvZgJ68w2CJfpK4sstudyvGQBZYQrfNobQvP+L73uLdlHEPtyR5mwLId10nAGyDMMwAiS518emL8XOjrl/wGAHQiaZ8565XcGo6zEC3PDDf58+4BYAAP//2aDEGwAAAAZJREFUAwAlwo0xbFaQcAAAAABJRU5ErkJggg==" alt="" />
           </div>

           <div className={styles.eval}>
            <span>5.00</span>
            <span>/평가 12개</span>
           </div>
          </div>

          {/* 아이템 */}
          <div className={styles.evalItem}>
           <div className={styles.basicTit}>
            <span>계약한 총 클라이언트</span>
           </div>

           <div className={styles.eval}>
            <span>27건</span>
           </div>
          </div>

          {/* 아이템 */}
          <div className={styles.evalItem}>
           <div className={styles.basicTit}>
            <span>포트폴리오</span>
           </div>

           <div className={styles.eval}>
            <span>5개</span>
           </div>
          </div>

          {/* 아이템 */}
          <div className={styles}>
           <div className={styles.verifyList}>

            <span>
             <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB2UlEQVR4AeyUzSt9QRjHn+f89MvlD7CxIdxQSta2dmwU92ZnoUhKkuNGTSy4siAvKQsrrrcNkrKRDfEHIMrGgq0Sp3Q9vuOlnHNn7kHJxm0+t5nvPPN8Z56ZjkM//PszCC3w75XIXZZONyUn4N5dkjOMe5WSL2/IuKA/JV0kNIXzl4MIMUUxHvOiNIjxl5rRQIjaLFnaLbpVNhoguhCYWoFJzKbZDK4si64t+ovsLkox7uyCRPhFwJ/RANNrmMto0FcyxDehd1FKyaFD3NckMaPKrxNGg0g+jWM6CU6BB86RfAIJFPqER3AEanVfk1iSqn8OHRDT8GiMp7X2jtFA1fP9aJxdUAEiIJqMcXeyiW/1wieiIWxxB0+3DmWpSTu0j5okgsl1bIaBWpBcLBzXtQSPQEC6LyWX0GfUluQl47yNE7Xg6W4S0x4K0j8S53mdMIjPQO1JjpeLowr1ILAE5ADdHOywiIQ6vDs6VqvyHyfaQPIGZmrFCed0kAmfwcMNuQiqBtlapZemAR2Akuxi5+u6b8NngB012gIDenNgbB36DFDLImukf6JMffK75DNAjlkQ2lD3KaUYjyk0FC/7QwwuKwE4jJEYd31YlrUbPEHW4O9M/hmEVu0ZAAD//5yoPLkAAAAGSURBVAMAZJmbMTOP264AAAAASUVORK5CYII=" alt="" />
             신원 인증
            </span>

            <span>
             <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB2UlEQVR4AeyUzSt9QRjHn+f89MvlD7CxIdxQSta2dmwU92ZnoUhKkuNGTSy4siAvKQsrrrcNkrKRDfEHIMrGgq0Sp3Q9vuOlnHNn7kHJxm0+t5nvPPN8Z56ZjkM//PszCC3w75XIXZZONyUn4N5dkjOMe5WSL2/IuKA/JV0kNIXzl4MIMUUxHvOiNIjxl5rRQIjaLFnaLbpVNhoguhCYWoFJzKbZDK4si64t+ovsLkox7uyCRPhFwJ/RANNrmMto0FcyxDehd1FKyaFD3NckMaPKrxNGg0g+jWM6CU6BB86RfAIJFPqER3AEanVfk1iSqn8OHRDT8GiMp7X2jtFA1fP9aJxdUAEiIJqMcXeyiW/1wieiIWxxB0+3DmWpSTu0j5okgsl1bIaBWpBcLBzXtQSPQEC6LyWX0GfUluQl47yNE7Xg6W4S0x4K0j8S53mdMIjPQO1JjpeLowr1ILAE5ADdHOywiIQ6vDs6VqvyHyfaQPIGZmrFCed0kAmfwcMNuQiqBtlapZemAR2Akuxi5+u6b8NngB012gIDenNgbB36DFDLImukf6JMffK75DNAjlkQ2lD3KaUYjyk0FC/7QwwuKwE4jJEYd31YlrUbPEHW4O9M/hmEVu0ZAAD//5yoPLkAAAAGSURBVAMAZJmbMTOP264AAAAASUVORK5CYII=" alt="" />
             연락처 확인
            </span>
           </div>
          </div>

         </div>

        </div>

        {/* 리스트카드 */}
        <div className={styles.companyItem}>

         <div className={styles.imgWrapper}>
          <img className={styles.profileImg} src="https://cdn.wishket.com/profiles/17966_20240704_f34e8af2cd12415a.png" alt="" />
          <div className={styles.badge} >
           <img src="https://www.wishket.com/static/renewal/img/global/badge_partner_prime.svg" alt="" />
          </div>
         </div>

         <div className={styles.introduction}>

          <p className={styles.nickname}>
           tomhoon123
           <span className={styles.activity}>활동가능</span>
          </p>

          <p className={styles.status}>
           <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABM0lEQVR4AexUu27CQBC8cxwXcaREyg+koEyRtKnzDW5st6n5Ixe2aeloqPkESgp6kCgACcv4mAObwtxYPBuEtcNq9nFjdnW2xI2fOxaI47iVJEkfWAGKIEd8kKbpN5t004giNP0BDsDsCYlfpVQX3mhUQEr5Y+wwBz+jKHo3pagA3squGoqieA2CQIIvAeE4zkfJZ5pruK77rH0dVKBeSLgWJaldmApIPLsSISzLmmOZCvwFEFmWTUv+prlGnufGs4xB3XAtUAHsQL/xVueYHdi2XWyLaz9UoFbHqGSJKk4FsIJ982MH1bjO8fsxsuY73gH7y6fG6Yhw0Bg41ha4aBNTMRXAPWijYQg0Gm78CAX/nuet4Q+MCvi+38Mn+QuQTQjDsIV85+DkMkAFyvzF7uYCGwAAAP//jTnTMgAAAAZJREFUAwAWcY0xSdCHdgAAAABJRU5ErkJggg==" alt="" />
           법인사업자
          </p>

          <p className={styles.intro}>
           저희 가구업체는 고객의 생활 공간을 더욱 아름답고 편리하게 만들기 위해 정직한 품질과 감각적인 디자인을 바탕으로 다양한 제품을 제공합니다. 내구성과 실용성을 고려한 제작 과정은 물론, 트렌드를 반영한 세련된 스타일로 집 안의 분위기를 한층 더 고급스럽게 연출합니다. 고객의 만족을 최우선으로 생각하며, 편안함과 아름다움이 조화를 이루는 가구를 통해 공간의 가치를 높여드립니다.
          </p>

          <ul className={styles.characters}>
           <li>
            <span>서울시 활동</span>
           </li>
           <li>
            <span>수상이력 존재</span>
           </li>
           <li>
            <span>투명한 공정과정</span>
           </li>
           <li>
            <span>투명한 공정과정</span>
           </li>
           <li>
            <span>투명한 공정과정</span>
           </li>
          </ul>
         </div>



         <div className={styles.evaluation}>

          {/* 아이템 */}
          <div className={styles.evalItem}>
           <div className={styles.starIcons}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB8ElEQVR4AeyTPUtbYRTH/+eWtin0BYpLmwRKp9Ip0FJq7lS7tLiog34CQXATUQdXQRG/gV9AwcFBFwXBl2Qw4iB+ADXqpGh0UKM5/m/uTbzJzWNuEAfBh3Nyn/P6e95i4ZHHM6DuAYc+Il36EtFUbJG6Sf1Yt7OXEBqA1/ke1vylJgAZRsgRCqDb318BMoDy0B7NfG4qm/dMQgFwknNW/8nX5w3yMuSzjdOaAF1teqdr0YSmYx2aivdDEGym0qtrsUFNRzt1Nf5TU7Ga9xIAsPEsrEgOIptQzAA6zuX5V0+zKBEIRqEyBUvX6TnigtLucdLypAKgCgsif7xY4x/FD5zm3voLLb8hggJQ+EffObVRuYZquySzx/7CCoATkORBittu4bwRSJ7N28Ten2NdhQQATlTsvXUPknPsOnoJy2qt1dypqwlwAkWI6Lwzv18lI793F0w5RoBO4wV38d9UeOfXpGa+frizK2dGAKJxm6nGQsZKIri6ai0Z1V8zAFpdVOBFjnBX/WxyQfVLdW45ZgYInJfkJeoGJwle5DDvZgJ68w2CJfpK4sstudyvGQBZYQrfNobQvP+L73uLdlHEPtyR5mwLId10nAGyDMMwAiS518emL8XOjrl/wGAHQiaZ8565XcGo6zEC3PDDf58+4BYAAP//2aDEGwAAAAZJREFUAwAlwo0xbFaQcAAAAABJRU5ErkJggg==" alt="" />
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB8ElEQVR4AeyTPUtbYRTH/+eWtin0BYpLmwRKp9Ip0FJq7lS7tLiog34CQXATUQdXQRG/gV9AwcFBFwXBl2Qw4iB+ADXqpGh0UKM5/m/uTbzJzWNuEAfBh3Nyn/P6e95i4ZHHM6DuAYc+Il36EtFUbJG6Sf1Yt7OXEBqA1/ke1vylJgAZRsgRCqDb318BMoDy0B7NfG4qm/dMQgFwknNW/8nX5w3yMuSzjdOaAF1teqdr0YSmYx2aivdDEGym0qtrsUFNRzt1Nf5TU7Ga9xIAsPEsrEgOIptQzAA6zuX5V0+zKBEIRqEyBUvX6TnigtLucdLypAKgCgsif7xY4x/FD5zm3voLLb8hggJQ+EffObVRuYZquySzx/7CCoATkORBittu4bwRSJ7N28Ten2NdhQQATlTsvXUPknPsOnoJy2qt1dypqwlwAkWI6Lwzv18lI793F0w5RoBO4wV38d9UeOfXpGa+frizK2dGAKJxm6nGQsZKIri6ai0Z1V8zAFpdVOBFjnBX/WxyQfVLdW45ZgYInJfkJeoGJwle5DDvZgJ68w2CJfpK4sstudyvGQBZYQrfNobQvP+L73uLdlHEPtyR5mwLId10nAGyDMMwAiS518emL8XOjrl/wGAHQiaZ8565XcGo6zEC3PDDf58+4BYAAP//2aDEGwAAAAZJREFUAwAlwo0xbFaQcAAAAABJRU5ErkJggg==" alt="" />
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB8ElEQVR4AeyTPUtbYRTH/+eWtin0BYpLmwRKp9Ip0FJq7lS7tLiog34CQXATUQdXQRG/gV9AwcFBFwXBl2Qw4iB+ADXqpGh0UKM5/m/uTbzJzWNuEAfBh3Nyn/P6e95i4ZHHM6DuAYc+Il36EtFUbJG6Sf1Yt7OXEBqA1/ke1vylJgAZRsgRCqDb318BMoDy0B7NfG4qm/dMQgFwknNW/8nX5w3yMuSzjdOaAF1teqdr0YSmYx2aivdDEGym0qtrsUFNRzt1Nf5TU7Ga9xIAsPEsrEgOIptQzAA6zuX5V0+zKBEIRqEyBUvX6TnigtLucdLypAKgCgsif7xY4x/FD5zm3voLLb8hggJQ+EffObVRuYZquySzx/7CCoATkORBittu4bwRSJ7N28Ten2NdhQQATlTsvXUPknPsOnoJy2qt1dypqwlwAkWI6Lwzv18lI793F0w5RoBO4wV38d9UeOfXpGa+frizK2dGAKJxm6nGQsZKIri6ai0Z1V8zAFpdVOBFjnBX/WxyQfVLdW45ZgYInJfkJeoGJwle5DDvZgJ68w2CJfpK4sstudyvGQBZYQrfNobQvP+L73uLdlHEPtyR5mwLId10nAGyDMMwAiS518emL8XOjrl/wGAHQiaZ8565XcGo6zEC3PDDf58+4BYAAP//2aDEGwAAAAZJREFUAwAlwo0xbFaQcAAAAABJRU5ErkJggg==" alt="" />
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB8ElEQVR4AeyTPUtbYRTH/+eWtin0BYpLmwRKp9Ip0FJq7lS7tLiog34CQXATUQdXQRG/gV9AwcFBFwXBl2Qw4iB+ADXqpGh0UKM5/m/uTbzJzWNuEAfBh3Nyn/P6e95i4ZHHM6DuAYc+Il36EtFUbJG6Sf1Yt7OXEBqA1/ke1vylJgAZRsgRCqDb318BMoDy0B7NfG4qm/dMQgFwknNW/8nX5w3yMuSzjdOaAF1teqdr0YSmYx2aivdDEGym0qtrsUFNRzt1Nf5TU7Ga9xIAsPEsrEgOIptQzAA6zuX5V0+zKBEIRqEyBUvX6TnigtLucdLypAKgCgsif7xY4x/FD5zm3voLLb8hggJQ+EffObVRuYZquySzx/7CCoATkORBittu4bwRSJ7N28Ten2NdhQQATlTsvXUPknPsOnoJy2qt1dypqwlwAkWI6Lwzv18lI793F0w5RoBO4wV38d9UeOfXpGa+frizK2dGAKJxm6nGQsZKIri6ai0Z1V8zAFpdVOBFjnBX/WxyQfVLdW45ZgYInJfkJeoGJwle5DDvZgJ68w2CJfpK4sstudyvGQBZYQrfNobQvP+L73uLdlHEPtyR5mwLId10nAGyDMMwAiS518emL8XOjrl/wGAHQiaZ8565XcGo6zEC3PDDf58+4BYAAP//2aDEGwAAAAZJREFUAwAlwo0xbFaQcAAAAABJRU5ErkJggg==" alt="" />
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB8ElEQVR4AeyTPUtbYRTH/+eWtin0BYpLmwRKp9Ip0FJq7lS7tLiog34CQXATUQdXQRG/gV9AwcFBFwXBl2Qw4iB+ADXqpGh0UKM5/m/uTbzJzWNuEAfBh3Nyn/P6e95i4ZHHM6DuAYc+Il36EtFUbJG6Sf1Yt7OXEBqA1/ke1vylJgAZRsgRCqDb318BMoDy0B7NfG4qm/dMQgFwknNW/8nX5w3yMuSzjdOaAF1teqdr0YSmYx2aivdDEGym0qtrsUFNRzt1Nf5TU7Ga9xIAsPEsrEgOIptQzAA6zuX5V0+zKBEIRqEyBUvX6TnigtLucdLypAKgCgsif7xY4x/FD5zm3voLLb8hggJQ+EffObVRuYZquySzx/7CCoATkORBittu4bwRSJ7N28Ten2NdhQQATlTsvXUPknPsOnoJy2qt1dypqwlwAkWI6Lwzv18lI793F0w5RoBO4wV38d9UeOfXpGa+frizK2dGAKJxm6nGQsZKIri6ai0Z1V8zAFpdVOBFjnBX/WxyQfVLdW45ZgYInJfkJeoGJwle5DDvZgJ68w2CJfpK4sstudyvGQBZYQrfNobQvP+L73uLdlHEPtyR5mwLId10nAGyDMMwAiS518emL8XOjrl/wGAHQiaZ8565XcGo6zEC3PDDf58+4BYAAP//2aDEGwAAAAZJREFUAwAlwo0xbFaQcAAAAABJRU5ErkJggg==" alt="" />
           </div>

           <div className={styles.eval}>
            <span>5.00</span>
            <span>/평가 12개</span>
           </div>
          </div>

          {/* 아이템 */}
          <div className={styles.evalItem}>
           <div className={styles.basicTit}>
            <span>계약한 총 클라이언트</span>
           </div>

           <div className={styles.eval}>
            <span>27건</span>
           </div>
          </div>

          {/* 아이템 */}
          <div className={styles.evalItem}>
           <div className={styles.basicTit}>
            <span>포트폴리오</span>
           </div>

           <div className={styles.eval}>
            <span>5개</span>
           </div>
          </div>

          {/* 아이템 */}
          <div className={styles}>
           <div className={styles.verifyList}>

            <span>
             <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB2UlEQVR4AeyUzSt9QRjHn+f89MvlD7CxIdxQSta2dmwU92ZnoUhKkuNGTSy4siAvKQsrrrcNkrKRDfEHIMrGgq0Sp3Q9vuOlnHNn7kHJxm0+t5nvPPN8Z56ZjkM//PszCC3w75XIXZZONyUn4N5dkjOMe5WSL2/IuKA/JV0kNIXzl4MIMUUxHvOiNIjxl5rRQIjaLFnaLbpVNhoguhCYWoFJzKbZDK4si64t+ovsLkox7uyCRPhFwJ/RANNrmMto0FcyxDehd1FKyaFD3NckMaPKrxNGg0g+jWM6CU6BB86RfAIJFPqER3AEanVfk1iSqn8OHRDT8GiMp7X2jtFA1fP9aJxdUAEiIJqMcXeyiW/1wieiIWxxB0+3DmWpSTu0j5okgsl1bIaBWpBcLBzXtQSPQEC6LyWX0GfUluQl47yNE7Xg6W4S0x4K0j8S53mdMIjPQO1JjpeLowr1ILAE5ADdHOywiIQ6vDs6VqvyHyfaQPIGZmrFCed0kAmfwcMNuQiqBtlapZemAR2Akuxi5+u6b8NngB012gIDenNgbB36DFDLImukf6JMffK75DNAjlkQ2lD3KaUYjyk0FC/7QwwuKwE4jJEYd31YlrUbPEHW4O9M/hmEVu0ZAAD//5yoPLkAAAAGSURBVAMAZJmbMTOP264AAAAASUVORK5CYII=" alt="" />
             신원 인증
            </span>

            <span>
             <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB2UlEQVR4AeyUzSt9QRjHn+f89MvlD7CxIdxQSta2dmwU92ZnoUhKkuNGTSy4siAvKQsrrrcNkrKRDfEHIMrGgq0Sp3Q9vuOlnHNn7kHJxm0+t5nvPPN8Z56ZjkM//PszCC3w75XIXZZONyUn4N5dkjOMe5WSL2/IuKA/JV0kNIXzl4MIMUUxHvOiNIjxl5rRQIjaLFnaLbpVNhoguhCYWoFJzKbZDK4si64t+ovsLkox7uyCRPhFwJ/RANNrmMto0FcyxDehd1FKyaFD3NckMaPKrxNGg0g+jWM6CU6BB86RfAIJFPqER3AEanVfk1iSqn8OHRDT8GiMp7X2jtFA1fP9aJxdUAEiIJqMcXeyiW/1wieiIWxxB0+3DmWpSTu0j5okgsl1bIaBWpBcLBzXtQSPQEC6LyWX0GfUluQl47yNE7Xg6W4S0x4K0j8S53mdMIjPQO1JjpeLowr1ILAE5ADdHOywiIQ6vDs6VqvyHyfaQPIGZmrFCed0kAmfwcMNuQiqBtlapZemAR2Akuxi5+u6b8NngB012gIDenNgbB36DFDLImukf6JMffK75DNAjlkQ2lD3KaUYjyk0FC/7QwwuKwE4jJEYd31YlrUbPEHW4O9M/hmEVu0ZAAD//5yoPLkAAAAGSURBVAMAZJmbMTOP264AAAAASUVORK5CYII=" alt="" />
             연락처 확인
            </span>
           </div>
          </div>

         </div>

        </div>

        {/* 리스트카드 */}
        <div className={styles.companyItem}>

         <div className={styles.imgWrapper}>
          <img className={styles.profileImg} src="https://cdn.wishket.com/profiles/17966_20240704_f34e8af2cd12415a.png" alt="" />
          <div className={styles.badge} >
           <img src="https://www.wishket.com/static/renewal/img/global/badge_partner_prime.svg" alt="" />
          </div>
         </div>

         <div className={styles.introduction}>

          <p className={styles.nickname}>
           tomhoon123
           <span className={styles.activity}>활동가능</span>
          </p>

          <p className={styles.status}>
           <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABM0lEQVR4AexUu27CQBC8cxwXcaREyg+koEyRtKnzDW5st6n5Ixe2aeloqPkESgp6kCgACcv4mAObwtxYPBuEtcNq9nFjdnW2xI2fOxaI47iVJEkfWAGKIEd8kKbpN5t004giNP0BDsDsCYlfpVQX3mhUQEr5Y+wwBz+jKHo3pagA3squGoqieA2CQIIvAeE4zkfJZ5pruK77rH0dVKBeSLgWJaldmApIPLsSISzLmmOZCvwFEFmWTUv+prlGnufGs4xB3XAtUAHsQL/xVueYHdi2XWyLaz9UoFbHqGSJKk4FsIJ982MH1bjO8fsxsuY73gH7y6fG6Yhw0Bg41ha4aBNTMRXAPWijYQg0Gm78CAX/nuet4Q+MCvi+38Mn+QuQTQjDsIV85+DkMkAFyvzF7uYCGwAAAP//jTnTMgAAAAZJREFUAwAWcY0xSdCHdgAAAABJRU5ErkJggg==" alt="" />
           법인사업자
          </p>

          <p className={styles.intro}>
           저희 가구업체는 고객의 생활 공간을 더욱 아름답고 편리하게 만들기 위해 정직한 품질과 감각적인 디자인을 바탕으로 다양한 제품을 제공합니다. 내구성과 실용성을 고려한 제작 과정은 물론, 트렌드를 반영한 세련된 스타일로 집 안의 분위기를 한층 더 고급스럽게 연출합니다. 고객의 만족을 최우선으로 생각하며, 편안함과 아름다움이 조화를 이루는 가구를 통해 공간의 가치를 높여드립니다.
          </p>

          <ul className={styles.characters}>
           <li>
            <span>서울시 활동</span>
           </li>
           <li>
            <span>수상이력 존재</span>
           </li>
           <li>
            <span>투명한 공정과정</span>
           </li>
           <li>
            <span>투명한 공정과정</span>
           </li>
           <li>
            <span>투명한 공정과정</span>
           </li>
          </ul>
         </div>



         <div className={styles.evaluation}>

          {/* 아이템 */}
          <div className={styles.evalItem}>
           <div className={styles.starIcons}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB8ElEQVR4AeyTPUtbYRTH/+eWtin0BYpLmwRKp9Ip0FJq7lS7tLiog34CQXATUQdXQRG/gV9AwcFBFwXBl2Qw4iB+ADXqpGh0UKM5/m/uTbzJzWNuEAfBh3Nyn/P6e95i4ZHHM6DuAYc+Il36EtFUbJG6Sf1Yt7OXEBqA1/ke1vylJgAZRsgRCqDb318BMoDy0B7NfG4qm/dMQgFwknNW/8nX5w3yMuSzjdOaAF1teqdr0YSmYx2aivdDEGym0qtrsUFNRzt1Nf5TU7Ga9xIAsPEsrEgOIptQzAA6zuX5V0+zKBEIRqEyBUvX6TnigtLucdLypAKgCgsif7xY4x/FD5zm3voLLb8hggJQ+EffObVRuYZquySzx/7CCoATkORBittu4bwRSJ7N28Ten2NdhQQATlTsvXUPknPsOnoJy2qt1dypqwlwAkWI6Lwzv18lI793F0w5RoBO4wV38d9UeOfXpGa+frizK2dGAKJxm6nGQsZKIri6ai0Z1V8zAFpdVOBFjnBX/WxyQfVLdW45ZgYInJfkJeoGJwle5DDvZgJ68w2CJfpK4sstudyvGQBZYQrfNobQvP+L73uLdlHEPtyR5mwLId10nAGyDMMwAiS518emL8XOjrl/wGAHQiaZ8565XcGo6zEC3PDDf58+4BYAAP//2aDEGwAAAAZJREFUAwAlwo0xbFaQcAAAAABJRU5ErkJggg==" alt="" />
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB8ElEQVR4AeyTPUtbYRTH/+eWtin0BYpLmwRKp9Ip0FJq7lS7tLiog34CQXATUQdXQRG/gV9AwcFBFwXBl2Qw4iB+ADXqpGh0UKM5/m/uTbzJzWNuEAfBh3Nyn/P6e95i4ZHHM6DuAYc+Il36EtFUbJG6Sf1Yt7OXEBqA1/ke1vylJgAZRsgRCqDb318BMoDy0B7NfG4qm/dMQgFwknNW/8nX5w3yMuSzjdOaAF1teqdr0YSmYx2aivdDEGym0qtrsUFNRzt1Nf5TU7Ga9xIAsPEsrEgOIptQzAA6zuX5V0+zKBEIRqEyBUvX6TnigtLucdLypAKgCgsif7xY4x/FD5zm3voLLb8hggJQ+EffObVRuYZquySzx/7CCoATkORBittu4bwRSJ7N28Ten2NdhQQATlTsvXUPknPsOnoJy2qt1dypqwlwAkWI6Lwzv18lI793F0w5RoBO4wV38d9UeOfXpGa+frizK2dGAKJxm6nGQsZKIri6ai0Z1V8zAFpdVOBFjnBX/WxyQfVLdW45ZgYInJfkJeoGJwle5DDvZgJ68w2CJfpK4sstudyvGQBZYQrfNobQvP+L73uLdlHEPtyR5mwLId10nAGyDMMwAiS518emL8XOjrl/wGAHQiaZ8565XcGo6zEC3PDDf58+4BYAAP//2aDEGwAAAAZJREFUAwAlwo0xbFaQcAAAAABJRU5ErkJggg==" alt="" />
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB8ElEQVR4AeyTPUtbYRTH/+eWtin0BYpLmwRKp9Ip0FJq7lS7tLiog34CQXATUQdXQRG/gV9AwcFBFwXBl2Qw4iB+ADXqpGh0UKM5/m/uTbzJzWNuEAfBh3Nyn/P6e95i4ZHHM6DuAYc+Il36EtFUbJG6Sf1Yt7OXEBqA1/ke1vylJgAZRsgRCqDb318BMoDy0B7NfG4qm/dMQgFwknNW/8nX5w3yMuSzjdOaAF1teqdr0YSmYx2aivdDEGym0qtrsUFNRzt1Nf5TU7Ga9xIAsPEsrEgOIptQzAA6zuX5V0+zKBEIRqEyBUvX6TnigtLucdLypAKgCgsif7xY4x/FD5zm3voLLb8hggJQ+EffObVRuYZquySzx/7CCoATkORBittu4bwRSJ7N28Ten2NdhQQATlTsvXUPknPsOnoJy2qt1dypqwlwAkWI6Lwzv18lI793F0w5RoBO4wV38d9UeOfXpGa+frizK2dGAKJxm6nGQsZKIri6ai0Z1V8zAFpdVOBFjnBX/WxyQfVLdW45ZgYInJfkJeoGJwle5DDvZgJ68w2CJfpK4sstudyvGQBZYQrfNobQvP+L73uLdlHEPtyR5mwLId10nAGyDMMwAiS518emL8XOjrl/wGAHQiaZ8565XcGo6zEC3PDDf58+4BYAAP//2aDEGwAAAAZJREFUAwAlwo0xbFaQcAAAAABJRU5ErkJggg==" alt="" />
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB8ElEQVR4AeyTPUtbYRTH/+eWtin0BYpLmwRKp9Ip0FJq7lS7tLiog34CQXATUQdXQRG/gV9AwcFBFwXBl2Qw4iB+ADXqpGh0UKM5/m/uTbzJzWNuEAfBh3Nyn/P6e95i4ZHHM6DuAYc+Il36EtFUbJG6Sf1Yt7OXEBqA1/ke1vylJgAZRsgRCqDb318BMoDy0B7NfG4qm/dMQgFwknNW/8nX5w3yMuSzjdOaAF1teqdr0YSmYx2aivdDEGym0qtrsUFNRzt1Nf5TU7Ga9xIAsPEsrEgOIptQzAA6zuX5V0+zKBEIRqEyBUvX6TnigtLucdLypAKgCgsif7xY4x/FD5zm3voLLb8hggJQ+EffObVRuYZquySzx/7CCoATkORBittu4bwRSJ7N28Ten2NdhQQATlTsvXUPknPsOnoJy2qt1dypqwlwAkWI6Lwzv18lI793F0w5RoBO4wV38d9UeOfXpGa+frizK2dGAKJxm6nGQsZKIri6ai0Z1V8zAFpdVOBFjnBX/WxyQfVLdW45ZgYInJfkJeoGJwle5DDvZgJ68w2CJfpK4sstudyvGQBZYQrfNobQvP+L73uLdlHEPtyR5mwLId10nAGyDMMwAiS518emL8XOjrl/wGAHQiaZ8565XcGo6zEC3PDDf58+4BYAAP//2aDEGwAAAAZJREFUAwAlwo0xbFaQcAAAAABJRU5ErkJggg==" alt="" />
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB8ElEQVR4AeyTPUtbYRTH/+eWtin0BYpLmwRKp9Ip0FJq7lS7tLiog34CQXATUQdXQRG/gV9AwcFBFwXBl2Qw4iB+ADXqpGh0UKM5/m/uTbzJzWNuEAfBh3Nyn/P6e95i4ZHHM6DuAYc+Il36EtFUbJG6Sf1Yt7OXEBqA1/ke1vylJgAZRsgRCqDb318BMoDy0B7NfG4qm/dMQgFwknNW/8nX5w3yMuSzjdOaAF1teqdr0YSmYx2aivdDEGym0qtrsUFNRzt1Nf5TU7Ga9xIAsPEsrEgOIptQzAA6zuX5V0+zKBEIRqEyBUvX6TnigtLucdLypAKgCgsif7xY4x/FD5zm3voLLb8hggJQ+EffObVRuYZquySzx/7CCoATkORBittu4bwRSJ7N28Ten2NdhQQATlTsvXUPknPsOnoJy2qt1dypqwlwAkWI6Lwzv18lI793F0w5RoBO4wV38d9UeOfXpGa+frizK2dGAKJxm6nGQsZKIri6ai0Z1V8zAFpdVOBFjnBX/WxyQfVLdW45ZgYInJfkJeoGJwle5DDvZgJ68w2CJfpK4sstudyvGQBZYQrfNobQvP+L73uLdlHEPtyR5mwLId10nAGyDMMwAiS518emL8XOjrl/wGAHQiaZ8565XcGo6zEC3PDDf58+4BYAAP//2aDEGwAAAAZJREFUAwAlwo0xbFaQcAAAAABJRU5ErkJggg==" alt="" />
           </div>

           <div className={styles.eval}>
            <span>5.00</span>
            <span>/평가 12개</span>
           </div>
          </div>

          {/* 아이템 */}
          <div className={styles.evalItem}>
           <div className={styles.basicTit}>
            <span>계약한 총 클라이언트</span>
           </div>

           <div className={styles.eval}>
            <span>27건</span>
           </div>
          </div>

          {/* 아이템 */}
          <div className={styles.evalItem}>
           <div className={styles.basicTit}>
            <span>포트폴리오</span>
           </div>

           <div className={styles.eval}>
            <span>5개</span>
           </div>
          </div>

          {/* 아이템 */}
          <div className={styles}>
           <div className={styles.verifyList}>

            <span>
             <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB2UlEQVR4AeyUzSt9QRjHn+f89MvlD7CxIdxQSta2dmwU92ZnoUhKkuNGTSy4siAvKQsrrrcNkrKRDfEHIMrGgq0Sp3Q9vuOlnHNn7kHJxm0+t5nvPPN8Z56ZjkM//PszCC3w75XIXZZONyUn4N5dkjOMe5WSL2/IuKA/JV0kNIXzl4MIMUUxHvOiNIjxl5rRQIjaLFnaLbpVNhoguhCYWoFJzKbZDK4si64t+ovsLkox7uyCRPhFwJ/RANNrmMto0FcyxDehd1FKyaFD3NckMaPKrxNGg0g+jWM6CU6BB86RfAIJFPqER3AEanVfk1iSqn8OHRDT8GiMp7X2jtFA1fP9aJxdUAEiIJqMcXeyiW/1wieiIWxxB0+3DmWpSTu0j5okgsl1bIaBWpBcLBzXtQSPQEC6LyWX0GfUluQl47yNE7Xg6W4S0x4K0j8S53mdMIjPQO1JjpeLowr1ILAE5ADdHOywiIQ6vDs6VqvyHyfaQPIGZmrFCed0kAmfwcMNuQiqBtlapZemAR2Akuxi5+u6b8NngB012gIDenNgbB36DFDLImukf6JMffK75DNAjlkQ2lD3KaUYjyk0FC/7QwwuKwE4jJEYd31YlrUbPEHW4O9M/hmEVu0ZAAD//5yoPLkAAAAGSURBVAMAZJmbMTOP264AAAAASUVORK5CYII=" alt="" />
             신원 인증
            </span>

            <span>
             <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB2UlEQVR4AeyUzSt9QRjHn+f89MvlD7CxIdxQSta2dmwU92ZnoUhKkuNGTSy4siAvKQsrrrcNkrKRDfEHIMrGgq0Sp3Q9vuOlnHNn7kHJxm0+t5nvPPN8Z56ZjkM//PszCC3w75XIXZZONyUn4N5dkjOMe5WSL2/IuKA/JV0kNIXzl4MIMUUxHvOiNIjxl5rRQIjaLFnaLbpVNhoguhCYWoFJzKbZDK4si64t+ovsLkox7uyCRPhFwJ/RANNrmMto0FcyxDehd1FKyaFD3NckMaPKrxNGg0g+jWM6CU6BB86RfAIJFPqER3AEanVfk1iSqn8OHRDT8GiMp7X2jtFA1fP9aJxdUAEiIJqMcXeyiW/1wieiIWxxB0+3DmWpSTu0j5okgsl1bIaBWpBcLBzXtQSPQEC6LyWX0GfUluQl47yNE7Xg6W4S0x4K0j8S53mdMIjPQO1JjpeLowr1ILAE5ADdHOywiIQ6vDs6VqvyHyfaQPIGZmrFCed0kAmfwcMNuQiqBtlapZemAR2Akuxi5+u6b8NngB012gIDenNgbB36DFDLImukf6JMffK75DNAjlkQ2lD3KaUYjyk0FC/7QwwuKwE4jJEYd31YlrUbPEHW4O9M/hmEVu0ZAAD//5yoPLkAAAAGSURBVAMAZJmbMTOP264AAAAASUVORK5CYII=" alt="" />
             연락처 확인
            </span>
           </div>
          </div>

         </div>

        </div>

        {/* 리스트카드 */}
        <div className={styles.companyItem}>

         <div className={styles.imgWrapper}>
          <img className={styles.profileImg} src="https://cdn.wishket.com/profiles/17966_20240704_f34e8af2cd12415a.png" alt="" />
          <div className={styles.badge} >
           <img src="https://www.wishket.com/static/renewal/img/global/badge_partner_prime.svg" alt="" />
          </div>
         </div>

         <div className={styles.introduction}>

          <p className={styles.nickname}>
           tomhoon123
           <span className={styles.activity}>활동가능</span>
          </p>

          <p className={styles.status}>
           <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABM0lEQVR4AexUu27CQBC8cxwXcaREyg+koEyRtKnzDW5st6n5Ixe2aeloqPkESgp6kCgACcv4mAObwtxYPBuEtcNq9nFjdnW2xI2fOxaI47iVJEkfWAGKIEd8kKbpN5t004giNP0BDsDsCYlfpVQX3mhUQEr5Y+wwBz+jKHo3pagA3squGoqieA2CQIIvAeE4zkfJZ5pruK77rH0dVKBeSLgWJaldmApIPLsSISzLmmOZCvwFEFmWTUv+prlGnufGs4xB3XAtUAHsQL/xVueYHdi2XWyLaz9UoFbHqGSJKk4FsIJ982MH1bjO8fsxsuY73gH7y6fG6Yhw0Bg41ha4aBNTMRXAPWijYQg0Gm78CAX/nuet4Q+MCvi+38Mn+QuQTQjDsIV85+DkMkAFyvzF7uYCGwAAAP//jTnTMgAAAAZJREFUAwAWcY0xSdCHdgAAAABJRU5ErkJggg==" alt="" />
           법인사업자
          </p>

          <p className={styles.intro}>
           저희 가구업체는 고객의 생활 공간을 더욱 아름답고 편리하게 만들기 위해 정직한 품질과 감각적인 디자인을 바탕으로 다양한 제품을 제공합니다. 내구성과 실용성을 고려한 제작 과정은 물론, 트렌드를 반영한 세련된 스타일로 집 안의 분위기를 한층 더 고급스럽게 연출합니다. 고객의 만족을 최우선으로 생각하며, 편안함과 아름다움이 조화를 이루는 가구를 통해 공간의 가치를 높여드립니다.
          </p>

          <ul className={styles.characters}>
           <li>
            <span>서울시 활동</span>
           </li>
           <li>
            <span>수상이력 존재</span>
           </li>
           <li>
            <span>투명한 공정과정</span>
           </li>
           <li>
            <span>투명한 공정과정</span>
           </li>
           <li>
            <span>투명한 공정과정</span>
           </li>
          </ul>
         </div>



         <div className={styles.evaluation}>

          {/* 아이템 */}
          <div className={styles.evalItem}>
           <div className={styles.starIcons}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB8ElEQVR4AeyTPUtbYRTH/+eWtin0BYpLmwRKp9Ip0FJq7lS7tLiog34CQXATUQdXQRG/gV9AwcFBFwXBl2Qw4iB+ADXqpGh0UKM5/m/uTbzJzWNuEAfBh3Nyn/P6e95i4ZHHM6DuAYc+Il36EtFUbJG6Sf1Yt7OXEBqA1/ke1vylJgAZRsgRCqDb318BMoDy0B7NfG4qm/dMQgFwknNW/8nX5w3yMuSzjdOaAF1teqdr0YSmYx2aivdDEGym0qtrsUFNRzt1Nf5TU7Ga9xIAsPEsrEgOIptQzAA6zuX5V0+zKBEIRqEyBUvX6TnigtLucdLypAKgCgsif7xY4x/FD5zm3voLLb8hggJQ+EffObVRuYZquySzx/7CCoATkORBittu4bwRSJ7N28Ten2NdhQQATlTsvXUPknPsOnoJy2qt1dypqwlwAkWI6Lwzv18lI793F0w5RoBO4wV38d9UeOfXpGa+frizK2dGAKJxm6nGQsZKIri6ai0Z1V8zAFpdVOBFjnBX/WxyQfVLdW45ZgYInJfkJeoGJwle5DDvZgJ68w2CJfpK4sstudyvGQBZYQrfNobQvP+L73uLdlHEPtyR5mwLId10nAGyDMMwAiS518emL8XOjrl/wGAHQiaZ8565XcGo6zEC3PDDf58+4BYAAP//2aDEGwAAAAZJREFUAwAlwo0xbFaQcAAAAABJRU5ErkJggg==" alt="" />
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB8ElEQVR4AeyTPUtbYRTH/+eWtin0BYpLmwRKp9Ip0FJq7lS7tLiog34CQXATUQdXQRG/gV9AwcFBFwXBl2Qw4iB+ADXqpGh0UKM5/m/uTbzJzWNuEAfBh3Nyn/P6e95i4ZHHM6DuAYc+Il36EtFUbJG6Sf1Yt7OXEBqA1/ke1vylJgAZRsgRCqDb318BMoDy0B7NfG4qm/dMQgFwknNW/8nX5w3yMuSzjdOaAF1teqdr0YSmYx2aivdDEGym0qtrsUFNRzt1Nf5TU7Ga9xIAsPEsrEgOIptQzAA6zuX5V0+zKBEIRqEyBUvX6TnigtLucdLypAKgCgsif7xY4x/FD5zm3voLLb8hggJQ+EffObVRuYZquySzx/7CCoATkORBittu4bwRSJ7N28Ten2NdhQQATlTsvXUPknPsOnoJy2qt1dypqwlwAkWI6Lwzv18lI793F0w5RoBO4wV38d9UeOfXpGa+frizK2dGAKJxm6nGQsZKIri6ai0Z1V8zAFpdVOBFjnBX/WxyQfVLdW45ZgYInJfkJeoGJwle5DDvZgJ68w2CJfpK4sstudyvGQBZYQrfNobQvP+L73uLdlHEPtyR5mwLId10nAGyDMMwAiS518emL8XOjrl/wGAHQiaZ8565XcGo6zEC3PDDf58+4BYAAP//2aDEGwAAAAZJREFUAwAlwo0xbFaQcAAAAABJRU5ErkJggg==" alt="" />
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB8ElEQVR4AeyTPUtbYRTH/+eWtin0BYpLmwRKp9Ip0FJq7lS7tLiog34CQXATUQdXQRG/gV9AwcFBFwXBl2Qw4iB+ADXqpGh0UKM5/m/uTbzJzWNuEAfBh3Nyn/P6e95i4ZHHM6DuAYc+Il36EtFUbJG6Sf1Yt7OXEBqA1/ke1vylJgAZRsgRCqDb318BMoDy0B7NfG4qm/dMQgFwknNW/8nX5w3yMuSzjdOaAF1teqdr0YSmYx2aivdDEGym0qtrsUFNRzt1Nf5TU7Ga9xIAsPEsrEgOIptQzAA6zuX5V0+zKBEIRqEyBUvX6TnigtLucdLypAKgCgsif7xY4x/FD5zm3voLLb8hggJQ+EffObVRuYZquySzx/7CCoATkORBittu4bwRSJ7N28Ten2NdhQQATlTsvXUPknPsOnoJy2qt1dypqwlwAkWI6Lwzv18lI793F0w5RoBO4wV38d9UeOfXpGa+frizK2dGAKJxm6nGQsZKIri6ai0Z1V8zAFpdVOBFjnBX/WxyQfVLdW45ZgYInJfkJeoGJwle5DDvZgJ68w2CJfpK4sstudyvGQBZYQrfNobQvP+L73uLdlHEPtyR5mwLId10nAGyDMMwAiS518emL8XOjrl/wGAHQiaZ8565XcGo6zEC3PDDf58+4BYAAP//2aDEGwAAAAZJREFUAwAlwo0xbFaQcAAAAABJRU5ErkJggg==" alt="" />
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB8ElEQVR4AeyTPUtbYRTH/+eWtin0BYpLmwRKp9Ip0FJq7lS7tLiog34CQXATUQdXQRG/gV9AwcFBFwXBl2Qw4iB+ADXqpGh0UKM5/m/uTbzJzWNuEAfBh3Nyn/P6e95i4ZHHM6DuAYc+Il36EtFUbJG6Sf1Yt7OXEBqA1/ke1vylJgAZRsgRCqDb318BMoDy0B7NfG4qm/dMQgFwknNW/8nX5w3yMuSzjdOaAF1teqdr0YSmYx2aivdDEGym0qtrsUFNRzt1Nf5TU7Ga9xIAsPEsrEgOIptQzAA6zuX5V0+zKBEIRqEyBUvX6TnigtLucdLypAKgCgsif7xY4x/FD5zm3voLLb8hggJQ+EffObVRuYZquySzx/7CCoATkORBittu4bwRSJ7N28Ten2NdhQQATlTsvXUPknPsOnoJy2qt1dypqwlwAkWI6Lwzv18lI793F0w5RoBO4wV38d9UeOfXpGa+frizK2dGAKJxm6nGQsZKIri6ai0Z1V8zAFpdVOBFjnBX/WxyQfVLdW45ZgYInJfkJeoGJwle5DDvZgJ68w2CJfpK4sstudyvGQBZYQrfNobQvP+L73uLdlHEPtyR5mwLId10nAGyDMMwAiS518emL8XOjrl/wGAHQiaZ8565XcGo6zEC3PDDf58+4BYAAP//2aDEGwAAAAZJREFUAwAlwo0xbFaQcAAAAABJRU5ErkJggg==" alt="" />
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB8ElEQVR4AeyTPUtbYRTH/+eWtin0BYpLmwRKp9Ip0FJq7lS7tLiog34CQXATUQdXQRG/gV9AwcFBFwXBl2Qw4iB+ADXqpGh0UKM5/m/uTbzJzWNuEAfBh3Nyn/P6e95i4ZHHM6DuAYc+Il36EtFUbJG6Sf1Yt7OXEBqA1/ke1vylJgAZRsgRCqDb318BMoDy0B7NfG4qm/dMQgFwknNW/8nX5w3yMuSzjdOaAF1teqdr0YSmYx2aivdDEGym0qtrsUFNRzt1Nf5TU7Ga9xIAsPEsrEgOIptQzAA6zuX5V0+zKBEIRqEyBUvX6TnigtLucdLypAKgCgsif7xY4x/FD5zm3voLLb8hggJQ+EffObVRuYZquySzx/7CCoATkORBittu4bwRSJ7N28Ten2NdhQQATlTsvXUPknPsOnoJy2qt1dypqwlwAkWI6Lwzv18lI793F0w5RoBO4wV38d9UeOfXpGa+frizK2dGAKJxm6nGQsZKIri6ai0Z1V8zAFpdVOBFjnBX/WxyQfVLdW45ZgYInJfkJeoGJwle5DDvZgJ68w2CJfpK4sstudyvGQBZYQrfNobQvP+L73uLdlHEPtyR5mwLId10nAGyDMMwAiS518emL8XOjrl/wGAHQiaZ8565XcGo6zEC3PDDf58+4BYAAP//2aDEGwAAAAZJREFUAwAlwo0xbFaQcAAAAABJRU5ErkJggg==" alt="" />
           </div>

           <div className={styles.eval}>
            <span>5.00</span>
            <span>/평가 12개</span>
           </div>
          </div>

          {/* 아이템 */}
          <div className={styles.evalItem}>
           <div className={styles.basicTit}>
            <span>계약한 총 클라이언트</span>
           </div>

           <div className={styles.eval}>
            <span>27건</span>
           </div>
          </div>

          {/* 아이템 */}
          <div className={styles.evalItem}>
           <div className={styles.basicTit}>
            <span>포트폴리오</span>
           </div>

           <div className={styles.eval}>
            <span>5개</span>
           </div>
          </div>

          {/* 아이템 */}
          <div className={styles}>
           <div className={styles.verifyList}>

            <span>
             <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB2UlEQVR4AeyUzSt9QRjHn+f89MvlD7CxIdxQSta2dmwU92ZnoUhKkuNGTSy4siAvKQsrrrcNkrKRDfEHIMrGgq0Sp3Q9vuOlnHNn7kHJxm0+t5nvPPN8Z56ZjkM//PszCC3w75XIXZZONyUn4N5dkjOMe5WSL2/IuKA/JV0kNIXzl4MIMUUxHvOiNIjxl5rRQIjaLFnaLbpVNhoguhCYWoFJzKbZDK4si64t+ovsLkox7uyCRPhFwJ/RANNrmMto0FcyxDehd1FKyaFD3NckMaPKrxNGg0g+jWM6CU6BB86RfAIJFPqER3AEanVfk1iSqn8OHRDT8GiMp7X2jtFA1fP9aJxdUAEiIJqMcXeyiW/1wieiIWxxB0+3DmWpSTu0j5okgsl1bIaBWpBcLBzXtQSPQEC6LyWX0GfUluQl47yNE7Xg6W4S0x4K0j8S53mdMIjPQO1JjpeLowr1ILAE5ADdHOywiIQ6vDs6VqvyHyfaQPIGZmrFCed0kAmfwcMNuQiqBtlapZemAR2Akuxi5+u6b8NngB012gIDenNgbB36DFDLImukf6JMffK75DNAjlkQ2lD3KaUYjyk0FC/7QwwuKwE4jJEYd31YlrUbPEHW4O9M/hmEVu0ZAAD//5yoPLkAAAAGSURBVAMAZJmbMTOP264AAAAASUVORK5CYII=" alt="" />
             신원 인증
            </span>

            <span>
             <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB2UlEQVR4AeyUzSt9QRjHn+f89MvlD7CxIdxQSta2dmwU92ZnoUhKkuNGTSy4siAvKQsrrrcNkrKRDfEHIMrGgq0Sp3Q9vuOlnHNn7kHJxm0+t5nvPPN8Z56ZjkM//PszCC3w75XIXZZONyUn4N5dkjOMe5WSL2/IuKA/JV0kNIXzl4MIMUUxHvOiNIjxl5rRQIjaLFnaLbpVNhoguhCYWoFJzKbZDK4si64t+ovsLkox7uyCRPhFwJ/RANNrmMto0FcyxDehd1FKyaFD3NckMaPKrxNGg0g+jWM6CU6BB86RfAIJFPqER3AEanVfk1iSqn8OHRDT8GiMp7X2jtFA1fP9aJxdUAEiIJqMcXeyiW/1wieiIWxxB0+3DmWpSTu0j5okgsl1bIaBWpBcLBzXtQSPQEC6LyWX0GfUluQl47yNE7Xg6W4S0x4K0j8S53mdMIjPQO1JjpeLowr1ILAE5ADdHOywiIQ6vDs6VqvyHyfaQPIGZmrFCed0kAmfwcMNuQiqBtlapZemAR2Akuxi5+u6b8NngB012gIDenNgbB36DFDLImukf6JMffK75DNAjlkQ2lD3KaUYjyk0FC/7QwwuKwE4jJEYd31YlrUbPEHW4O9M/hmEVu0ZAAD//5yoPLkAAAAGSURBVAMAZJmbMTOP264AAAAASUVORK5CYII=" alt="" />
             연락처 확인
            </span>
           </div>
          </div>

         </div>

        </div>

        {/* 리스트카드 */}
        <div className={styles.companyItem}>

         <div className={styles.imgWrapper}>
          <img className={styles.profileImg} src="https://cdn.wishket.com/profiles/17966_20240704_f34e8af2cd12415a.png" alt="" />
          <div className={styles.badge} >
           <img src="https://www.wishket.com/static/renewal/img/global/badge_partner_prime.svg" alt="" />
          </div>
         </div>

         <div className={styles.introduction}>

          <p className={styles.nickname}>
           tomhoon123
           <span className={styles.activity}>활동가능</span>
          </p>

          <p className={styles.status}>
           <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABM0lEQVR4AexUu27CQBC8cxwXcaREyg+koEyRtKnzDW5st6n5Ixe2aeloqPkESgp6kCgACcv4mAObwtxYPBuEtcNq9nFjdnW2xI2fOxaI47iVJEkfWAGKIEd8kKbpN5t004giNP0BDsDsCYlfpVQX3mhUQEr5Y+wwBz+jKHo3pagA3squGoqieA2CQIIvAeE4zkfJZ5pruK77rH0dVKBeSLgWJaldmApIPLsSISzLmmOZCvwFEFmWTUv+prlGnufGs4xB3XAtUAHsQL/xVueYHdi2XWyLaz9UoFbHqGSJKk4FsIJ982MH1bjO8fsxsuY73gH7y6fG6Yhw0Bg41ha4aBNTMRXAPWijYQg0Gm78CAX/nuet4Q+MCvi+38Mn+QuQTQjDsIV85+DkMkAFyvzF7uYCGwAAAP//jTnTMgAAAAZJREFUAwAWcY0xSdCHdgAAAABJRU5ErkJggg==" alt="" />
           법인사업자
          </p>

          <p className={styles.intro}>
           저희 가구업체는 고객의 생활 공간을 더욱 아름답고 편리하게 만들기 위해 정직한 품질과 감각적인 디자인을 바탕으로 다양한 제품을 제공합니다. 내구성과 실용성을 고려한 제작 과정은 물론, 트렌드를 반영한 세련된 스타일로 집 안의 분위기를 한층 더 고급스럽게 연출합니다. 고객의 만족을 최우선으로 생각하며, 편안함과 아름다움이 조화를 이루는 가구를 통해 공간의 가치를 높여드립니다.
          </p>

          <ul className={styles.characters}>
           <li>
            <span>서울시 활동</span>
           </li>
           <li>
            <span>수상이력 존재</span>
           </li>
           <li>
            <span>투명한 공정과정</span>
           </li>
           <li>
            <span>투명한 공정과정</span>
           </li>
           <li>
            <span>투명한 공정과정</span>
           </li>
          </ul>
         </div>



         <div className={styles.evaluation}>

          {/* 아이템 */}
          <div className={styles.evalItem}>
           <div className={styles.starIcons}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB8ElEQVR4AeyTPUtbYRTH/+eWtin0BYpLmwRKp9Ip0FJq7lS7tLiog34CQXATUQdXQRG/gV9AwcFBFwXBl2Qw4iB+ADXqpGh0UKM5/m/uTbzJzWNuEAfBh3Nyn/P6e95i4ZHHM6DuAYc+Il36EtFUbJG6Sf1Yt7OXEBqA1/ke1vylJgAZRsgRCqDb318BMoDy0B7NfG4qm/dMQgFwknNW/8nX5w3yMuSzjdOaAF1teqdr0YSmYx2aivdDEGym0qtrsUFNRzt1Nf5TU7Ga9xIAsPEsrEgOIptQzAA6zuX5V0+zKBEIRqEyBUvX6TnigtLucdLypAKgCgsif7xY4x/FD5zm3voLLb8hggJQ+EffObVRuYZquySzx/7CCoATkORBittu4bwRSJ7N28Ten2NdhQQATlTsvXUPknPsOnoJy2qt1dypqwlwAkWI6Lwzv18lI793F0w5RoBO4wV38d9UeOfXpGa+frizK2dGAKJxm6nGQsZKIri6ai0Z1V8zAFpdVOBFjnBX/WxyQfVLdW45ZgYInJfkJeoGJwle5DDvZgJ68w2CJfpK4sstudyvGQBZYQrfNobQvP+L73uLdlHEPtyR5mwLId10nAGyDMMwAiS518emL8XOjrl/wGAHQiaZ8565XcGo6zEC3PDDf58+4BYAAP//2aDEGwAAAAZJREFUAwAlwo0xbFaQcAAAAABJRU5ErkJggg==" alt="" />
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB8ElEQVR4AeyTPUtbYRTH/+eWtin0BYpLmwRKp9Ip0FJq7lS7tLiog34CQXATUQdXQRG/gV9AwcFBFwXBl2Qw4iB+ADXqpGh0UKM5/m/uTbzJzWNuEAfBh3Nyn/P6e95i4ZHHM6DuAYc+Il36EtFUbJG6Sf1Yt7OXEBqA1/ke1vylJgAZRsgRCqDb318BMoDy0B7NfG4qm/dMQgFwknNW/8nX5w3yMuSzjdOaAF1teqdr0YSmYx2aivdDEGym0qtrsUFNRzt1Nf5TU7Ga9xIAsPEsrEgOIptQzAA6zuX5V0+zKBEIRqEyBUvX6TnigtLucdLypAKgCgsif7xY4x/FD5zm3voLLb8hggJQ+EffObVRuYZquySzx/7CCoATkORBittu4bwRSJ7N28Ten2NdhQQATlTsvXUPknPsOnoJy2qt1dypqwlwAkWI6Lwzv18lI793F0w5RoBO4wV38d9UeOfXpGa+frizK2dGAKJxm6nGQsZKIri6ai0Z1V8zAFpdVOBFjnBX/WxyQfVLdW45ZgYInJfkJeoGJwle5DDvZgJ68w2CJfpK4sstudyvGQBZYQrfNobQvP+L73uLdlHEPtyR5mwLId10nAGyDMMwAiS518emL8XOjrl/wGAHQiaZ8565XcGo6zEC3PDDf58+4BYAAP//2aDEGwAAAAZJREFUAwAlwo0xbFaQcAAAAABJRU5ErkJggg==" alt="" />
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB8ElEQVR4AeyTPUtbYRTH/+eWtin0BYpLmwRKp9Ip0FJq7lS7tLiog34CQXATUQdXQRG/gV9AwcFBFwXBl2Qw4iB+ADXqpGh0UKM5/m/uTbzJzWNuEAfBh3Nyn/P6e95i4ZHHM6DuAYc+Il36EtFUbJG6Sf1Yt7OXEBqA1/ke1vylJgAZRsgRCqDb318BMoDy0B7NfG4qm/dMQgFwknNW/8nX5w3yMuSzjdOaAF1teqdr0YSmYx2aivdDEGym0qtrsUFNRzt1Nf5TU7Ga9xIAsPEsrEgOIptQzAA6zuX5V0+zKBEIRqEyBUvX6TnigtLucdLypAKgCgsif7xY4x/FD5zm3voLLb8hggJQ+EffObVRuYZquySzx/7CCoATkORBittu4bwRSJ7N28Ten2NdhQQATlTsvXUPknPsOnoJy2qt1dypqwlwAkWI6Lwzv18lI793F0w5RoBO4wV38d9UeOfXpGa+frizK2dGAKJxm6nGQsZKIri6ai0Z1V8zAFpdVOBFjnBX/WxyQfVLdW45ZgYInJfkJeoGJwle5DDvZgJ68w2CJfpK4sstudyvGQBZYQrfNobQvP+L73uLdlHEPtyR5mwLId10nAGyDMMwAiS518emL8XOjrl/wGAHQiaZ8565XcGo6zEC3PDDf58+4BYAAP//2aDEGwAAAAZJREFUAwAlwo0xbFaQcAAAAABJRU5ErkJggg==" alt="" />
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB8ElEQVR4AeyTPUtbYRTH/+eWtin0BYpLmwRKp9Ip0FJq7lS7tLiog34CQXATUQdXQRG/gV9AwcFBFwXBl2Qw4iB+ADXqpGh0UKM5/m/uTbzJzWNuEAfBh3Nyn/P6e95i4ZHHM6DuAYc+Il36EtFUbJG6Sf1Yt7OXEBqA1/ke1vylJgAZRsgRCqDb318BMoDy0B7NfG4qm/dMQgFwknNW/8nX5w3yMuSzjdOaAF1teqdr0YSmYx2aivdDEGym0qtrsUFNRzt1Nf5TU7Ga9xIAsPEsrEgOIptQzAA6zuX5V0+zKBEIRqEyBUvX6TnigtLucdLypAKgCgsif7xY4x/FD5zm3voLLb8hggJQ+EffObVRuYZquySzx/7CCoATkORBittu4bwRSJ7N28Ten2NdhQQATlTsvXUPknPsOnoJy2qt1dypqwlwAkWI6Lwzv18lI793F0w5RoBO4wV38d9UeOfXpGa+frizK2dGAKJxm6nGQsZKIri6ai0Z1V8zAFpdVOBFjnBX/WxyQfVLdW45ZgYInJfkJeoGJwle5DDvZgJ68w2CJfpK4sstudyvGQBZYQrfNobQvP+L73uLdlHEPtyR5mwLId10nAGyDMMwAiS518emL8XOjrl/wGAHQiaZ8565XcGo6zEC3PDDf58+4BYAAP//2aDEGwAAAAZJREFUAwAlwo0xbFaQcAAAAABJRU5ErkJggg==" alt="" />
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB8ElEQVR4AeyTPUtbYRTH/+eWtin0BYpLmwRKp9Ip0FJq7lS7tLiog34CQXATUQdXQRG/gV9AwcFBFwXBl2Qw4iB+ADXqpGh0UKM5/m/uTbzJzWNuEAfBh3Nyn/P6e95i4ZHHM6DuAYc+Il36EtFUbJG6Sf1Yt7OXEBqA1/ke1vylJgAZRsgRCqDb318BMoDy0B7NfG4qm/dMQgFwknNW/8nX5w3yMuSzjdOaAF1teqdr0YSmYx2aivdDEGym0qtrsUFNRzt1Nf5TU7Ga9xIAsPEsrEgOIptQzAA6zuX5V0+zKBEIRqEyBUvX6TnigtLucdLypAKgCgsif7xY4x/FD5zm3voLLb8hggJQ+EffObVRuYZquySzx/7CCoATkORBittu4bwRSJ7N28Ten2NdhQQATlTsvXUPknPsOnoJy2qt1dypqwlwAkWI6Lwzv18lI793F0w5RoBO4wV38d9UeOfXpGa+frizK2dGAKJxm6nGQsZKIri6ai0Z1V8zAFpdVOBFjnBX/WxyQfVLdW45ZgYInJfkJeoGJwle5DDvZgJ68w2CJfpK4sstudyvGQBZYQrfNobQvP+L73uLdlHEPtyR5mwLId10nAGyDMMwAiS518emL8XOjrl/wGAHQiaZ8565XcGo6zEC3PDDf58+4BYAAP//2aDEGwAAAAZJREFUAwAlwo0xbFaQcAAAAABJRU5ErkJggg==" alt="" />
           </div>

           <div className={styles.eval}>
            <span>5.00</span>
            <span>/평가 12개</span>
           </div>
          </div>

          {/* 아이템 */}
          <div className={styles.evalItem}>
           <div className={styles.basicTit}>
            <span>계약한 총 클라이언트</span>
           </div>

           <div className={styles.eval}>
            <span>27건</span>
           </div>
          </div>

          {/* 아이템 */}
          <div className={styles.evalItem}>
           <div className={styles.basicTit}>
            <span>포트폴리오</span>
           </div>

           <div className={styles.eval}>
            <span>5개</span>
           </div>
          </div>

          {/* 아이템 */}
          <div className={styles}>
           <div className={styles.verifyList}>

            <span>
             <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB2UlEQVR4AeyUzSt9QRjHn+f89MvlD7CxIdxQSta2dmwU92ZnoUhKkuNGTSy4siAvKQsrrrcNkrKRDfEHIMrGgq0Sp3Q9vuOlnHNn7kHJxm0+t5nvPPN8Z56ZjkM//PszCC3w75XIXZZONyUn4N5dkjOMe5WSL2/IuKA/JV0kNIXzl4MIMUUxHvOiNIjxl5rRQIjaLFnaLbpVNhoguhCYWoFJzKbZDK4si64t+ovsLkox7uyCRPhFwJ/RANNrmMto0FcyxDehd1FKyaFD3NckMaPKrxNGg0g+jWM6CU6BB86RfAIJFPqER3AEanVfk1iSqn8OHRDT8GiMp7X2jtFA1fP9aJxdUAEiIJqMcXeyiW/1wieiIWxxB0+3DmWpSTu0j5okgsl1bIaBWpBcLBzXtQSPQEC6LyWX0GfUluQl47yNE7Xg6W4S0x4K0j8S53mdMIjPQO1JjpeLowr1ILAE5ADdHOywiIQ6vDs6VqvyHyfaQPIGZmrFCed0kAmfwcMNuQiqBtlapZemAR2Akuxi5+u6b8NngB012gIDenNgbB36DFDLImukf6JMffK75DNAjlkQ2lD3KaUYjyk0FC/7QwwuKwE4jJEYd31YlrUbPEHW4O9M/hmEVu0ZAAD//5yoPLkAAAAGSURBVAMAZJmbMTOP264AAAAASUVORK5CYII=" alt="" />
             신원 인증
            </span>

            <span>
             <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB2UlEQVR4AeyUzSt9QRjHn+f89MvlD7CxIdxQSta2dmwU92ZnoUhKkuNGTSy4siAvKQsrrrcNkrKRDfEHIMrGgq0Sp3Q9vuOlnHNn7kHJxm0+t5nvPPN8Z56ZjkM//PszCC3w75XIXZZONyUn4N5dkjOMe5WSL2/IuKA/JV0kNIXzl4MIMUUxHvOiNIjxl5rRQIjaLFnaLbpVNhoguhCYWoFJzKbZDK4si64t+ovsLkox7uyCRPhFwJ/RANNrmMto0FcyxDehd1FKyaFD3NckMaPKrxNGg0g+jWM6CU6BB86RfAIJFPqER3AEanVfk1iSqn8OHRDT8GiMp7X2jtFA1fP9aJxdUAEiIJqMcXeyiW/1wieiIWxxB0+3DmWpSTu0j5okgsl1bIaBWpBcLBzXtQSPQEC6LyWX0GfUluQl47yNE7Xg6W4S0x4K0j8S53mdMIjPQO1JjpeLowr1ILAE5ADdHOywiIQ6vDs6VqvyHyfaQPIGZmrFCed0kAmfwcMNuQiqBtlapZemAR2Akuxi5+u6b8NngB012gIDenNgbB36DFDLImukf6JMffK75DNAjlkQ2lD3KaUYjyk0FC/7QwwuKwE4jJEYd31YlrUbPEHW4O9M/hmEVu0ZAAD//5yoPLkAAAAGSURBVAMAZJmbMTOP264AAAAASUVORK5CYII=" alt="" />
             연락처 확인
            </span>
           </div>
          </div>

         </div>

        </div>

       </div>
      </div>

     </section>

    </div>
   </C_1280>
  </div>
 )
}