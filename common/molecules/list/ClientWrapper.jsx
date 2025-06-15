'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import SearchBar from './SearchBar';
import List from './List';
import Paging from './Paging';

//테스트 데이터
const items = [
 {
  imageURL: "/images/ex1.png",
  title: "테스트 1",
  location: "서울 강동구",
  days: "30"
 },
 {
  imageURL: "/images/ex1.png",
  title: "테스트 1",
  location: "서울 강동구",
  days: "30"
 },
 {
  imageURL: "/images/ex1.png",
  title: "테스트 1",
  location: "서울 강동구",
  days: "30"
 },
 {
  imageURL: "/images/ex1.png",
  title: "테스트 1",
  location: "서울 강동구",
  days: "30"
 },
 {
  imageURL: "/images/ex1.png",
  title: "테스트 1",
  location: "서울 강동구",
  days: "30"
 },
 {
  imageURL: "/images/ex1.png",
  title: "테스트 1",
  location: "서울 강동구",
  days: "30"
 },
]

/*
async function getList(search, page) {
  const filtered = items.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const pageSize = 3;
  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);

  return {
    data: paginated,
    totalPages: Math.ceil(filtered.length / pageSize)
  };
}
*/

//로컬 테스트용, API 호출 시 위 async형식 사용
function getList(search, page) {
  const filtered = items.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const pageSize = 3;
  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);

  return {
    data: paginated,
    totalPages: Math.ceil(filtered.length / pageSize),
  };
}

export default function ClientWrapper() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const search = searchParams.get('search') ?? '';
  const page = parseInt(searchParams.get('page') ?? '1', 10);
  const location = searchParams.get('location') ?? '강동구';

  const [keyword, setKeyword] = useState(search);
  const [locationState, setLocation] = useState(location);

  const { data: paginatedItems, totalPages } = useMemo(
    () => getList(search, page),
    [search, page]
  );

  const handleSearch = () => {
    router.push(`/list?search=${keyword}&location=${locationState}&page=1`);
  };

  const handlePageChange = (page) => {
    router.push(`/list?search=${keyword}&location=${locationState}&page=${page}`);
  };

  return (
    <>
      <SearchBar
        value={keyword}
        location={locationState}
        onKeywordChange={setKeyword}
        onLocationChange={setLocation}
        onSearch={handleSearch}
      />
      <List items={paginatedItems} />
      <Paging
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}
