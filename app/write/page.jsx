'use client';

import Script from 'next/script';
import styles from '@/styles/write/Write.module.scss';
import { useRef, useState, useEffect } from 'react';
import C_SelectOption from '@/common/atoms/C_SelectOption';

export default function Write() {
  const fileRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [params, setParams] = useState({});
  const [previews, setPreviews] = useState([]);
  const [location, setLocation] = useState({
    zonecode: '',
    roadAddress: '',
    detailAddress: '',
  });

  const setDaumMap = () => {
    if (window.daum && window.daum.Postcode) {


      new window.daum.Postcode({
        oncomplete: function (data) {
          console.log('data', data)
          const { zonecode, address:roadAddress } = data;
          setLocation({
            zonecode,
            roadAddress,
          });
        },
      }).open();


    }
  };

  const registerBoard = async () => {
    console.log('params >>> ', params);

    setParams({
      ...params,
      wishPlace: Object.values(location).join(' ')
    });

    const res = await fetch(`${process.env.API_URL}/api/v1/board/register}`, {
      method: 'POST',
      body: JSON.stringify(param),
    });
    const json = await res.json();
    
    console.log('result >>> ', json);
  };

  const handlerUpload = async (e) => {
    const 업로드파일리스트 = e.target.files;
    console.log(업로드파일리스트);

    for (let f of 업로드파일리스트) {
      if (f) {
        const prev = URL.createObjectURL(f);
        setPreviews((p) => [...p, prev]);
        setFiles([...files, f]);
      }
    }
  };

  const clickFileInput = () => {
    fileRef.current.click();
  };

  return (
    <>
      <Script
        src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
        strategy="afterInteractive" // daum 주소 스크립트
      />

      <div className={styles.writeOuterContainer}>
        <div className={styles.writeContainer}>
          <h2>등록하기</h2>
          <ul className={styles.writeWrapper}>
            <li>
              <div className={styles.writePreview}>
                <span className={styles.fileWrapper} onClick={clickFileInput}>
                  <img src="/icons/camera.png" alt="example" />
                  <p>0/10</p>
                  <input
                    type="file"
                    ref={fileRef}
                    hidden
                    multiple
                    onChange={(e) => handlerUpload(e)}
                  />
                </span>

                {/* 프리뷰 이미지 시작 */}
                {previews.map((item, idx) => {
                  return (
                    <span className={styles.prevItem} key={idx}>
                      <img src={item} alt="example" />
                    </span>
                  );
                })}
              </div>
            </li>

            <li className={styles.writeItem}>
              <label htmlFor="">가구명</label>
              <input
                type="text"
                name=""
                id=""
                onChange={(e) =>
                  setParams({ ...params, title: e.target.value })
                }
              />
            </li>

            <li className={`${styles.writeItem} ${styles.writeCategory}`}>
              <label htmlFor="">카테고리명</label>
              <div className={styles.selectWrapper}>
                <C_SelectOption/>
                <C_SelectOption/>
                <C_SelectOption/>
                {/* <ul className={styles.selectGroup}>
                  <li>소파</li>
                  <li>의자</li>
                  <li>고가구</li>
                </ul>

                <ul className={styles.selectGroup}>
                  <li>1인소파</li>
                  <li>2인소파</li>
                  <li>3인소파</li>
                </ul>

                <ul className={styles.selectGroup}>
                  <li>소파</li>
                  <li>의자</li>
                  <li>고가구</li>
                </ul> */}
              </div>
            </li>

            <li className={styles.writeItem}>
              <label htmlFor="">리폼내용</label>
              <textarea
                className={styles.writeTx}
                name=""
                id=""
                placeholder="리폼할 내용을 자유롭게 입력해주세요"
                onChange={(e) =>
                  setParams({ ...params, content: e.target.value })
                }
              ></textarea>
            </li>

            <li className={styles.writeItem}>
              <label htmlFor="">설치장소</label>
              <div className={styles.addressWrapper}>
                <div className={styles.addressNumArea}>
                  <input
                    className={styles.addressMain}
                    type="text"
                    name=""
                    id=""
                    readOnly
                    value={location.zonecode}
                    placeholder="우편번호"
                  />
                  <button onClick={setDaumMap}>우편번호 찾기</button>
                </div>
                <input
                  className={styles.addressSub}
                  type="text"
                  name=""
                  id=""
                  value={location.roadAddress}
                  readOnly
                  placeholder="도로명주소"
                />
                <input
                  className={styles.addressSub}
                  type="text"
                  name=""
                  id=""
                  placeholder="상세주소"
                  onChange={(e) => setLocation({...location, detailAddress: e.target.value})}
                />
              </div>
            </li>
          </ul>

          <button className={styles.writeBtn} onClick={registerBoard}>
            등록하기
          </button>
        </div>
      </div>
    </>
  );
}
