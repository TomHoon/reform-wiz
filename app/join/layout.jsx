import Header from "@/common/molecules/header/Header";
import Footer from "@/common/molecules/footer/Footer";
import C_1280 from "@/common/pages/C_1280";


export default function JoinLayout({ children }) {
 return (
  <>
   <C_1280>
    <Header />
    {children}
   </C_1280>
   <Footer />
  </>
 );
}