import { useRef,useEffect } from "react";
import { Typography,Box, Divider } from "@mui/material";
import {motion} from 'framer-motion'
import AnimateText from "./AnimateText";

const item={
    hidden:{opacity:0,y:'3vmax'},
    visible:{opacity:1,y:0,transition:{duration:0.5}},
}
const container={
    hidden:{},
    visible:{transition:{staggerChildren:0.3}}
}

function SectionOne() {

    return ( 
        <section className='relative bg-mediumBlue w-screen py-[10rem]'>
        <motion.section
        variants={container}
        animate='visible'
        initial='hidden'
        className="relative px-5 translate-y-[-4rem] sm:translate-y-0 p-5 z-[2] w-full max-w-[40rem]">
        <motion.h1 variants={item} className='pb-6 text-[calc(2.5rem+1vw)] text-white leading-[1.25] font-bold'>HI, I&apos;M <span className="text-amber-500">ANAS</span>.<br/> A CREATIVE DEVELOPER WITH CREATIVE IDEAS
        </motion.h1>
        <motion.p variants={item} className='text-[1.7rem] font-bold'>
         DESIGN <span className="inline-block aspect-[1/1] w-[calc(1rem+0.1vw)] bg-amber-500 rounded-full"></span> DEVELOPMENT <span className="inline-block aspect-[1/1] w-[calc(1rem+0.1vw)] bg-amber-500 rounded-full"></span> FULLSTACK
        </motion.p>
        </motion.section>
        
        <motion.img
        src='S12.png'
        className='translate-y-[5rem] sm:translate-y-0 absolute right-[6vw] w-[40%] m-auto top-12 bottom-0 min-w-[20rem]'/>
        </section>
     );
}

export default SectionOne;