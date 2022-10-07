import { Box, Typography } from "@mui/material";
import {Web,Devices,Animation,Storage,Mouse,ToggleOff} from '@mui/icons-material';

function Skills() {

    return ( 
        <Box className="p-3 text-white w-full md:w-[26rem] bg-darkBlue justify-items-center grid grid-cols-3 gap-y-[2rem] h-fit md:grid-cols-2">
        <Typography gutterBottom className='!text-4xl text-amber-500 font-bold col-span-3 md:col-span-2'>My skills?</Typography>
          <Box className='flex items-center justify-center flex-col space-y-3'><Web className="!text-[5rem] bg-slate-500 rounded-full p-3"/><Typography className="text-slate-200 text-center">Flexible
Layouts</Typography></Box>
<Box className='flex items-center justify-center flex-col space-y-3'><Devices className="!text-[5rem] bg-slate-500 rounded-full p-3"/><Typography className="text-slate-200 text-center">Responsive
Design</Typography></Box>
<Box className='flex items-center justify-center flex-col space-y-3'><Animation className="!text-[5rem] bg-slate-500 rounded-full p-3"/><Typography className="text-slate-200 text-center">Cool Animations</Typography></Box>
<Box className='flex items-center justify-center flex-col space-y-3'><Storage className="!text-[5rem] bg-slate-500 rounded-full p-3"/><Typography className="text-slate-200 text-center">API Fetching</Typography></Box>
<Box className='flex items-center justify-center flex-col space-y-3'><Mouse className="!text-[5rem] bg-slate-500 rounded-full p-3"/><Typography className="text-slate-200 text-center">Smooth Scrolling</Typography></Box>
<Box className='flex items-center justify-center flex-col space-y-3'><ToggleOff className="!text-[5rem] bg-slate-500 rounded-full p-3"/><Typography className="text-slate-200 text-center">Interactive Experience</Typography></Box>
<Typography className='text-slate-100 !text-xl col-span-3 md:col-span-2'>And more...</Typography>
          </Box>
     );
}

export default Skills;