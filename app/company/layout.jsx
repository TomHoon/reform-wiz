import Header from "@/common/molecules/header/Header";
import Footer from "@/common/molecules/footer/Footer";

export default function CompanyLayout({ children }) {
 return (
  <>
   <Header />

   {children}

   <Footer />
  </>
 );
}