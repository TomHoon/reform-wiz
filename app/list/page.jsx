import List from "@/common/molecules/list/List"

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

async function getList(search, page) {
 // TODO: API 호출
}

export default async function ListPage({ searchParams }) {
 // const search = searchParams.search || '';
 // const page = parseInt(searchParams.page) || 1;
 // const data = await getList(search, page);

 /**
  * [리스트 페이지]
  * SEO에 유리하도록 SSR처리
  * 아래 세개의 값이 쿼리스트링으로 들어와 리스트를 호출하여 사용
  * 
  * - 검색어
  * - 페이지번호
  * - 카테고리
  */

 return (
  // TODO: SearchBar, Paging 처리
  <List
   items={items}
  />

 )
}