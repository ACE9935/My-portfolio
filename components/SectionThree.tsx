import { Typography,Box, Paper } from "@mui/material";
import { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import AnimateText from "./AnimateText";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { data } from "../projects-data";
import ProjectCard from "./ProjectCard";
import Skills from "./Skills";

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
        <section id='Skills' className="flex flex-col md:items-center w-full">
        <section className="flex items-center w-[100%]">
            <div className="w-[100%] bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0)] md:hover:bg-left-top duration-1000 bg-blend-multiply aspect-[1/0.4] min-h-[30rem] bg-center bg-cover bg-[url('/exc.jpg')] flex justify-center items-center">
            <AnimateText text='PASSION CREATIVITY INNOVATION' className='text-white font-bold text-[calc(1em+3vw)] text-center'/>
            </div>
        </section>
        <Box className="sx-2 px-2 flex flex-col md:flex-row md:space-y-0 space-y-[2rem] justify-between md:space-x-3 w-full max-w-[73rem]">
       <Skills/>
          <Box className="p-6 text-white md:w-[34rem] bg-darkBlue flex flex-col justify-center items-center space-y-4">
          <Typography gutterBottom className='!text-4xl pb-5 text-amber-500 font-bold text-center'>My projects</Typography>
          {data.map((o,i)=><ProjectCard key={i} {...o}/>)}
          </Box>
        </Box>
        </section>
     );
}

export default SectionThree;