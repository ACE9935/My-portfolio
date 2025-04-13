import { Typography,Box} from "@mui/material";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { data } from "../projects-data";
import ProjectCard from "./ProjectCard";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

function SectionThree() {     

    return ( 
        <section id='Skills' className="px-6 flex flex-col items-center sm:px-14 pt-14 pb-36">
        <Box className="flex justify-center pb-12">
          <Typography component='h1' variant='h3'>Recent <span className="text-main">Projects</span></Typography>
        </Box>

       <div
        className="sc max-w-[100rem] gris-cols-1 md:grid-cols-2 xl:grid-cols-3 grid gap-3"
      >
        {data.map((o,i)=><ProjectCard key={i} {...o}/>)}
      </div>

        </section>
     );
}

export default SectionThree;