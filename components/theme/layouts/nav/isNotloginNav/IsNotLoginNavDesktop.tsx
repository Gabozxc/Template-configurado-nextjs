import ButtonThemeToggler from '../../../buttonThemeToggler/ButtonThemeToggler';
import NavDesktop from '../../../navComponents/NavDesktop';

export default function LoginNavDesktop() {
  const urls = [
    {
      section: 'section-1',
      urlsArray: [
        {
          name: 'Inicio',
          urlPage: '/',
        },

        {
          name: 'Iniciar sesion',
          urlPage: '/login',
        },
      ],
    },
    {
      section: 'section-3',
      urlsArray: [
        {
          name: 'Crear cuenta',
          urlPage: '/signup',
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
    <header>
      <NavDesktop urls={urls} />
    </header>
  );
}
