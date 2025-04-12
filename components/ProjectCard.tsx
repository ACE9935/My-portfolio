import { GitHub} from "@mui/icons-material";
import { Box, Chip, Button} from "@mui/material";
import { useSwiperSlide } from 'swiper/react';

function ProjectCard({url,title,subt,tecs,surl,gurl}:{url:string,title:string,subt:string,tecs:string[],surl:string,gurl:string}) {
    const swiperSlide = useSwiperSlide();

    return ( 
    <div className="rounded-md overflow-hidden shadow-md h-fit">
        <Box 
        component="div"
        sx={{
            '&':{
                background:`url('/${url}')`
            }}}
        className={`!bg-center !bg-cover w-full aspect-[2] overflow-hidden`}>
            
        </Box>
        <div className=" bottom-0 bg-dark flex flex-col space-y-2 w-full p-3">
        <div className="flex justify-between gap-2">
            <div className="!text-xl !font-bold">{title}</div>
            <div className="flex justify-end space-x-2 h-fit">
        <Button component="a" target="_blank" href={gurl} className="!bg-main !w-fit" variant="text"><GitHub/></Button>
        <Button component="a" target="_blank" href={surl} className="!bg-main !w-max !font-bold" variant="text">Live Demo</Button>
    </div>
        </div>
        <div className="!text-md !text-slate-300">{subt}</div>
           <p className="!text-sm">Technologies used: </p>
          <div className="flex flex-wrap">
          {tecs.map((o,i)=><Chip key={i} className="m-1 !text-xs !rounded-md !font-bold" label={o} color="primary"/>)}
          </div>
          </div>
    </div>
     );
}

export default ProjectCard;