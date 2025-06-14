import { Typography,Box, IconButton } from "@mui/material";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ContactForm from "./ContactForm";
import GitHubIcon from '@mui/icons-material/GitHub';
import { LinkedIn, Instagram } from "@mui/icons-material";

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
        <section id='Contact' className="sx-4 p-6 overflow-x-hidden grid place-items-center">
          <div className="w-full max-w-[100rem]">
          <div className="sx-44">
        <Box className="flex items-center justify-between space-y-8 flex-wrap pb-7">
          <Typography className="underline text-white !text-[calc(4rem+4vw)] !font-bold leading-[1.5]">Drop a 
          <br/>
          <span className="text-main">message</span></Typography> 
          <ContactForm/>
        </Box>
        <Typography className="!text-xl text-slate-300 font-bold pb-10">Last update June 2025</Typography>
        <Typography className="!text-xl text-white font-bold text-end">Built with React by me ✌️</Typography>
        <div className="flex items-center space-x-4">  
        <a target="_blank" rel="noreferrer" href="https://github.com/ACE9935"><IconButton><GitHubIcon className="text-white !text-5xl"/></IconButton></a>
        <a target="_blank" rel="noreferrer" href="https://codepen.io/ACE900/" className="inline-block"><img src="/codepen.png" alt="" className="w-12 h-12"/></a>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/anas-el-mouden-20a246229/"><IconButton><LinkedIn className="text-white !text-5xl"/></IconButton></a>
        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/anas_elmouden12/"><IconButton><Instagram className="text-white !text-5xl"/></IconButton></a>
        </div>
        </div>
        </div>
        </section>
     );
}

export default SectionFour;