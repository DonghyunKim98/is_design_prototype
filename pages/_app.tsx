import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

import { AppProps } from 'next/app';

import { LocaleProvider, UIProvider } from '@/provider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <LocaleProvider>
        <Component {...pageProps} />
      </LocaleProvider>
    </UIProvider>
  );
}

export default MyApp;
