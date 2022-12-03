import { Typography,Box, Paper } from "@mui/material";
import { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import AnimateText from "./AnimateText";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { data } from "../projects-data";
import ProjectCard from "./ProjectCard";
import Skills from "./Skills";
import { Swiper, SwiperSlide,useSwiper } from "swiper/react";
import { EffectCoverflow, Pagination,Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperBar from "./SwiperBar";

function SectionThree() {     
  
  gsap.registerPlugin(ScrollTrigger);
  useEffect(()=>{
    document.querySelectorAll('.sx-2>*').forEach(i => {

      gsap.fromTo(i,{y:'30rem',opacity:0},{y:'-3.4rem',opacity:1,duration:1,
        scrollTrigger:{
          start:'-=900',
          trigger: i,
          
        }})
      
    });
  },[])

    return ( 
        <section id='Skills' className="px-6 sm:px-14 pt-14 pb-36">
        <Box className="flex justify-center pb-12">
          <Typography component='h1' variant='h3'>Recent <span className="text-main">Projects</span></Typography>
        </Box>

       <Box>
       <Swiper
        initialSlide={1}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        freeMode
        loop
        autoplay
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination,Navigation]}
        className="mySwiper max-w-[100rem]"
      >
        {data.map((o,i)=><SwiperSlide
        key={i}
        className='relative hover:scale-150 aspect-[1/0.6] !w-full !max-w-[34rem]'><ProjectCard key={i} {...o}/></SwiperSlide>)}
         <SwiperBar/>
      </Swiper>
       </Box>
        </section>
     );
}

export default SectionThree;