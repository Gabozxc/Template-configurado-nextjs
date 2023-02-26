import Link from 'next/link';
import ButtonThemeToggler from '../../buttonThemeToggler/ButtonThemeToggler';

export default function FooterLayout() {
  return (
    <footer className="hidden transition duration-300 border-t border-gray-200 bg-gray-100 dark:bg-night dark:border-gray-500 md:flex justify-evenly flex-row-reverse py-4">
      <ButtonThemeToggler />
      <Link href="/">Home</Link>
    </footer>
  );
}
