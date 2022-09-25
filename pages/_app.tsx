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
    
    <ThemeProvider theme={theme}>
     <Component {...pageProps} />
    </ThemeProvider>
    </>
    )
}

export default MyApp
