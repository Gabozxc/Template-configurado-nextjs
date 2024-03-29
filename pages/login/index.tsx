import LoginAccountForm from '../../components/forms/LoginAccountForm';
import FooterLayout from '../../components/theme/layouts/footer/FooterLayout';
import IsNotLoginLandingPage from '../../components/theme/layouts/landingPage/IsNotLoginLandingPage';
import IsNotLoginNavDesktop from '../../components/theme/layouts/nav/isNotloginNav/IsNotLoginNavDesktop';
import IsNotLoginNavMobile from '../../components/theme/layouts/nav/isNotloginNav/IsNotLoginNavMobile';

import { NextPageWithLayout } from '../../interfaces/page';

const LoginUser: NextPageWithLayout = () => {
  return (
    <main>
      <LoginAccountForm />
    </main>
  );
};

LoginUser.getLayout = (page) => {
  return (
    <IsNotLoginLandingPage titleHead="Inciar sesion">
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

export default LoginUser;
