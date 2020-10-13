import { AppProps } from 'next/app';
import '../styles/index.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default MyApp;
