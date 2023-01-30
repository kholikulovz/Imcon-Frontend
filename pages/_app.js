import '../src/Assets/scss/main.scss'
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
