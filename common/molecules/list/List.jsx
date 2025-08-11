import ListItem from './ListItem';
import styles from '@/styles/C_List.module.scss';

export default function List({ items }) {

  return (
    <div className={styles.container}>
      {items.map((item, idx) => (
        <ListItem key={idx} {...item} />
      ))}
    </div>
  );
}
