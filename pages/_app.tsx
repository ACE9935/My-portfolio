import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material/styles';
import Head from 'next/head';

const theme = createTheme({
  palette: {
    primary:{
      main:'#ffa500',
    },
    secondary:{
      main:'#ffffff'
    }
  }
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
          <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet" />
        </Head>
    <ThemeProvider theme={theme}>
     <Component {...pageProps} />
    </ThemeProvider>
    </>
    )
}

export default MyApp
