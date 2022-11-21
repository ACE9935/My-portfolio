import { Box, Chip,Slide, ImageListItemBar } from "@mui/material";
import { useState } from "react";
import { useSwiperSlide } from 'swiper/react';

function ProjectCard({url,title,subt,tecs,surl}:{url:string,title:string,subt:string,tecs:string[],surl:string}) {
    const [checked,setChecked]=useState(false)
    const swiperSlide = useSwiperSlide();

    return ( 
        <Box 
        component='a'
        href={swiperSlide.isActive?surl:undefined}
        sx={{
            '&':{
                background:`url('/${url}')`
            }}}
        className={`!bg-center !bg-cover w-full h-full overflow-hidden absolute cursor-pointer`}  onMouseEnter={swiperSlide.isActive?()=>setChecked(true):undefined} onMouseLeave={swiperSlide?()=>setChecked(false):undefined}>
             <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
            <div className="absolute bottom-0 bg-[rgba(0,0,0,0.78)] flex flex-col space-y-2 w-1/2 p-2">
        <h4 className="!text-xl !font-bold">{title}</h4>
        <h4 className="!text-md !text-slate-300">{subt}</h4>
           <p className="!text-sm">Technologies used: </p>
          <div className="flex flex-wrap">
          {tecs.map((o,i)=><Chip key={i} className="m-1 !font-bold" label={o} color="primary"/>)}
          </div>
          </div>
        </Slide>
        </Box>
     );
}

export default ProjectCard;