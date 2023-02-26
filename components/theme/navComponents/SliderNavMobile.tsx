import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import { Fragment, useCallback, useState } from 'react';

import Link from 'next/link';
import { IsliderNavMobile } from '../interfaces/INavMobile';

export function SliderNavMobile({ urls }: { urls: IsliderNavMobile[] }) {
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
    <nav className="fixed bottom-0 left-0 w-full z-40 backdrop-blur-sm border-gray-200 border-t dark:border-gray-500 min-h-[80px] flex flex-col justify-center">
      <div className="flex items-end justify-between flex-row flex-nowrap">
        <div className="w-8 h-8 self-center">
          <ChevronLeftIcon
            onClick={prevSliderPosition}
            className={sliderPosition === 0 ? 'hidden' : 'block'}
          />
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
                          className={`p-2 border border-transparent text-center font-bold ${
                            pathname === url.urlPage
                              ? 'hidden'
                              : 'text-gray-600 dark:text-gray-400'
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
        <div className="w-8 h-8 self-center">
          <ChevronRightIcon
            onClick={nextSliderPosition}
            className={sliderPosition + 1 === urls.length ? 'hidden' : 'block'}
          />
        </div>
      </div>
    </nav>
  );
}
