'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export default function Paging({ currentPage, totalPages }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get('search') || '';
  const location = searchParams.get('location') ?? '강동구';

  const handlePageChange = (page) => {
    router.push(`/list?search=${search}&location=${location}&page=${page}`);
  };

  const goBefore = () => {
    if (startPage < 11) return;
    router.push(`/list?search=${search}&location=${location}&page=${startPage - 10}`);
  };

  const goNext = () => {
    if (startPage == endStartPage) return;
    router.push(`/list?search=${search}&location=${location}&page=${startPage + 10}`);
  };

  const startPage = Math.floor((currentPage - 1) / 10) * 10 + 1; // 페이징 시작번호     1-10, 11-20, 21-30
  const endStartPage = Math.floor((totalPages - 1) / 10) * 10 + 1; // 마지막페이징 시작번호

  // 마지막페이징 시작번호와 현재페이징 시작번호가 같을 경우
  // 모든 페이징번호 노출되면 안됨
  const 페이지번호길이 = startPage == endStartPage ? totalPages - endStartPage + 1 : 10;

  const pages = Array.from({ length: 페이지번호길이 }, (_, i) => startPage + i);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button onClick={goBefore}>이전</button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          style={{
            margin: '0 6px',
            padding: '6px 10px',
            borderRadius: '4px',
            backgroundColor: '#fff',
            color: page == currentPage ? '#C84EDB' : '#000',
            fontWeight: page === currentPage ? 'bold' : 'normal',
            border: page === currentPage ? '1px solid #ccc' : 'none',
            cursor: 'pointer',
          }}
        >
          {page}
        </button>
      ))}
      <button onClick={goNext}>다음</button>
    </div>
  );
}
