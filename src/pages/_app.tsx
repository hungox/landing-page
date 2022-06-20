import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';

import nextI18NextConfig from '../../next-i18next.config';

import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default appWithTranslation(MyApp, nextI18NextConfig);
