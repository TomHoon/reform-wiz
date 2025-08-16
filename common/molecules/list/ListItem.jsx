import styles from '@/styles/C_ListItem.module.scss';

import Image from 'next/image';

export default function ListItem({
  files,
  title = 'example',
  wishPlace = '서울 강동구',
  wishDate = new Date().toISOString().slice(0, 10),
  createdAt
}) {
  let 이미지 = '/images/ex1.png';

  if (/\.(png|jpe?g)$/i.test(files[0]?.fileName)) {
    이미지 = process.env.API_URL + '/uploads/' + files[0].fileName;
  }

  const getDays = () => {
    if (!wishDate) {
      return 30;
    }

    const wish = new Date(wishDate); // your timestamp
    const now = new Date();

    const diffMs = now - wish; // difference in milliseconds
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    return diffDays
  }

  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Image src={이미지} alt="example" width={344} height={344} />
        </li>
        <li>
          <h3>{title}</h3>
        </li>
        <li className={styles.listInfo}>
          <span>{wishPlace} | </span>
          <span>입찰기간 D-{getDays()}</span>
        </li>

        <li className={styles.labelGroup}>
          <span className={styles.labelA}>모집중</span>
          <span className={styles.labelB}>NEW</span>
        </li>
      </ul>
    </div>
  );
}
