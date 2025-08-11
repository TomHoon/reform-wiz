import SearchBar from '@/common/molecules/list/SearchBar';
import List from '@/common/molecules/list/List';
import Paging from '@/common/molecules/list/Paging';

export default async function ListPage({ searchParams }) {
  const {
    page = 1,
    size = 9,
    location = '강동구',
    title = '',
    content = '',
  } = await searchParams;

  const param = {
    page,
    size,
    title,
    content,
  };
  const res = await getData(param);
  const { data } = res;

  return (
    <>
      <SearchBar />
      <List items={data.dtoList} />
      <Paging
        currentPage={page}
        totalPages={data.totalPages}
        hasNextGroup={data?.hasNextGroup}
        hasPrevGroup={data?.hasPrevGroup}
        startPage={data?.startPage}
        endPage={data?.endPage}
      />
    </>
  );
}

export async function getData(param) {
  const query = new URLSearchParams(param);

  const res = await fetch(`${process.env.API_URL}/api/v1/board/getBoards?${query.toString()}`);
  const json = await res.json();

  return {
    ...json
  };
}
