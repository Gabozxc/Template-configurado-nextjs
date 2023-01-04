import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

import { NextPageWithLayout } from '../interfaces/page';

import '../styles/fonts.css';
import '../styles/tailwind.css';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = useState(() => new QueryClient());
  const defaultLayout = Component.getLayout || ((page) => page);
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider enableSystem={true} attribute="class">
          {defaultLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
