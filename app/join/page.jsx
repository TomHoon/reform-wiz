// app/join/page.jsx
import styles from '@/styles/join/join.module.scss';
import JoinClient from './JoinClient';
import C_Input from '@/common/atoms/C_Input';
import C_Button from '@/common/atoms/C_Button';

export default async function Join() {
  return (
    <div className={styles.joinOuterContainer}>
      <div className={styles.joinContainer}>
        <h2 className={styles.title}>회원가입</h2>
        <JoinClient />
      </div>
    </div>
  );
}
