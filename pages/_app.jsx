import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globalStyles";
import { theme } from "../styles/theme";
import "../styles/globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (<>
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <NavBar/>
    <Component {...pageProps} />
    <Footer/>
  </ThemeProvider>
  

  </>)
}
 
export default MyApp
