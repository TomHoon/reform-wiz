import styles from "@/styles/C_Header.module.scss"
import LoginButtonGroup from "./LoginButtonGroup";

export default function Header({
}) {

  const navList = [
    { link: '/company/list', title: '리폼업체 찾기' },
    { link: '/form', title: '리폼할 가구 등록' },
    { link: '/', title: 'NEWS' },
    { link: '/', title: '상담문의' },
  ]


  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>


        <div className={styles.icon}>
          <h3><a href="/">WizReform</a></h3>
        </div>

        <div className={styles.navBtnGroup}>
          <ul>
            {
              navList.map((item, idx) => (
                <li className={styles.navBtn} key={idx}>
                  <a href={item.link}>
                    {item.title}

                  </a>
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