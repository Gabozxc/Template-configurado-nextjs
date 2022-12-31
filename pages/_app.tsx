import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import '../styles/tailwind.css';
import { NextPageWithLayout } from './interfaces/page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // describe what to do the code below
  // if Component has getLayout property, then use it, otherwise use default layouts
  const defaultLayout = Component.getLayout || ((page) => page);

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {defaultLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}

export default MyApp;
