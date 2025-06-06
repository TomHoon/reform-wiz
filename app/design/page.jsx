'use client'

import C_Input from '@/common/atoms/C_Input';
import styles from '@/styles/design_system.module.scss';
import { useState } from 'react';

export default function Design() {
 const [error, setError] = useState(false);

 return (
  <div className={styles.container}>

   <div className={styles.item}>
    <span>id input</span>
    <C_Input
     placeholder='아이디'
    />
   </div>

   <div className={styles.item}>
    <span>password input</span>
    <C_Input
     placeholder='비밀번호'
     type="password"
    />
   </div>

   <div className={styles.item}>
    <button onClick={() => setError(!error)}>테스트버튼</button>
    <span>error password input</span>
    <C_Input
     placeholder='비밀번호'
     type="password"
     error={error}
    />
   </div>


   <div className={styles.item}>
    <span>phone TypeB input</span>
    <C_Input
     placeholder='전화번호'
     size="B"
     type="tel"
    />
   </div>

   <div className={styles.item}>
    <span>radio button</span>
    <C_Input
     type="radio"
     title='업체'
     groupName="그룹명1"
    />
    <C_Input
     type="radio"
     title='일반'
     groupName="그룹명1"
    />
   </div>

  </div>
 )
}