import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../../components/layouts/sidebar/SidebarLayout';
import { NextPageWithLayout } from '../interfaces/page';
import styles from './style.module.css';

const About: NextPageWithLayout = () => {
  return (
    <section className={styles.p}>
      <h2>Layout Example (About)</h2>
      <p>
        This example adds a property <code>getLayout</code> to your page,
        allowing you to return a React component for the layout. This allows you
        to define the layout on a per-page basis. Since we&apos;re returning a
        function, we can have complex nested layouts if desired.
      </p>
    </section>
  );
};

About.getLayout = (page) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};

export default About;
