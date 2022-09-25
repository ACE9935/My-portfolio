import { Typography,Box, Paper } from "@mui/material";
import { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import AnimateText from "./AnimateText";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import {Web,Devices,Animation,Storage,Mouse,ToggleOff} from '@mui/icons-material';

function SectionThree() {     

  gsap.registerPlugin(ScrollTrigger);
  useEffect(()=>{
    document.querySelectorAll('.sx-2>*').forEach(i => {

      gsap.fromTo(i,{y:'30rem',opacity:0},{y:'-3.4rem',opacity:1,duration:1,
        scrollTrigger:{
          start:'-=900',
          trigger: i,
          
        }})
      
    });
  },[])

    return ( 
        <section id='Skills'>
        <section className="flex items-center">
            <Box className="w-full bg-[rgba(0,0,0,0.5)] bg-fixed hover:bg-[rgba(0,0,0,0)] md:hover:bg-left-top transition-all duration-1000 bg-blend-multiply aspect-[1/0.4] min-h-[30rem] bg-center bg-cover bg-[url('/imgxx.jpg')] flex justify-center items-center">
            <AnimateText text='PASSION CREATIVITY INNOVATION' className='overflow-hidden text-white font-bold text-[calc(2em+2vw)] text-center'/>
            </Box>
        </section>
        <Box className="sx-2 px-2 flex flex-col sm:flex-row space-y-[2rem] sm:space-y-0 justify-center md:space-x-[10rem]">
        <Box className="p-3 text-white w-full sm:w-[26rem] translate-y-[-3.4rem] bg-darkBlue justify-items-center grid grid-cols-3 gap-y-[2rem] sm:grid-cols-2">
          <Box className='flex items-center justify-center flex-col space-y-3'><Web className="text-[5rem] bg-slate-500 rounded-full p-3"/><Typography className="text-slate-200 text-center">Flexible
Layouts</Typography></Box>
<Box className='flex items-center justify-center flex-col space-y-3'><Devices className="text-[5rem] bg-slate-500 rounded-full p-3"/><Typography className="text-slate-200 text-center">Responsive
Design</Typography></Box>
<Box className='flex items-center justify-center flex-col space-y-3'><Animation className="text-[5rem] bg-slate-500 rounded-full p-3"/><Typography className="text-slate-200 text-center">Cool Animations</Typography></Box>
<Box className='flex items-center justify-center flex-col space-y-3'><Storage className="text-[5rem] bg-slate-500 rounded-full p-3"/><Typography className="text-slate-200 text-center">API Fetching</Typography></Box>
<Box className='flex items-center justify-center flex-col space-y-3'><Mouse className="text-[5rem] bg-slate-500 rounded-full p-3"/><Typography className="text-slate-200 text-center">Smooth Scrolling</Typography></Box>
<Box className='flex items-center justify-center flex-col space-y-3'><ToggleOff className="text-[5rem] bg-slate-500 rounded-full p-3"/><Typography className="text-slate-200 text-center">Interactive Experience</Typography></Box>
<Typography className='text-slate-100 text-xl col-span-3 sm:col-span-2'>And more...</Typography>
          </Box>
          <Box className="p-3 text-white sm:w-[30rem] bg-darkBlue sm:translate-y-[-3.4rem]">
          <Typography gutterBottom className='text-4xl text-amber-500 font-bold'>My skills?</Typography>
          <Typography className="text-lg"> 
          I specialise in both the front-end and the back-end, letting me able to create fully functional websites with high interactivity and flexibility.<br/>
          Not to forget the amount of frameworks and libraries I use which makes my coding experience more enjoyable and thus results in better results.
          <br/>
          <br/>
          But the most important thing I take care of in my projects is the consistent look of my website across all devices, this crucial aspect, called responsiveness, is really what elevates the user&apos;s experience, that&apos;s why I give it slightly more importance in my projects.
            </Typography>
          </Box>
        </Box>
        </section>
     );
}

export default SectionThree;