import { Footer } from "components/navigation/Footer";
import { Header } from "components/navigation/Header";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Header />
      <div className="relative h-[1px] snap-start overflow-hidden bg-transparent text-dark">
        LOL
      </div>
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
