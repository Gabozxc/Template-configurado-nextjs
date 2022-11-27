import { useEffect, useState } from 'react';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout';
import styles from '../styles/Home.module.css';
import { Data } from './interfaces/Data';
import { NextPageWithLayout } from './interfaces/page';

const Home: NextPageWithLayout = () => {
  //fetch api/hello.ts
  const [data, setData] = useState<Data>({ name: 'Loading...' });
  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data: Data) => setData(data));
  }, []);
  return (
    <section className={styles.main}>
      <h1 className={styles.title}>Welcome to bussines admin</h1>
      {data.name}
    </section>
  );
};

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};
export default Home;
