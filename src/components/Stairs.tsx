'use client'
import React from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { easeInOut } from 'motion'
import { usePathname } from 'next/navigation'

const stairAnimation={
    initial:{
        height:'100%'
    },
    animate:{
        height:'0%'
    },
    exit:{
        height:['0%','100%'],
    }
}
    
function Stairs() {
  const pathName=usePathname();
  const NumberOfStairs=6;
  return (
  <AnimatePresence mode='wait'>
    <div key={pathName}>
    <div className='flex items-end h-screen w-screen fixed left-0 right-0 top-0 pointer-events-none z-40'>
    {[...Array(NumberOfStairs)].map((_,index)=>
    <motion.div key={index} className='h-full w-full bg-white relative' 
    variants={stairAnimation} initial='initial' animate='animate' exit='exit'
    transition={{
        duration:0.4,
        ease:easeInOut,
        delay:(NumberOfStairs-index-1)*0.1
    }}/>
    )}


  </div>
    </div>
  </AnimatePresence>
  
  
  )
}

export default Stairs