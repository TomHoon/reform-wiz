'use client'

import styles from '@/styles/login/Login.module.scss';
import { useEffect, useState } from 'react';

export default function Login() {
 const [activeType, setActiveType] = useState('일반');
 const [pressed, setPressed] = useState(false);
 const [param, setParam] = useState({});

 const goLogin = async () => {
  setPressed(true);

  setTimeout(() => {
   setPressed(false);
  }, 200);

  const res = await fetch(`${process.env.API_URL}/api/v1/member/login`, {
   headers: {
    'Content-Type': 'application/json'
   },
   method: 'POST',
   body: JSON.stringify(param),
   credentials: "include", // ✅ crucial
  });

  const json = await res.json();
  console.log('json >> ', json);

  if (json.status === 'success') {
   localStorage.setItem("isLogin", true);
   location.href = '/';
  } else {
   alert('로그인실패')
  }

 }

 return (
  <div className={styles.outerContainer}>

   <h2>로그인</h2>

   <div className={styles.innerContainer}>

    <div className={styles.typeButtons}>

     <div className={`${activeType === '일반' && styles.active}`} onClick={() => setActiveType('일반')}>
      <span>일반회원</span>
     </div>

     <div className={`${activeType === '업체' && styles.active}`} onClick={() => setActiveType('업체')}>
      <span>업체</span>
     </div>
    </div>

    <div className={styles.inputArea}>
     <input type="text" placeholder='아이디' onChange={(e) => setParam({ ...param, memberId: e.target.value })} />
     <input type="password" placeholder='비밀번호' onChange={(e) => setParam({ ...param, password: e.target.value })} />
     {/* <img src="/icons/eye.png" alt="" /> */}
     <img src="/icons/eye-slash.png" alt="" />
     <button className={`${pressed && styles.pressed}`} onClick={() => goLogin()}>로그인</button>
    </div>

    <hr className={styles.splitter} />

    <div className={styles.socialArea}>
     <button className={styles.kakaoLogin}>
      <img src="/icons/kakao.png" alt="" />
      카카오로그인
     </button>
     <button className={styles.googleLogin}>
      <img src="/icons/google.png" alt="" />
      구글로그인
     </button>
    </div>


    <div className={styles.more}>
     <button>회원가입</button>
     <button>아이디/비밀번호 찾기</button>
    </div>

   </div>
  </div>
 )
}