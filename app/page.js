import Header from '@/common/molecules/header/Header';
import MainVisual from '@/common/molecules/visual/MainVisual';
import LandingBanner from '@/common/banner/LandingBanner';
import FailBanner from '@/common/banner/FailBanner';
import Marketing from '@/common/molecules/ad/Marketing';
import Questions from '@/common/banner/Questions';

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
    </>
  );
}
