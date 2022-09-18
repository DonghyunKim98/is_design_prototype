import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

import { AppProps } from 'next/app';

import { UIProvider } from '@/provider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <Component {...pageProps} />
    </UIProvider>
  );
}

export default MyApp;
