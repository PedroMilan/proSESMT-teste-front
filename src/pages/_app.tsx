import type { AppProps } from "next/app";

import { createTheme, ThemeProvider } from "@mui/material";

import "@/styles/globals.css";

const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthXl: {
          maxWidth: "1080px !important",
        },
      },
    },

    MuiFormLabel: {
      styleOverrides: {
        root: {
          backgroundColor: "#f5f5f5",
          padding: "0 5px",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          margin: "5px 0",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#f5f5f5",
          marginBottom: "15px",
        },
      },
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
