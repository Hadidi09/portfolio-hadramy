import "../styles/globals.css";
import "../styles/addstyle.css"
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";
//import "react-medium-image-zoom/dist/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return  <Component {...pageProps} />
     
}

export default MyApp;
