import SearchBar from '@/common/molecules/list/SearchBar';
import List from '@/common/molecules/list/List';
import Paging from '@/common/molecules/list/Paging';

export const dynamic = 'force-dynamic';
import SearchBar from '@/common/molecules/list/SearchBar';
import List from '@/common/molecules/list/List';
import Paging from '@/common/molecules/list/Paging';

export default async function ListPage({ searchParams }) {
  const { page = 1, size = 9, location = '강동구' } = await searchParams;

  const param = {
    page,
    size,
  };

  const url = 'http://localhost:22000/api/v1/board/getBoards';
  const query = new URLSearchParams(param);

  const res = await fetch(`${url}?${query.toString()}`, {
    cache: 'no-store',
  });

  const { data } = await res.json();

  return (
    <>
      <SearchBar />
      <List items={data.dtoList} />
      <Paging currentPage={page} totalPages={data.totalPages} />
    </>
  );
}
