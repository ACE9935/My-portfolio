import { Typography,Box } from "@mui/material";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

function SectionFour() {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(()=>{

        gsap.fromTo('.sx-4',{opacity:0,y:'60rem'},{opacity:1,y:0,duration:1,
          scrollTrigger:{
            trigger: '.sx-4',
            start: '-=1200'
          }})
    
    },[])
    return ( 
        <section id='Contact' className="sx-4 p-6">
        <Box className="flex items-center flex-wrap pb-7">
          <Typography className="underline text-white text-[calc(4rem+4vw)] !font-bold leading-[1.5]">Drop a 
          <br/>
          message</Typography> 
          <Box className='text-white text-md border border-4 p-2 rounded-xl self-end sm:m-7'>anaselmouden99@gmail.com</Box>
        </Box>
        <Typography className="!text-xl text-slate-300 font-bold">Last update September 2022</Typography>
        <Typography className="!text-xl text-white font-bold text-end">Built with Next.js by me ✌️</Typography>
        </section>
     );
}

export default SectionFour;