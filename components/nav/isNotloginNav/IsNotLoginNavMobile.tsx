import ButtonThemeToggler from '../../theme/ButtonThemeToggler/ButtonThemeToggler';
import { ContentNavMobile } from '../ContentNavMobile/ConentNavMobile';
import { Iurls } from '../interfaces/INavMobile';

export default function IsNotLoginNavMobile() {
  const urls: Iurls[] = [
    {
      section: 'section-1',
      urlsArray: [
        {
          name: 'Inicio',
          urlPage: '/',
        },

        {
          name: 'Crear cuenta',
          urlPage: '/register',
        },
      ],
    },
    {
      section: 'section-2',
      urlsArray: [
        {
          name: 'Iniciar sesion',
          urlPage: '/login',
        },
        {
          name: 'Sobre nosotros',
          urlPage: '/about',
        },
      ],
    },
    {
      section: 'section-3',
      urlsArray: [
        {
          name: 'Contactanos',
          urlPage: '/contacto',
        },
        {
          name: 'Cambiar tema',
          urlPage: '#',
          component: <ButtonThemeToggler />,
        },
      ],
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-40 backdrop-blur-sm border-gray-200 border-t dark:border-gray-500 min-h-[80px] flex flex-col justify-center">
      {<ContentNavMobile urls={urls} />}
    </nav>
  );
}
