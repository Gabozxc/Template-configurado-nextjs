import Link from 'next/link';
import { useRouter } from 'next/router';
import ButtonThemeToggler from '../../../buttonThemeToggler/ButtonThemeToggler';

export default function LoginNavDesktop() {
  const router = useRouter();
  const { pathname } = router;
  const urls = [
    {
      name: 'Inicio',
      url: '/',
    },
    {
      name: 'Sobre nosotros',
      url: '/about',
    },
    {
      name: 'Contactanos',
      url: '/contacto',
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-40 backdrop-blur-sm border-gray-200 border-b dark:border-gray-500 flex items-center justify-between">
      <div className="flex items-center justify-start flex-row -mx-4 sm:flex-row md:mx-8 w-full">
        {urls.map((url) => (
          <Link
            href={url.url}
            key={url.name}
            className={`mx-4 my-2 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white md:text-sm lg:text-base text-center ${
              !url.url.localeCompare(pathname) &&
              `!text-black dark:!text-white font-bold`
            }`}
          >
            {url.name}
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-end flex-row -mx-4 sm:flex-row md:mx-8 w-full">
        <Link
          href="/login"
          className={`mx-4 my-2 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white md:text-sm lg:text-base ${
            pathname === '/login' && `!text-black dark:!text-white font-bold`
          }`}
        >
          Iniciar sesion
        </Link>
        <Link
          href="/signup"
          className="mx-4 my-2 p-2 md:text-sm lg:text-base text-center border rounded bg-black text-white hover:bg-white hover:text-black hover:border-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white dark:hover:border-white"
        >
          Crear cuenta
        </Link>
        <ButtonThemeToggler />
      </div>
    </nav>
  );
}
