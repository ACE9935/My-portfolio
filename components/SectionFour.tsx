import { Typography,Box, IconButton } from "@mui/material";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import GitHubIcon from '@mui/icons-material/GitHub';

function SectionFour() {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(()=>{

        gsap.fromTo('.sx-44',{opacity:0,x:'60rem'},{opacity:1,x:0,duration:1,
          scrollTrigger:{
            trigger: '.sx-4',
            start: '-=200'
          }})
    
    },[])
    return ( 
        <section id='Contact' className="sx-4 p-6 overflow-x-hidden">
          <div className="sx-44">
        <Box className="flex items-center flex-wrap pb-7">
          <Typography className="underline text-white !text-[calc(4rem+4vw)] !font-bold leading-[1.5]">Drop a 
          <br/>
          message</Typography> 
          <Box className='text-white !text-md border border-4 p-2 rounded-xl self-end sm:m-7'>anaselmouden99@gmail.com</Box>
        </Box>
        <Typography className="!text-xl text-slate-300 font-bold pb-10">Last update September 2022</Typography>
        <Typography className="!text-xl text-white font-bold text-end">Built with Next.js by me ✌️</Typography>
        <a href="https://github.com/ACE9935"><IconButton><GitHubIcon className="text-white !text-5xl"/></IconButton><span className="text-white !font-bold">ACE9935</span></a>
        </div>
        </section>
     );
}

export default SectionFour;