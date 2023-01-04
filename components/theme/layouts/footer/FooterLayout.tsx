import Link from 'next/link';
import ButtonThemeToggler from '../../ButtonThemeToggler/ButtonThemeToggler';

export interface ISidebarLayout {}

const FooterLayout: React.FC<ISidebarLayout> = () => {
  return (
    <footer className="transition duration-300 border-t border-gray-200 bg-gray-100 dark:bg-night dark:border-gray-500">
      <ButtonThemeToggler />
      <Link href="/">Home</Link>
    </footer>
  );
};

export default FooterLayout;
