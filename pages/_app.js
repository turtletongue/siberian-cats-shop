import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import Fonts from '../components/fonts/fonts.component';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp
