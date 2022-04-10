import "../styles/global.css";
import "@fontsource/roboto-mono/100.css";
import "@fontsource/roboto-mono/300.css";
import "@fontsource/roboto-mono/400.css";
import "@fontsource/roboto-mono/600.css";
import "@fontsource/roboto-mono/700.css";
import "@fontsource/oxanium/400.css";
import "@fontsource/inter/600.css";

import { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
