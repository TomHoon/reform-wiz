'use client';

import styles from '@/styles/visual/MainVisual.module.scss';
import C_1280 from '@/common/pages/C_1280';
import { useEffect, useState } from 'react';

export default function MainVisual() {
  const template = ['고가구리폼', '소파리폼', '가죽교체'];
  const [list, setList] = useState([...template]);
  const [idx, setIdx] = useState(0);

  const handleTransitionEnd = () => {
    console.log(idx);
    if (idx == 0) {
      setList([template[0], template[1]]);
    }

    if (idx == 1) {
      setList([template[1], template[2]]);
    }

    if (idx == 2) {
      setList([template[2], template[0]]);
    }
  }
  

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((prev) => {
        const next = (prev + 1) % template.length;
        return next;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [list.length]);

  return (
    <>
      <C_1280>
        <section className={styles.container}>
          <div className={styles.introLeft}>
            <div className={styles.title}>
              <div className={styles.slotContainer}>
                <ul
                  onTransitionEnd={handleTransitionEnd} // ✅
                >
                  {list.map((word) => (
                    <li key={word}>{word}</li>
                  ))}
                </ul>
              </div>

              <span className={styles.subtitle}>쉽고 빠르게 매칭해 드려요</span>
            </div>

            <div className={styles.content}>
              <p>
                IT프로젝트 고민은 이제 끝!
                <br />
                위시켓에서 성공적인 IT 프로젝트를 경험하세요.
              </p>
            </div>

            <div className={styles.buttons}>
              <a href="" className={styles.freeEnrollBtn}>
                무료로 견적 받기
              </a>
              <a href="" className={styles.askBtn}>
                견적상담신청
              </a>
            </div>
          </div>

          {/* 오른쪽 영역 */}
          <div className={styles.introRight}>
            <img
              src="https://www.wishket.com/static/img/acquisition/main_side.svg"
              alt=""
            />
          </div>
        </section>
      </C_1280>
      <hr className={styles.hr} />
    </>
  );
}
