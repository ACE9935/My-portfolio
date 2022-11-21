import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import FullAppBar from '../components/FullAppBar'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import SectionOne from '../components/SectionOne';
import AnimateText from '../components/AnimateText';
import SectionTwo from '../components/SectionTwo';
import SectionThree from '../components/SectionThree';
import SectionFour from '../components/SectionFour';
import '@popperjs/core'
import bootstrap from 'bootstrap';

const Home: NextPage = () => {
  const [openAppBar,setOpen]=useState(false)
  const theme=useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(()=>{
    const bootstrap=require("bootstrap/dist/js/bootstrap")
    var scrollSpy = new bootstrap.ScrollSpy(document.querySelector('main'), {
      target: '#navbar'
    })
   },[])

  return (
    <>
    <Header setOpen={setOpen}/>
    <FullAppBar open={openAppBar && matches } setOpen={setOpen}/>
    <main data-bs-spy="scroll" data-bs-target="#navbar" className='relative'>
    <SectionOne/>
    <SectionTwo/>
     <SectionThree/>
     <SectionFour/>
     </main>
    </>
  )
}

export default Home
