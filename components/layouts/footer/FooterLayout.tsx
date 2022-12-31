import Link from 'next/link';
import ButtonThemeToggler from '../theme/ButtonThemeToggler';
import styles from './FooterLayout.module.css';

export interface ISidebarLayout {}

const FooterLayout: React.FC<ISidebarLayout> = () => {
  return (
    <footer
      className={
        styles.footer +
        ' transition duration-300 border-t border-gray-200 bg-gray-100 dark:bg-night dark:border-gray-500'
      }
    >
      <ButtonThemeToggler />
      <Link href="/">Homes</Link>
    </footer>
  );
};

export default FooterLayout;
