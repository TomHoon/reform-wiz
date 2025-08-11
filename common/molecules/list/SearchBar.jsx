'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/styles/searchbar/SearchBard.module.scss'
import Image from 'next/image';


export default function SearchBar({ defaultKeyword = '', defaultLocation = '강동구' }) {
  const router = useRouter();
  const [keyword, setKeyword] = useState(defaultKeyword);
  const [location, setLocation] = useState(defaultLocation);
  const locations = ['강동구', '송파구', '중랑구'];

  const handleSearch = () => {
    router.push(`/list?search=${keyword}&location=${location}&page=1`);
  };

  return (
    <div className={styles.searchContainer}>

      <div className={styles.searchbox}>
        <div>
          <h4>리폼가구 찾기</h4>
        </div>

        <div className={styles.searchGroup}>
          <input type="text" placeholder='검색어를 입력하세요' />
          <Image src='/icons/search.png' alt="example" width={24} height={24} />
        </div>
      </div>




      <div className={styles.filters}>
        <div className={styles.filtersGroup}>
          <div className={styles.filterItem}>
            <Image src='/icons/filter.png' alt="example" width={24} height={24} />
            <span>전체 필터</span>
          </div>


          <div className={styles.filterItem}>
            <span>서울/경기</span>
          </div>

          <div className={styles.filterItem}>
            <span>충청도</span>
          </div>

          <div className={styles.filterItem}>
            <span>경상도</span>
          </div>
        </div>

        <div className={styles.filtersGroup}>
          <Image src='/icons/refresh.png' alt="example" width={24} height={24} />
          <span>필터 초기화</span>
        </div>

      </div>


    </div>
  );
}
