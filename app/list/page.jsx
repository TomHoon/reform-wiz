import SearchBar from '@/common/molecules/list/SearchBar';
import List from '@/common/molecules/list/List';
import Paging from '@/common/molecules/list/Paging';

export const dynamic = 'force-dynamic';

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
  title: "테스트 2",
  location: "서울 강동구",
  days: "30"
 },
]

export default function ListPage({ searchParams }) {
  const search = searchParams?.search ?? '';
  const location = searchParams?.location ?? '강동구';
  const page = parseInt(searchParams?.page ?? '1', 10);
  const pageSize = 3;

  // 필터링: 검색어 & 위치
  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()) &&
    item.location.includes(location)
  );

  //  페이징
  const totalPages = Math.ceil(filteredItems.length / pageSize);
  const paginatedItems = filteredItems.slice((page - 1) * pageSize, page * pageSize);

  return (
    <>
      <SearchBar defaultKeyword={search} defaultLocation={location} />
      <List items={paginatedItems} />
      <Paging currentPage={page} totalPages={totalPages} />
    </>
  );
}