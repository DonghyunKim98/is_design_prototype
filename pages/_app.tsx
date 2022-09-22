import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

import { LocaleProvider, UIProvider } from '@/provider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <UIProvider>
        <LocaleProvider>
          <Component {...pageProps} />
        </LocaleProvider>
      </UIProvider>
    </RecoilRoot>
  );
}

export default MyApp;
