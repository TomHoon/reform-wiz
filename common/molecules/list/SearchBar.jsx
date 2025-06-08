'use client'

export default function SearchBar({
  value = '',
  location = '강동구',
  onLocationChange,
  onKeywordChange,
  onSearch,
}) {
  const locations = ['강동구', '송파구', '중랑구'];

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
        onChange={(e) => onLocationChange(e.target.value)}
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
        value={value}
        onChange={(e) => onKeywordChange(e.target.value)}
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
        onClick={onSearch}
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
