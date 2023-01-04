import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
import ButtonThemeToggler from '../../theme/ButtonThemeToggler/ButtonThemeToggler';

interface IloginNavMobile {}

interface Iurls {
  section: string;
  urlsArray: {
    name: string;
    url: string;
    component?: unknown;
  }[];
}

const LoginNavMobile: React.FC<IloginNavMobile> = () => {
  const router = useRouter();
  const { pathname } = router;

  const [sliderPosition, setSliderPosition] = useState(0);
  const urls: Iurls[] = [
    {
      section: 'section-1',
      urlsArray: [
        {
          name: 'Inicio',
          url: '/',
        },

        {
          name: 'Crear cuenta',
          url: '/register',
        },
      ],
    },
    {
      section: 'section-2',
      urlsArray: [
        {
          name: 'Iniciar sesion',
          url: '/login',
        },
        {
          name: 'Sobre nosotros',
          url: '/about',
        },
      ],
    },
    {
      section: 'section-3',
      urlsArray: [
        {
          name: 'Contactanos',
          url: '/contacto',
        },
        {
          name: 'Cambiar tema',
          url: '#',
          component: <ButtonThemeToggler />,
        },
      ],
    },
  ];

  const urlsFiltered = urls.map((url) => {
    return {
      section: url.section,
      urlsArray: url.urlsArray.filter((url) => url.url !== pathname),
    };
  });

  return (
    <nav className="fixed bottom-0 left-0 w-full z-40 backdrop-blur-sm border-gray-200 border-t dark:border-gray-500 min-h-[80px] flex flex-col justify-center">
      <div className="flex items-end justify-between flex-row flex-nowrap">
        <div className="w-8 h-8">
          <ChevronLeftIcon
            onClick={() => {
              setSliderPosition(sliderPosition === 0 ? 0 : sliderPosition - 1);
            }}
          />
        </div>
        <div className="relative w-full">
          {urlsFiltered.map((section, index) => {
            return (
              <div
                key={index + section.section}
                className={`w-full h-full right-auto mx-auto top-0 bottom-0 flex items-center justify-center transition-transform duration-1000 ease-in-out transform
              ${
                sliderPosition === index
                  ? `translate-x-0`
                  : `${
                      sliderPosition > index
                        ? 'absolute -translate-x-[670px] pointer-events-none'
                        : 'absolute translate-x-[670px]  pointer-events-none'
                    }`
              }`}
              >
                {section.urlsArray.map((url, index) => {
                  return (
                    <Fragment key={section.section + index}>
                      {url.component ? (
                        <div>
                          <ButtonThemeToggler />
                        </div>
                      ) : (
                        <Link
                          href={url.url}
                          className={`p-2 border border-transparent text-center ${
                            pathname === url.url
                              ? 'text-black dark:text-white font-bold'
                              : 'text-gray-500 dark:text-gray-400'
                          } 
                          ${
                            url.name === 'Crear cuenta' &&
                            'rounded text-center bg-black !text-white hover:!bg-white hover:!text-black hover:!border-black active:bg-white active:!text-black active:!border-black dark:bg-white dark:!text-black dark:hover:!bg-black dark:hover:!text-white dark:hover:!border-white dark:active:bg-black dark:active:!text-white dark:active:!border-white'
                          }
                          `}
                          aria-disabled={pathname === url.url}
                        >
                          {url.name}
                        </Link>
                      )}
                    </Fragment>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="w-8 h-8">
          <ChevronRightIcon
            onClick={() => {
              setSliderPosition(
                sliderPosition === urls.length - 1
                  ? urls.length - 1
                  : sliderPosition + 1
              );
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default LoginNavMobile;
