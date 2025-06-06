import styles from '@/styles/C_ListItem.module.scss'

import Image from "next/image"

export default function ListItem({
 imageURL = "/images/ex1.png",
 title = "example",
 location = "서울 강동구",
 days = "30"
}) {
 return (
  <div className={styles.container}>
   <ul>
    <li>
     <Image
      src={imageURL}
      alt="example"
      width={344}
      height={344}
     />
    </li>
    <li>
     <h3>{title}</h3>
    </li>
    <li className={styles.listInfo}>
     <span>{location} | </span>
     <span>입찰기간 D-{days}</span>
    </li>

    <li className={styles.labelGroup}>
     <span className={styles.labelA}>모집중</span>
     <span className={styles.labelB}>NEW</span>
    </li>
   </ul>
  </div>
 )
}