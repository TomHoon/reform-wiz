import styles from '@/styles/C_SelectOption.module.scss';
import { useRef, useState } from 'react';

export default function C_SelectOption() {
  const boxRef = useRef(null);
  const [actived, setActived] = useState(false);

  const clickedBox = () => {
    setActived(!actived);
  };

  return (
    <>
      <div className={`${styles.selectContainer} ${actived && styles.active}`}>
        <div className={styles.selectBox} ref={boxRef} onClick={clickedBox}>
          <span>Select One</span>
        </div>
        <div className={`${styles.selectOption} ${actived && styles.active}`}>
          <p>Option1</p>
          <p>Option2</p>
          <p>Option3</p>
          <p>Option4</p>
        </div>
      </div>
    </>
  );
}
