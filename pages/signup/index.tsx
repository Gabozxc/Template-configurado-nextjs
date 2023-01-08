import CreateAccountForm from '../../components/forms/CreateAccountForm';
import FooterLayout from '../../components/theme/layouts/footer/FooterLayout';
import IsNotLoginLandingPage from '../../components/theme/layouts/landingPage/IsNotLoginLandingPage';
import IsNotLoginNavDesktop from '../../components/theme/layouts/nav/isNotloginNav/IsNotLoginNavDesktop';
import IsNotLoginNavMobile from '../../components/theme/layouts/nav/isNotloginNav/IsNotLoginNavMobile';
import { NextPageWithLayout } from '../../interfaces/page';

const SignUp: NextPageWithLayout = () => {
  return (
    <main>
      <CreateAccountForm />
    </main>
  );
};

SignUp.getLayout = (page) => {
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

export default SignUp;
