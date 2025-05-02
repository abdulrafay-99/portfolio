'use client'
import React from 'react';
import { motion } from 'motion/react';
import { easeIn } from 'motion';

const ProfilePic = () => {
  
  return (
   <div className='w-1/3 md:max-w-full mx-12 '>
   <motion.svg className='h-full w-full' fill='transparent' viewBox='0 0 506 506'>
      <defs><clipPath id='circle-clip'>
        <circle cx='253' cy='253' r='240'/>
        </clipPath></defs>
      <image href='/assets/photo.png' clipPath='url(#circle-clip)'/>
      <motion.circle cx='253' cy='253' r='250' stroke='#00ff99' strokeWidth='4' strokeLinecap='round' strokeLinejoin='round'
      initial={{strokeDasharray:'250 250'}}
      animate={{strokeDasharray:['30 100 100 30','250 250'],rotate:[120,360]}}
      transition={{duration:5, repeat:Infinity, repeatType:'reverse', ease:easeIn}}
      />
    </motion.svg>
    {/* <Image src='/assets/photo2.png' className='object-contain absolute top-0 w-[290px] h-[290px]'alt='adf' width={500} height={500}/> */}
   </div>
  )
}

export default ProfilePic