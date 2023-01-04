import Head from 'next/head';
import style from './LadingPageLayout.module.css';

export interface IPrimaryLayout {
  children: React.ReactNode;
  titleHead: string;
}

const IsNotLoginLandingPage: React.FC<IPrimaryLayout> = ({
  children,
  titleHead,
}) => {
  return (
    <>
      <Head>
        <title>{titleHead}</title>
      </Head>
      <div className={style.landingPageLayout}>{children}</div>
    </>
  );
};

export default IsNotLoginLandingPage;
