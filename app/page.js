import Header from '@/common/molecules/header/Header';
import MainVisual from '@/common/molecules/visual/MainVisual';
import Marketing from '@/common/molecules/ad/Marketing';
import FailBanner from '@/common/molecules/banner/FailBanner';
import LandingBanner from '@/common/molecules/banner/LandingBanner';
import Questions from '@/common/molecules/banner/Questions';
import Footer from '@/common/molecules/footer/Footer';

export default function Home() {
  return (
    /** 헤더 */
    <>
      <Header />
      <MainVisual />
      <LandingBanner />
      <Questions />
      <FailBanner />
      <Marketing />
      <Footer/>
    </>
  );
}
