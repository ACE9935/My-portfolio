import { Container } from "@mui/system";
import { Box, IconButton, useTheme,List,ListItem, Divider, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { MutableRefObject, SetStateAction, useRef } from "react";
import AppLogo from "./Logo";
import gsap from 'gsap'
import { motion, AnimatePresence } from "framer-motion"


function FullAppBar({setOpen,open}:{setOpen: React.Dispatch<SetStateAction<boolean>>,open:boolean}) {
    const {palette}=useTheme()
    const ref=useRef()

    const fadingAnimation=(ref:MutableRefObject<any>)=>{
        const items=ref.current.children[1].children
        const logo=ref.current.children[0]
        return gsap.timeline({onComplete:()=>setOpen(false),duration:0.3}).to(items,{
         y:-100,
         opacity:0,
         duration:0.01,
         stagger:0.1 
        }).to(logo,{scale:0,delay:0.2,opacity:0,duration:0.4})
    }

    return ( 
        <AnimatePresence>
        {open &&
        <motion.div
        className='!z-50 !w-screen !h-screen !flex !flex-col !fixed bg-[rgba(0,0,0,0.8)] backdrop-blur-md'
        exit={{opacity:0,transition:{duration:0.6}}}
        initial={{opacity:0}}
        animate={{opacity:1,transition:{duration:0.6}}}
        >
         <div style={{direction:'rtl'}}><IconButton
         onClick={()=>fadingAnimation(ref)}
         color='primary' className="!m-2"><CloseIcon className='text-[3rem]'/></IconButton></div>
         <Box ref={ref} className="!flex !flex-col !items-center !space-y-3 !justify-center">
         <AppLogo/>
         <List className="!w-full flex flex-col items-center !max-w-[50rem]">
          {['Bio','Skills','Contact'].map(i=>(<><ListItem href={'#'+i} onClick={()=>setOpen(false)} component='a' className="cursor-pointer hover:text-main w-fit transition-color duration-300 !text-xl !flex !justify-center !p-4">
            {i}
          </ListItem>
          <Divider light/></>
          ))}
         </List>
         </Box>
        </motion.div>}
        </AnimatePresence>
     );
}

export default FullAppBar;