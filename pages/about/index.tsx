import { useCallback, useState } from 'react';
import { useQueryClient } from 'react-query';
import FooterLayout from '../../components/theme/layouts/footer/FooterLayout';
import PrimaryLayout from '../../components/theme/layouts/primary/PrimaryLayout';
import SidebarLayout from '../../components/theme/layouts/sidebar/SidebarLayout';
import useGetUsers from '../../hooks/useGetUsers';
import { NextPageWithLayout } from '../../interfaces/page';

const About: NextPageWithLayout = () => {
  const queryClient = useQueryClient();
  const allCharacters = queryClient
    .getQueryCache()
    .findAll(['personaje'], { exact: false }).length;

  const [id, setId] = useState<number>(allCharacters > 0 ? allCharacters : 1);
  const changeCharacter = useCallback(
    (identificador: number) => {
      setId(identificador);
    },
    [setId]
  );
  const { data, isLoading, isError, error } = useGetUsers(id);

  if (isLoading) return <p>Loading...</p>;
  if (isError || error) return <p>Error</p>;

  return (
    <section>
      <div className="pt-6 mt-28">
        <div className="flex justify-center items-center flex-col">
          <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-10 transition duration-300">
            <div className="p-5">
              <a href="#" aria-label="asdsad">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Soy un h5
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <b>His name is {data?.name}</b>
                Lorem ipsum dolor sit amet. Cum laudantium laborum ut saepe
                facilis aut rerum corporis qui debitis voluptas. Rerum dolores
                aut voluptas galisum aut iure repellendus.
              </p>
              <a
                href="#"
                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => changeCharacter(id + 1)}
              >
                Read more
                <svg
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

About.getLayout = (page) => {
  return (
    <PrimaryLayout titleHead="Pagina about">
      <SidebarLayout />
      {page}
      <FooterLayout />
    </PrimaryLayout>
  );
};

export default About;
