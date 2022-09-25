import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Paper, Typography,Box,Grid,styled,Container } from "@mui/material";
import { ReactElement, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

function SectionTwo() {
gsap.registerPlugin(ScrollTrigger);
    useEffect(()=>{
      document.querySelectorAll('.sx-22>*,.bx-2>*').forEach(i => {

        gsap.fromTo(i,{opacity:0},{opacity:1,duration:1.3,
          scrollTrigger:{
            trigger: i,
            start: '-20% 50%'
          }})
        
      });
    },[])


    return ( 
        <section id='Bio' className="sx bg-mediumBlue grid place-items-center">
          <section className="sx-22 px-6 py-16 xl:py-0 w-full max-w-[78rem] grid space-y-14">
         <Box sx={{boxShadow:'80px -50px 0px -15px #89AAC3'}} className="z-[5] min-h-[22rem] flex items-center relative lg:top-[10rem] bg-lBlack w-full max-w-[38rem] p-4 py-10 bg-lBlack">
          <Typography component='div' className="text-white text-xl">
          <Typography gutterBottom className='font-bold text-4xl text-amber-500'>Who am I?</Typography>
          My name is Anas and I’m a part-time full-stack web developer specialized in front-end technologies.
I specialise in creating minimalist, clean and high-converting user experiences for web and mobile.
I am very passionate about improving web design and continuously learning new things to ensure I offer you the best.
          <br/> 
          <br/>
          
          </Typography>
         </Box>
         <Box className="flex bx-2 justify-end lg:flex-col space-y-12 space-x-3 w-full lg:max-w-[30rem] justify-self-end">
         <Box className="grayscale hover:grayscale-0 transition-[filter] duration-500 relative w-full max-w-[30rem] aspect-[1/0.7]">
          <Image src='/o1.webp' layout="fill" objectFit="cover"/>
         </Box>
         <Box className="grayscale hover:grayscale-0 transition-[filter] duration-500 relative w-full max-w-[20rem] aspect-[1/1]">
          <Image src='/o2.jpg' layout="fill" objectFit="cover"/>
         </Box>
         </Box>
         <Box sx={{boxShadow:'80px -50px 0px -15px #89AAC3'}} className="relative lg:top-[-10rem] bg-lBlack w-full max-w-[38rem] p-4 py-10 bg-lBlack">
          <Typography component='div' className="text-white text-xl">
          <Typography gutterBottom className='font-bold text-4xl text-amber-500'>Who did I learn programming?</Typography>
          My knowledge af programming comes mainly from self-learning and online resources, and with the help of the internet and my determination and my motivation I was able to acquire a set of good and valuable skills in the world of web development.
          <br/> 
          <br/>
          In the span of just 1.5 year, I was able to both learn and practice web development, and I got the chance to work on a number of personal projects which game me more confidence to work on bigger projects and to help others.
          </Typography>
         </Box>
         </section>
        </section>
     );
}

export default SectionTwo;