import Header from "@/common/molecules/header/Header";
import Footer from "@/common/molecules/footer/Footer";

export default function FormLayout({ children }) {
 return (
  <>
   <Header />

   {children}

   <Footer />
  </>
 );
}