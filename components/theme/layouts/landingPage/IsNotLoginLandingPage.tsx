import Head from 'next/head';
import style from './IsNotLoginLandingPage.module.css';

export interface IPrimaryLayout {
  children: React.ReactNode;
  titleHead: string;
}

export default function IsNotLoginLandingPage({
  children,
  titleHead,
}: IPrimaryLayout) {
  return (
    <>
      <Head>
        <title>{titleHead}</title>
      </Head>
      <div className={style.PageLayout}>{children}</div>
    </>
  );
}
