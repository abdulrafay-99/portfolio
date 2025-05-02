'use client'
import React, { useState } from 'react'
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import Link from 'next/link';
import Image from 'next/image';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';

import SwiperBtns from '@/components/SwiperBtns';



const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'project 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste laboriosam adipisci voluptatem fugit nobis distinctio!',
    stack: [
      {
        name: "Html 5"
      },
      {
        name: "Css 3"
      }, {
        name: "Javascript"
      },
    ],
    image: '/assets/work/thumb1.png',
    live: '',
    github: ''
  },
  {
    num: '02',
    category: 'fullstack',
    title: 'project 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste laboriosam adipisci voluptatem fugit nobis distinctio!',
    stack: [
      {
        name: "Next.js"
      },
      {
        name: "Tailwind.css"
      }, {
        name: "Node.js"
      },
    ],
    image: '/assets/work/thumb2.png',
    live: '',
    github: ''
  },
  {
    num: '03',
    category: 'frontend',
    title: 'project 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste laboriosam adipisci voluptatem fugit nobis distinctio!',
    stack: [
      {
        name: "Next.js"
      },
      {
        name: "Tailwind.css"
      }
    ],
    image: '/assets/work/thumb3.png',
    live: '',
    github: ''
  },
]



function Work() {
  const [project, setproject] = useState(projects[0])
  const handleSlideChange=(swiper:import('swiper').Swiper)=>{
    setproject(projects[swiper.activeIndex])
  }

  return (
    <section className='container grid grid-cols-1 md:grid-cols-2 gap-8'>
      {/* project details */}
      <div className='w-full order-2 md:order-1'>
        <span className='text-8xl text-outline text-transparent'>{project.num}</span>
        <h1 className='capitalize text-4xl'>{project.category} Project</h1>
        <p className='text-white/60'>{project.description}</p>
        <ul className='border-b-2 border-white/20 my-8 pb-8'>
          {project.stack.map((skill, index) => {
            return <li key={index} className='text-accent text-xl inline'>
              {skill.name}
              {index !== project.stack.length - 1 && ', '}
            </li>
          })}
        </ul>
        <div className='flex gap-2 '>
          <Link href={project.live}>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger>
                  <BsArrowUpRight className='text-6xl rounded-full bg-[#26262c] p-4 hover:text-accent' />
                </TooltipTrigger>
                <TooltipContent  >
                  <p>Live Preview</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>

          <Link href={project.live}>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger>
                  <BsGithub className='text-6xl rounded-full bg-[#26262c] p-4 hover:text-accent' />

                </TooltipTrigger>
                <TooltipContent  >
                  <p>Github Repository</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
        </div>

      </div>
      {/* slider */}
        
        <Swiper spaceBetween={30} onSlideChange={handleSlideChange} className='w-full h-[30vh] md:h-full relative md:order-2'>
          {projects.map((project, index) => {
          return <SwiperSlide key={index}>
              <Image src={project.image} fill alt='lkjk' className='object-cover'/>
          </SwiperSlide>
        })}
        
        <SwiperBtns/>
          
      </Swiper>
      
        

        
          
         

        
     

    </section>
    
  )
}

export default Work