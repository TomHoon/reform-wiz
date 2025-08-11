import Header from "@/common/molecules/header/Header";
import Footer from "@/common/molecules/footer/Footer";
import C_1280 from "@/common/pages/C_1280";
import Advertise from '@/common/molecules/ad/Advertise';



export default function ListLayout({ children }) {
 return (
  <>
   <Header />
   <Advertise />

   <C_1280>
    {children}
   </C_1280>
   <Footer />
  </>
 );
}