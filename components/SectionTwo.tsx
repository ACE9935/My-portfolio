import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Paper, Typography,Box,Grid,styled,Container } from "@mui/material";
import { ReactElement, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Devices, ToggleOff, Storage } from "@mui/icons-material";

function SectionTwo() {
gsap.registerPlugin(ScrollTrigger);
    useEffect(()=>{
      document.querySelectorAll('.sc>*').forEach(i => {

        gsap.fromTo(i,{opacity:0},{opacity:1,duration:1.3,
          scrollTrigger:{
            trigger: i,
            start: '-20% 50%'
          }})
        
      });
    },[])


    return ( 
        <section id='Bio' className="p-14 pb-36 bg-dark grid place-items-center">
          <div className="max-w-[100rem]">
          <Typography className='text-[1.2rem] pb-2'>My <span className="text-main">skills</span></Typography>
          <Typography component='h1' variant='h3' className="font-bold">What I do</Typography>
          <article className="sc pt-16 w-fit grid grid-cols-1 m-auto md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-[3.6rem]">
            <Box className='bg-secondary max-w-[21rem] rounded-sm p-8 flex flex-col items-center'>
            <ToggleOff className="!text-[6rem] text-main"/>
            <Typography component='h2' className="font-bold text-[1.3rem] pb-3">Interactive Experience</Typography>
            <Typography className='text-[1rem] text-slate-300 text-center'>I'm able to deliver an interactive experience using the latest web technologies</Typography>
            </Box>
            <Box className='bg-secondary max-w-[21rem] rounded-sm p-8 flex flex-col items-center'>
            <Devices className="!text-[6rem] text-main"/>
            <Typography component='h2' className="font-bold text-[1.3rem] pb-3">Responsive Design</Typography>
            <Typography className='text-[1rem] text-slate-300 text-center'>Responsiveness is an important aspect in web development and as a web developer I always make sure that my websites responsive enough</Typography>
            </Box>
            <Box className='bg-secondary max-w-[21rem] rounded-sm p-8 flex flex-col items-center'>
            <Storage className="!text-[6rem] text-main"/>
            <Typography component='h2' className="font-bold text-[1.3rem] pb-3">Backend & API Fetching</Typography>
            <Typography className='text-[1rem] text-slate-300 text-center'>Linking backend and frontend is what makes a website constantly updating, therefore I consider it an important step when making websites</Typography>
            </Box>
          </article>
          </div>
        </section>
     );
}

export default SectionTwo;