'use client';

import { useState } from 'react'
import styles from '@/styles/join/join.module.scss';
import C_Input from '@/common/atoms/C_Input';
import C_Button from '@/common/atoms/C_Button';

export default function JoinClient() {
  const [memberType, setMemberType] = useState('company');
  const [param, setParam] = useState({});

  const goJoin = async () => {
    const res = await fetch(`${process.env.API_URL}/api/v1/member/join`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(param),
    });

    const json = await res.json();
    
  }

  return (
    <div>
         <ul className={styles.joinWrapper}>
          {/* 아이디 */}
          <li className={styles.joinItem}>
            <label>아이디</label>
            <div className={styles.field}>
              <C_Input 
                type="text" 
                size="A" 
                placeholder="아이디 입력" 
                changeCallback={(e) => setParam({...param, memberId: e.target.value})}
              />
            </div>
          </li>

          {/* 비밀번호 */}
          <li className={styles.joinItem}>
            <label>비밀번호</label>
            <div className={styles.field}>
              <C_Input 
                type="password" 
                size="A" 
                placeholder="비밀번호 입력" 
                changeCallback={(e) => setParam({...param, password: e.target.value})}
              />
            </div>
          </li>

          {/* 비밀번호 확인*/}
          <li className={styles.joinItem}>
            <label>비밀번호 확인</label>
            <div className={styles.field}>
              <C_Input 
                type="password" 
                size="A" 
                placeholder="비밀번호 확인" 
                error 
              />
            </div>
          </li>

          {/* 이름 */}
          <li className={styles.joinItem}>
            <label>이름</label>
            <div className={styles.field}>
              <C_Input 
                type="text" 
                size="A" 
                placeholder="홍길동" 
                changeCallback={(e) => setParam({...param, name: e.target.value})}
              />
            </div>
          </li>

          {/* 생년 월일 */}
          <li className={styles.joinItem}>
            <label>생년 월일</label>
            <div className={styles.field}>
              <C_Input 
                type="text" 
                size="A" 
                placeholder="생년월일(YYYY/MM/DD)" 
              />
            </div>
          </li>

          {/* 통신사*/}
          <li className={styles.joinItem}>
            <label>통신사</label>
            <div className={`${styles.field} ${styles.selectLike}`}>
              <select defaultValue="">
                <option value="" disabled>선택</option>
                <option value="skt">SKT</option>
                <option value="kt">KT</option>
                <option value="lg">LG U+</option>
              </select>
              <span className={styles.caret}>⌄</span>
            </div>
          </li>

          {/* 전화번호 + 인증번호 전송 */}
          <li className={styles.joinItem}>
            <label>전화번호</label>
            <div className={styles.row}>
              <div className={styles.field}>
                <C_Input 
                  type="tel" 
                  size="B" 
                  placeholder="01012345678" 
                  changeCallback={(e) => setParam({...param, phone: e.target.value})}
                />
              </div>
              <C_Button
                text="인증번호전송"
                width="medium"
                height="medium"
                fontColor="black"
                backgroundColor="white"
                borderColor="purple"
                shadow="none"
              />
            </div>
          </li>

          {/* 인증번호 + 확인 */}
          <li className={styles.joinItem}>
            <label>인증번호</label>
            <div className={styles.row}>
              <div className={styles.field}>
                <C_Input type="text" size="B" placeholder="" />
              </div>
              <C_Button
                text="확인"
                width="medium"
                height="medium"
                fontColor="black"
                backgroundColor="white"
                borderColor="purple"
                shadow="none"
              />
            </div>
          </li>

          {/* 구분선 */}
          <hr className={styles.divider} />
        </ul>

      <ul className={styles.joinWrapper}>
        {/* 라디오 버튼 */}
        <li className={styles.radioGroup}>
          <C_Input
            type="radio"
            size="B"
            title="업체"
            groupName="memberType"
            changeCallback={(e) => setParam({...param, isCompany: e.target.value === 'on'})}
          />
          <C_Input
            type="radio"
            size="B"
            title="일반회원"
            groupName="memberType"
            changeCallback={(e) => setParam({...param, isCompany: e.target.value === 'on'})}
          />
        </li>

        {/* 업체일 때만 보여줌 */}
        {memberType === 'company' && (
          <>
            <li className={styles.joinItem}>
              <div className={styles.fieldTall}>
                <C_Input type="text" size="A" placeholder="사업자등록번호" />
              </div>
            </li>
            <li className={styles.joinItem}>
              <div className={styles.fieldTall}>
                <C_Input type="text" size="A" placeholder="계좌번호" />
              </div>
            </li>
          </>
        )}
      </ul>

      {/* 제출 버튼 */}
      <div className={styles.submitWrap}>
        <C_Button
          text="회원가입"
          width="large"
          height="large"
          fontColor="white"
          backgroundColor="purple"
          shadow="light"
          fontSize="large"
          clickCallback={goJoin}
        />
      </div>
    </div>
  );
}