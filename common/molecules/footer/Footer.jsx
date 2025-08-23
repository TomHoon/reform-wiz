import C_1280 from '@/common/pages/C_1280';
import styles from '@/styles/C_Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <C_1280>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <ul>
              <li>
                <p className={styles.main}>
                  <span>리폼위즈</span>
                </p>
              </li>
              <li>
                10:00-18:00 연중무휴<br />
                wiz@naver.com
              </li>
              <li className={styles.sns}>
                <span>인스타</span>
                <span>인스타</span>
                <span>인스타</span>
                <span>인스타</span>
              </li>
            </ul>
          </div>
          <div className={styles.right}>
            <ul>
              <li>
                <p className={styles.first}>리폼위즈</p>
                <p>리폼위즈 소개</p>
                <p>신뢰와 정확</p>
              </li>

              <li>
                <p className={styles.first}>이용방법</p>
                <p>리폼과정</p>
                <p>이용요금</p>
              </li>

              <li>
                <p className={styles.first}>고객센터</p>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerInfo}>
          <p>
            <span>이용약관</span>
            <span className={styles.divider}></span>
            <span>개인정보 처리방침</span>
          </p>
          <p className={styles.subInfo}>
            <span>(주)리폼위즈</span>
            <span className={styles.divider}></span>
            <span>대표이사: 홍길동</span>
            <span className={styles.divider}></span>
            <span>서울특별시 강남구</span>
          </p>
          <p className={styles.subInfo}>
            <span>사업자등록번호 : 123-21-22222</span>
            <span>통신판매업신고 : 제2018-서울강남-123312 호</span>
            <span>직업정보제공사업 신고번호 : 123123</span>
          </p>
        </div>

      </C_1280>
    </footer>
  );
}
