'use client'

import { useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import List from "@/common/molecules/list/List"
import SearchBar from "@/common/molecules/list/SearchBar"
import Paging from "@/common/molecules/list/Paging"

// 테스트 데이터
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
    totalPages: Math.ceil(filtered.length / pageSize)
  };
}


export default function ListPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  const location = searchParams.get('location') || '강동구'; 
  const [search, setSearch] = useState(initialSearch);
  const page = parseInt(searchParams.get('page')) || 1;

  const handleSearch = ({ location, keyword }) => {
  router.push(`/list?search=${keyword}&location=${location}&page=1`);
};

  const { data: items, totalPages } = getList(search, page);

  return (
    <>
      <SearchBar
        value={search}
        onChange={setSearch}
        onSearch={handleSearch}
      />

      <List items={items} />

      <Paging
        currentPage={page}
        totalPages={totalPages}
        onPageChange={(newPage) => {
          router.push(`?search=${search}&location=${location}&page=${newPage}`);
        }}
      />
    </>
  );
}