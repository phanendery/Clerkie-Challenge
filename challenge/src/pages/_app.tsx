import "../styles/Sidebar.css";
import type { AppProps } from "next/app";
import "../styles/fonts.css";
import "../styles/home.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
