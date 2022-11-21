import { useRef,useEffect, useState } from "react";
import { Typography,Box, Divider, Button,useTheme, Modal } from "@mui/material";
import {motion} from 'framer-motion'
import AnimateText from "./AnimateText";
import ContactForm from "./ContactForm";

const item={
    hidden:{opacity:0,y:'3vmax'},
    visible:{opacity:1,y:0,transition:{duration:0.5}},
}
const container={
    hidden:{},
    visible:{transition:{staggerChildren:0.3}}
}

function SectionOne() {

   const {palette}=useTheme()
   const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    return ( 
        <section className='relative pb-[5rem] pt-[10rem] w-full m-auto max-w-[100rem] grid grid-cols-1 lg:grid-cols-2 sm:px-12'>
        <motion.article
        variants={container}
        animate='visible'
        initial='hidden'
        className="relative pb-14 px-5 p-5 z-[2] w-full max-w-[40rem]">
        <motion.h2 variants={item} className='text-[1.6rem] text-white'>Hello <span className="text-main">I&apos;m </span></motion.h2>
        <motion.h1 variants={item} className="text-main text-[3.5rem] font-bold">Anas Elmouden</motion.h1>
        <motion.h1 variants={item} className="font-[500] pb-6 text-[1.8rem] text-white">A Creative Developer With Creative Ideas</motion.h1>
        <motion.p variants={item} className='text-[1rem] text-slate-300 pb-14 max-w-[30rem]'>
        I&apos;m a Full-Stack developer with years of experience full of imagination and creative ideas, I&apos;m ready to offer my help so feel free to contact me.
        </motion.p>
        <Button 
        onClick={handleOpen}
        sx={{
            boxShadow:'0px 8px 15px 0px #4fd78eae'
        }}
        className="text-white font-bold bg-main hover:-translate-y-2 transition duration-50" variant="contained">Let&apos;s Talk</Button>
        </motion.article>
        
        <motion.img
        src='esd.png'
        className='max-w-[23rem] justify-self-end'/>
        <Modal
        open={open}
        onClose={handleClose}
        className='flex justify-center items-center p-10'
        >
            <Box sx={{
                height:'fit-content',
                width:'30rem',
                
            }}>
            <ContactForm modal handleClose={handleClose}/>
            </Box>
        </Modal>
        </section>
     );
}

export default SectionOne;