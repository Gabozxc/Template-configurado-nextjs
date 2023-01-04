import Link from 'next/link';
import ButtonThemeToggler from '../../ButtonThemeToggler/ButtonThemeToggler';
import styles from './SidebarLayout.module.css';

const SidebarLayout = () => {
  return (
    <nav
      className={`${styles.nav} transition duration-300 bg-gray-100 border-r border-gray-200 dark:bg-night  dark:border-gray-500`}
    >
      <div className="flex justify-center items-center flex-col">
        <ButtonThemeToggler />
      </div>
      <input className={styles.input} placeholder="Search..." />
      <Link
        href="/"
        className="focus:outline-none rounded border-solid border-2 border-transparent hover:ring-1 bg-white text-gray-900 hover:bg-blue-800 hover:text-white 
        dark:bg-slate-800 dark:text-white dark:hover:bg-slate-900 dark:hover:ring-2"
      >
        Home
      </Link>
      <Link
        href="/about/"
        className="focus:outline-none rounded border-solid border-2 border-transparent hover:ring-1 bg-white text-gray-900 hover:bg-blue-800 hover:text-white 
        dark:bg-slate-800 dark:text-white dark:hover:bg-slate-900 dark:hover:ring-2"
      >
        About
      </Link>
    </nav>
  );
};

export default SidebarLayout;
