import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import Fonts from '../components/fonts/fonts.component';
const Menu = dynamic(
  () => import('../components/menu/menu.component'),
  { ssr: false }
);

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Fonts />
      <Menu />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
