import Link from 'next/link';
import { useRouter } from 'next/router';
import { INavDesktop } from '../interfaces/INavMobile';

export default function NavDesktop({ urls }: { urls: INavDesktop[] }) {
  const router = useRouter();
  const { pathname } = router;

  return (
    <nav className="fixed top-0 left-0 w-full z-40 backdrop-blur-sm border-gray-200 border-b dark:border-gray-500 flex items-center justify-between p-2">
      {urls.map((url) => (
        <div key={url.section} className="flex flex-row">
          {url.urlsArray.map((url) => (
            <div key={url.name} className="flex flex-row items-center">
              {url.component ? (
                url.component
              ) : (
                <Link
                  href={url.urlPage}
                  className={`mx-4 my-2 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white md:text-sm lg:text-base ${
                    pathname === url.urlPage &&
                    `!text-black dark:!text-white font-bold`
                  }`}
                >
                  {url.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      ))}
    </nav>
  );
}
