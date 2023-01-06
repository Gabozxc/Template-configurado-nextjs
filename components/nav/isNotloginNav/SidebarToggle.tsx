import {
  ArrowLeftIcon,
  HomeIcon,
  PhoneIcon,
  UserGroupIcon,
} from '@heroicons/react/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface ISidebarToggle {
  setTogleSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  togleSidebar: boolean;
}

export default function SidebarToggle({
  setTogleSidebar,
  togleSidebar,
}: ISidebarToggle) {
  const router = useRouter();
  const currentRoute = router.pathname;

  const routes = [
    {
      name: 'Inicio',
      href: '/',
      icon: HomeIcon,
    },
    {
      name: 'Sobre nosotros',
      href: '/about',
      icon: UserGroupIcon,
    },
    {
      name: 'Contactanos',
      href: '/contactUs',
      icon: PhoneIcon,
    },
  ];
  const filteredRoutes = routes.filter((route) => route.href !== currentRoute);
  const handleToggleSidebar = () => {
    setTogleSidebar(false);
  };

  return (
    <aside
      className={`"transition-transform duration-500 z-50 fixed border-r border-r-gray-200 dark:border-gray-500	 ${
        togleSidebar ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="h-screen w-52 overflow-y-auto px-3 py-0 backdrop-blur-sm ">
        <ul className="space-y-2 h-5/6 flex flex-col">
          {filteredRoutes.map((route) => (
            <li key={route.name} className="my-5">
              <Link href={route.href}>
                <span className="flex justify-between">
                  {route.name} <route.icon className="w-5 h-5" />
                </span>
              </Link>
            </li>
          ))}

          <li className="flex justify-center items-center !mt-auto">
            <button
              className="w-16 h-8 bg-blue-100 rounded-lg  flex items-center justify-center hover:ring-2 ring-blue-400 transition-all duration-300 focus:outline-none dark:bg-slate-900 absolute"
              onClick={handleToggleSidebar}
              aria-label="Toggle Sidebar"
              type="button"
            >
              <ArrowLeftIcon className="w-auto h-5" />
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
}
