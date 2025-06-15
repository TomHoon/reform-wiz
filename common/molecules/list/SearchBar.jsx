'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar({
  defaultKeyword = '',
  defaultLocation = '강동구',
}) {
  const router = useRouter();
  const [keyword, setKeyword] = useState(defaultKeyword);
  const [location, setLocation] = useState(defaultLocation);
  const locations = ['강동구', '송파구', '중랑구'];

  const handleSearch = () => {
    router.push(`/list?search=${keyword}&location=${location}&page=1`);
  };

  return (
    <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '50px',
            textAlign: 'center',
            gap: '60px',
        }}
    >
      
    {/* 위치 드롭다운 */}
    <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        style={{
          padding: '8px 12px',
          borderRadius: '999px',
          border: '1px solid #ccc',
          fontSize: '14px'
        }}
    >
    {locations.map((loc) => (
    <option key={loc} value={loc}>{loc}</option>
    ))}
    </select>

    {/* 검색창 */}
    <input
        type="text"
        placeholder="검색어를 입력하세요"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        style={{
          padding: '8px 12px',
          fontSize: '16px',
          width: '60%',
          borderRadius: '4px',
          border: '1px solid #ccc'
        }}
    />

     {/* 검색 버튼 */}
      <button
        onClick={handleSearch}
        style={{
          backgroundColor: '#C84EDB',
          color: '#fff',
          border: 'none',
          borderRadius: '12px',
          padding: '8px 16px',
          fontSize: '14px',
          cursor: 'pointer',
        }}
      >
        검색
      </button>
    </div>
  );
}
