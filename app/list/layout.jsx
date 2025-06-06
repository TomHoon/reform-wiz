import Header from "@/common/molecules/header/Header";
import C_1280 from "@/common/pages/C_1280";

export default function ListLayout({ children }) {
 return (
  <>
   <C_1280>
    <Header />
    {children}
   </C_1280>
  </>
 );
}