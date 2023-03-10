import { ThemeProvider } from "../state/ThemeProvider";
import { ShowsProvider } from "../state/ShowsContext";
import Layout from "../components/Layout"
import "../styles/Swiper.css";
import "../styles/globals.css";
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
// import '../components/Slider/Slider.css'



function MyApp({ Component, pageProps }) {
    const router = useRouter()
    useEffect(() => {
      const handleRouteChange = (url) => {
        gtag.pageview(url)
      }
      router.events.on('routeChangeComplete', handleRouteChange)
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
      }
    }, [router.events])

  return (
    <ThemeProvider>
    <ShowsProvider>

          <Layout>
            <Component {...pageProps} />
          </Layout>
         
    </ShowsProvider>
    </ThemeProvider>
  );
}

export default MyApp;
