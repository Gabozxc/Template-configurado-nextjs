import Head from 'next/head';
import styles from './css/PrimaryLayout.module.css';

export interface IPrimaryLayout {
  children: React.ReactNode;
  titleHead: string;
}

export default function PrimaryLayout({ children, titleHead }: IPrimaryLayout) {
  return (
    <>
      <Head>
        <title>{titleHead}</title>
      </Head>
      <main
        className={`${styles.main} bg-white-800 color-white dark:bg-gray-900`}
      >
        {children}
      </main>
    </>
  );
}
