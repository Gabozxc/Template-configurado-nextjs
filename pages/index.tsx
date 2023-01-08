import FooterLayout from '../components/theme/layouts/footer/FooterLayout';
import IsNotLoginLandingPage from '../components/theme/layouts/landingPage/IsNotLoginLandingPage';
import IsNotLoginNavDesktop from '../components/theme/layouts/nav/isNotloginNav/IsNotLoginNavDesktop';
import IsNotLoginNavMobile from '../components/theme/layouts/nav/isNotloginNav/IsNotLoginNavMobile';
import { NextPageWithLayout } from '../interfaces/page';

const Home: NextPageWithLayout = () => {
  return (
    <main>
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
        <IsNotLoginNavDesktop />
      </div>
      {page}
      <div className="md:hidden">
        <IsNotLoginNavMobile />
      </div>
      <FooterLayout />
    </IsNotLoginLandingPage>
  );
};

export default Home;
