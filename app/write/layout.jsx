import Header from "@/common/molecules/header/Header";
import Footer from "@/common/molecules/footer/Footer";
import C_1280 from "@/common/pages/C_1280";


export default function ListLayout({ children }) {
 return (
   <>
   <Header />
   <C_1280>
    {children}
   </C_1280>
   <Footer />
  </>
 );
}