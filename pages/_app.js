import { ThemeProvider } from '@chakra-ui/core';
import '../global.css';

export default function MyApp({ Component, pageProps }) {
   return (
      <ThemeProvider>
         <Component {...pageProps} />
      </ThemeProvider>
   )
}
