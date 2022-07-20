import { Footer } from "components/common/navigation/Footer";
import { Header } from "components/common/navigation/Header";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
