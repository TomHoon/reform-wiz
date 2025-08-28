'use client'

import styles from '@/styles/C_input.module.scss'

const sizeMap = {
 A: styles.typeA,
 B: styles.typeB,
}

const func = () => { }

/**
 * [공통컴포넌트 - input]
 * * 종류: 텍스트, 전화번호, 비밀번호, 라디오
 * * type: input의 타입을 결정
 * * size: input의 사이즈를 결정(A, B)
 * * placeholder: placeholder를 결정
 * * clickCallback: 클릭시 이벤트를 받아 처리
 * * changeCallback: 변화 감지시 이벤트를 받아 처리
 * * errorCallback: 에러시 이벤트를 받아 처리
 * * title: 라디오 버튼일 경우 title 노출 처리
 * * groupName: 라디오 버튼일 경우 그룹핑해 묶어서 처리하기 위해 그룹명 설정
 * * error: 비밀번호 맞지 않는 경우 보여주기 위한 플래그 값
 * 
 */

export default function C_Input({
 type = 'text',
 size = 'A',
 placeholder = '',
 clickCallback = func,
 changeCallback = func,
 errorCallback = func,
 title = '',
 groupName = '',
 error
}) {


 return (
  <div className={styles.container}>
   <input
    type={type}
    className={`${sizeMap[size]} ${styles.defaultInput} ${error && styles.error}`}
    placeholder={placeholder}
    onClick={(e) => clickCallback(e)}
    onChange={(e) => changeCallback(e)}
    onError={() => errorCallback()}
    name={groupName}
   />

   {type == 'radio' &&
    <label>
     {title}
    </label>
   }

   {error &&
    <img src="./icons/alert.png" alt="" />
   }
  </div>

 )
}