import LoginNavMobile from '../components/nav/isNotLoginNavMobile/LoginNavMobile';
import LoginNavDesktop from '../components/nav/isNotloginNav/LoginNavDesktop';
import FooterLayout from '../components/theme/layouts/footer/FooterLayout';
import IsNotLoginLandingPage from '../components/theme/layouts/landingPage/LandingPageLayout';
import { NextPageWithLayout } from '../interfaces/page';

const Home: NextPageWithLayout = () => {
  return (
    <main className="mainContent">
      <h1 className="text-center text-lg">
        TEN CONTROL SOBRE TU FUTURO D SASD ADS A
      </h1>
    </main>
  );
};

Home.getLayout = (page) => {
  return (
    <IsNotLoginLandingPage titleHead="Pagina principal">
      <div className="hidden md:flex">
        <LoginNavDesktop />
      </div>
      {page}
      <div className="md:hidden">
        <LoginNavMobile />
      </div>
      <FooterLayout />
    </IsNotLoginLandingPage>
  );
};

export default Home;
