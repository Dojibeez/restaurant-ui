import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import "swiper/css/bundle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider attribute="class">
        {" "}
        <Component {...pageProps} />{" "}
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default MyApp;
