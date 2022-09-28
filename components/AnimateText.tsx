import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import {motion, useInView,useAnimationControls} from 'framer-motion'
import { useRef,useEffect } from 'react'

const item={
    hidden:{y:'-100%',opacity:0,},
    visible:{y:0,opacity:1,transition:{type:'spring',stiffness:200}}
}

const container={
    hidden:{},
    visible:{transition:{staggerChildren:0.05,delayChildren:0.3}}
}

function AnimateText(props:{text:string,className:string}) {
    let x=0
    const controls = useAnimationControls()
    const ref=useRef<HTMLDivElement>(null)
    const inView=useInView(ref,{ once: true })
    
    useEffect(() => {
        if (inView) {
          controls.start("visible");
        }
      }, [controls,inView]);

    let newArray=props.text.split(' ')
    const newChildren=newArray.map((o,index)=>{
    if(index==1) return <> <span className="inline-block aspect-[1/1] w-[0.48em] bg-amber-500 rounded-full translate-y-[-110%]"></span> <motion.span style={{ display: "inline-block" }} className='overflow-hidden' variants={item}>{o}</motion.span> <span className="inline-block aspect-[1/1] w-[0.48em] bg-amber-500 rounded-full translate-y-[-110%]"></span> </>
   else return <motion.span style={{ display: "inline-block" }} className='overflow-hidden' variants={item}>{o}</motion.span>
    })

    return ( 
        <motion.div ref={ref} className={props.className} variants={container} animate={controls} initial='hidden'>
         {newChildren}
        </motion.div>
     );
}

export default AnimateText;