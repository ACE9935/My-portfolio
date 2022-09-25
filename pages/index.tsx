import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import FullAppBar from '../components/FullAppBar'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import SectionOne from '../components/SectionOne';
import AnimateText from '../components/AnimateText';
import SectionTwo from '../components/SectionTwo';
import SectionThree from '../components/SectionThree';
import SectionFour from '../components/SectionFour';

const Home: NextPage = () => {
  const [openAppBar,setOpen]=useState(false)
  const theme=useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
    <Header setOpen={setOpen}/>
    <FullAppBar open={openAppBar && matches } setOpen={setOpen}/>
    <SectionOne/>
    <SectionTwo/>
     <SectionThree/>
     <SectionFour/>
    </>
  )
}

export default Home
