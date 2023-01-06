import LoginNavDesktop from '../../components/nav/isNotloginNav/IsNotLoginNavDesktop';
import LoginNavMobile from '../../components/nav/isNotloginNav/IsNotLoginNavMobile';
import FooterLayout from '../../components/theme/layouts/footer/FooterLayout';
import IsNotLoginLandingPage from '../../components/theme/layouts/landingPage/LandingPageLayout';
import { NextPageWithLayout } from '../../interfaces/page';

const LoginUser: NextPageWithLayout = () => {
  return (
    <main className="mainContent">
      <h1 className="text-center text-lg">asdasd soy el login</h1>
    </main>
  );
};

LoginUser.getLayout = (page) => {
  return (
    <IsNotLoginLandingPage titleHead="Inciar sesion">
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

export default LoginUser;
