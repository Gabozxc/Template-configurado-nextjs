import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ButtonThemeToggler() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <button
      className="w-8 h-8 bg-blue-100 rounded-lg dark:bg-slate-900 flex items-center justify-center hover:ring-2 ring-blue-400 transition-all duration-300 focus:outline-none"
      onClick={changeTheme}
      aria-label="Toggle Dark Mode"
      type="button"
    >
      {theme === 'light' ? (
        <SunIcon className="text-blue-500 w-auto h-5" />
      ) : (
        <MoonIcon className="text-blue-400 w-auto h-5" />
      )}
    </button>
  );
}
