import { Box, Chip,Slide, ImageListItemBar } from "@mui/material";
import { useState } from "react";

function ProjectCard({url,title,subt,tecs,surl}:{url:string,title:string,subt:string,tecs:string[],surl:string}) {
    const [checked,setChecked]=useState(false)
    return ( 
        <Box 
        component='a'
        href={surl}
        sx={{
            '&':{
                transition: 'box-shadow 0.5s,transform 0.5s',
                background:`url('/${url}')`
            },
            ':hover':{
            tansition:'box-shadow 0.5s,transform 0.5s',
            transform:'scale(1.06)',
            zIndex:50,
            boxShadow:'0px 0px 20px 10px lightBlue'
        }}}
        className={`!bg-center !bg-cover w-full aspect-[1/0.6] overflow-hidden relative cursor-pointer`} onMouseEnter={()=>setChecked(true)} onMouseLeave={()=>setChecked(false)}>
             <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
            <div className="absolute bottom-0 bg-[rgba(0,0,0,0.78)] flex flex-col space-y-2 w-full p-2">
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