import "../styles/global.css";
import "@fontsource/roboto-mono";
import { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
