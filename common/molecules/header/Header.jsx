import C_1280 from "../../pages/C_1280";
import styles from "@/styles/C_Header.module.scss"
import LoginButtonGroup from "./LoginButtonGroup";
export default function Header({
}) {


 return (
  <C_1280>
   <div className={styles.container}>

    <div className={styles.icon}>
     <h3>WizReform</h3>
    </div>

    <div className={styles.navBtnGroup}>
     <ul>
      {
       ['회사소개'].map(item => (
        <li className={styles.navBtn} key={item}>
         {item}
        </li>
       ))
      }
     </ul>
    </div>

    <LoginButtonGroup />

   </div>
  </C_1280>
 )
}