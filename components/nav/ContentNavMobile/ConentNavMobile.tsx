import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import { Fragment, useCallback, useState } from 'react';

import Link from 'next/link';
import { Iurls } from '../interfaces/INavMobile';

export function ContentNavMobile({ urls }: { urls: Iurls[] }) {
  const router = useRouter();
  const { pathname } = router;

  const [sliderPosition, setSliderPosition] = useState(0);

  const prevSliderPosition = useCallback(() => {
    setSliderPosition(sliderPosition === 0 ? 0 : sliderPosition - 1);
  }, [sliderPosition]);

  const nextSliderPosition = useCallback(() => {
    setSliderPosition(
      sliderPosition === urls.length - 1 ? urls.length - 1 : sliderPosition + 1
    );
  }, [sliderPosition, urls.length]);

  return (
    <>
      <div className="w-8 h-8">
        <ChevronLeftIcon onClick={prevSliderPosition} />
      </div>
      <div className="relative w-full">
        {urls.map((section, index) => {
          return (
            <div
              key={section.section}
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
              {section.urlsArray.map((url) => {
                return (
                  <Fragment key={section.section + url.name + url.urlPage}>
                    {url.component ? (
                      <div>{url.component}</div>
                    ) : (
                      <Link
                        href={url.urlPage}
                        className={`p-2 border border-transparent text-center ${
                          pathname === url.urlPage
                            ? 'text-black dark:text-white font-bold'
                            : 'text-gray-500 dark:text-gray-400'
                        } 
                          ${
                            url.name === 'Crear cuenta' &&
                            'rounded text-center bg-black !text-white hover:!bg-white hover:!text-black hover:!border-black active:bg-white active:!text-black active:!border-black dark:bg-white dark:!text-black dark:hover:!bg-black dark:hover:!text-white dark:hover:!border-white dark:active:bg-black dark:active:!text-white dark:active:!border-white'
                          }
                          `}
                        aria-disabled={pathname === url.urlPage}
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
        <ChevronRightIcon onClick={nextSliderPosition} />
      </div>
    </>
  );
}
