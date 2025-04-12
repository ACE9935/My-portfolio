import { Box } from "@mui/material";
import { useSwiper } from "swiper/react";

function SwiperBar() {
    const swiper=useSwiper()
    return ( 
        <Box className="flex justify-center space-x-7 mt-16">
        <div onClick={()=>swiper.slidePrev()} className="bg-main py-4 px-8 fx grid place-items-center transition hover:-translate-x-1 cursor-pointer active:bg-dark">Prev</div>
        <div onClick={()=>swiper.slideNext()} className="bg-main py-4 px-8 fy grid place-items-center transition hover:translate-x-1 cursor-pointer active:bg-dark">Next</div>
      </Box>
     );
}

export default SwiperBar;