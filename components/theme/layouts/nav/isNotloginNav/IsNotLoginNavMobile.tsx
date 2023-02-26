import ButtonThemeToggler from '../../../buttonThemeToggler/ButtonThemeToggler';
import { IsliderNavMobile } from '../../../interfaces/INavMobile';
import { SliderNavMobile } from '../../../navComponents/SliderNavMobile';

export default function IsNotLoginNavMobile() {
  const urls: IsliderNavMobile[] = [
    {
      section: 'section-1',
      urlsArray: [
        {
          name: 'Inicio',
          urlPage: '/',
        },

        {
          name: 'Crear cuenta',
          urlPage: '/signup',
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
  return <header>{<SliderNavMobile urls={urls} />}</header>;
}
