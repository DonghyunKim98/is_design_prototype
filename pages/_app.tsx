import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';

import { LocaleProvider, UIProvider } from '@/provider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <UIProvider>
        <LocaleProvider>
          <Head>
            <title>통합 챗봇</title>
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:title" content="통합 챗봇 - 모든 민원을 하나의 사이트에서!" />
            <meta name="description" content="이제 모든 민원을 한 곳에서 관리해보세요!" />
          </Head>
          <Component {...pageProps} />
        </LocaleProvider>
      </UIProvider>
    </RecoilRoot>
  );
}

export default MyApp;
