'use client'

export default function Paging({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
                    style={{
            margin: '0 6px',
            padding: '6px 10px',
            borderRadius: '4px',
            backgroundColor: '#fff',
            color: page === currentPage ? '#C84EDB' : '#000',
            fontWeight: page === currentPage ? 'bold' : 'normal',
            border: page === currentPage ? '1px solid #ccc' : 'none',
            cursor: 'pointer',
          }}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
