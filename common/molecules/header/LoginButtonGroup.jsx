'use client'

import styles from "@/styles/C_Header.module.scss"

export default function LoginButtonGroup() {
 return (
  <div className={styles.loginBtnGroup}>
   <ul>

    <li>
     <button onClick={() => loginCb()} className={styles.typeA}>로그인</button>
    </li>
    <li>
     <button onClick={() => joinCb()} className={styles.typeB}>회원가입</button>
    </li>

   </ul>
  </div>
 )
}