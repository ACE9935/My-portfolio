import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material/styles';
import Head from 'next/head';
import { Provider } from 'react-redux';
import {store} from '../app-state/app-store'

const theme = createTheme({
  palette: {
    primary:{
      main:'#4fd78f',
    },
    secondary:{
      main:'#36393b'
    }
  }
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    
    <ThemeProvider theme={theme}>
    <Provider store={store}>
     <Component {...pageProps} />
     </Provider>
    </ThemeProvider>
    </>
    )
}

export default MyApp
