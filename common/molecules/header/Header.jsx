import styles from "@/styles/C_Header.module.scss"
import LoginButtonGroup from "./LoginButtonGroup";

export default function Header({
}) {


  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>


        <div className={styles.icon}>
          <h3>WizReform</h3>
        </div>

        <div className={styles.navBtnGroup}>
          <ul>
            {
              ['리폼업체 찾기', '리폼가구 등록', 'NEWS', '상담문의'].map(item => (
                <li className={styles.navBtn} key={item}>
                  {item}
                </li>
              ))
            }
          </ul>
        </div>

        <LoginButtonGroup />

      </div>
    </div>
  )
}