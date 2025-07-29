import styles from '@/styles/write/Write.module.scss'

export default async function Write() {

 return (
  <div className={styles.writeContainer}>
   <h2>등록하기</h2>
   <ul className={styles.writeWrapper}>


    <li>
     <input type="file" name="" id="" />
    </li>


    <li className={styles.writeItem}>
     <label htmlFor="">가구명</label>
     <input type="text" name="" id="" />
    </li>


    <li className={styles.writeItem}>
     <label htmlFor="">카테고리명</label>
     <div className={styles.selectWrapper}>
      <select name="" id="" className={styles.categorySelect}>
       <option value="소파">소파</option>
       <option value="소파">소파</option>
       <option value="소파">소파</option>
       <option value="소파">소파</option>
       <option value="소파">소파</option>
      </select>
     </div>
    </li>


    <li className={styles.writeItem}>
     <label htmlFor="">리폼내용</label>
     <textarea className={styles.writeTx} name="" id="" placeholder="리폼할 내용을 자유롭게 입력해주세요"></textarea>
    </li>


    <li className={styles.writeItem}>
     <label htmlFor="">설치장소</label>
     <div className={styles.addressWrapper}>
      <div className={styles.addressNumArea}>
       <input className={styles.addressMain} type="text" name="" id="" placeholder="우편번호" />
       <button>우편번호 찾기</button>
      </div>
      <input className={styles.addressSub} type="text" name="" id="" placeholder="도로명주소" />
      <input className={styles.addressSub} type="text" name="" id="" placeholder="상세주소" />
     </div>
    </li>


   </ul>

   <button className={styles.writeBtn}>등록하기</button>
  </div>
 );
}