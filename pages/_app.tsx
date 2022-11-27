import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { NextPageWithLayout } from './interfaces/page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const layout = Component.getLayout || ((page) => page);

  return layout(<Component {...pageProps} />);
}

export default MyApp;
