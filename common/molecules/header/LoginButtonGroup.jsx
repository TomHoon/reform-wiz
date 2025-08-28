'use client'

import styles from "@/styles/C_Header.module.scss"

export default function LoginButtonGroup() {
let isLogin = false;
if (typeof window !== "undefined") {
    isLogin = localStorage.getItem("isLogin");
}

  const joinCb = () => {
      location.href = "/join";
  }

 const loginCb = async () => {
  if (isLogin) {
    if (typeof window !== "undefined") {
        localStorage.removeItem("isLogin");
    }

   const res = await fetch(`${process.env.API_URL}/api/v1/member/logout`, {
    headers: {
     'Content-Type': 'application/json'
    },
    method: 'POST',
    credentials: "include", // ✅ crucial

   });
   const json = await res.json();

   if (json.status === 'success') {
    location.href = "/";
   } else {
    alert("로그아웃실패");
   }


  } else {
   location.href = "/login";
  }
 }

 return (
  <div className={styles.loginBtnGroup}>
   <ul>

    <li>
     <button onClick={() => loginCb()} className={styles.typeA}>{isLogin ? '로그아웃' : '로그인'}</button>
    </li>
    {
     !isLogin
     &&
     <li>
      <button onClick={() => joinCb()} className={styles.typeB}>회원가입</button>
     </li>
    }


   </ul>
  </div>
 )
}