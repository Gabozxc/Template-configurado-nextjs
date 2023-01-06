import Link from 'next/link';
import { useRouter } from 'next/router';
import ButtonThemeToggler from '../../theme/ButtonThemeToggler/ButtonThemeToggler';

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
    <nav className="fixed top-0 left-0 w-full z-40 backdrop-blur-sm border-gray-200 border-b dark:border-gray-500">
      <div className="flex items-center justify-between">
        <div className="w-full text-gray-600 sm:flex sm:items-center">
          <div className="flex flex-col -mx-4 sm:flex-row md:flex-row md:items-center md:mx-8">
            {urls.map((url) => (
              <Link
                href={url.url}
                key={url.name}
                className={`mx-4 my-2 text-gray-400 hover:text-black dark:text-gray-400 dark:hover:text-white md:text-sm lg:text-base text-center ${
                  !url.url.localeCompare(pathname) &&
                  `!text-black dark:!text-white font-bold`
                }`}
              >
                {url.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="sm:flex sm:items-center sm:justify-end sm:w-full">
          <div className="flex flex-row sm:items-center -mx-4 sm:md:mx-8">
            <Link
              href="/login"
              className={`mx-4 my-2 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white md:text-sm lg:text-base ${
                pathname === '/login' &&
                `!text-black dark:!text-white font-bold`
              }`}
            >
              Iniciar sesion
            </Link>
            <a
              href="#"
              className="mx-4 my-2 p-2 md:text-sm lg:text-base text-center border rounded bg-black text-white hover:bg-white hover:text-black hover:border-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white dark:hover:border-white"
            >
              Crear cuenta
            </a>
            <div className="sm:flex md:items-center">
              <ButtonThemeToggler />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
