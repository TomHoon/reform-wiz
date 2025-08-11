'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import styles from '@/styles/list/list.module.scss';

export default function Paging({
  currentPage,
  totalPages,
  hasNextGroup,
  hasPrevGroup,
  startPage,
  endPage,
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get('search') || '';
  const location = searchParams.get('location') ?? '강동구';

  const handlePageChange = (page) => {
    router.push(`/list?search=${search}&location=${location}&page=${page}`);
  };

  const goBefore = () => {
    if (startPage < 11) return;
    router.push(
      `/list?search=${search}&location=${location}&page=${startPage - 1}`
    );
  };

  const goNext = () => {
    if (startPage == endPage) return;

    router.push(
      `/list?search=${search}&location=${location}&page=${endPage + 1}`
    );
  };

  // 마지막페이징 시작번호와 현재페이징 시작번호가 같을 경우
  // 모든 페이징번호 노출되면 안됨

  const pages = Array.from(
    { length: Math.min(10, endPage - startPage + 1) },
    (_, i) => startPage + i
  );

  return (
    <div
      className={styles.pagingWrapper}
      style={{ textAlign: 'center', marginTop: '20px' }}
    >
      {hasPrevGroup && (
        <button className={styles.prevButton} onClick={goBefore}>
          <Image
            className={styles.prevButtonImage}
            src="/icons/right-arrow.png"
            alt="Next"
            width={24}
            height={24}
          />
        </button>
      )}

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={styles.pageBtn}
        >
          {page}
        </button>
      ))}
      {hasNextGroup && (
        <button onClick={goNext} className={styles.nextButton}>
          <Image
            src="/icons/right-arrow.png"
            alt="Next"
            width={24}
            height={24}
          />
        </button>
      )}
    </div>
  );
}
