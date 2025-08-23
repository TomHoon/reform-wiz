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
                  <span>Reform Wiz</span>
                </p>
              </li>
              <li>고객을 위해 최선을 다합니다</li>
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

        <div className={ styles.footerInfo }>
          <p>
            <span>이용약관</span>
            <span>개인정보 처리방침</span>
            </p>
        </div>
      </C_1280>
    </footer>
  );
}
