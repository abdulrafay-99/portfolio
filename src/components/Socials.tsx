import React from 'react'
import { BsDownload } from "react-icons/bs";
import { Button, buttonVariants } from '@/components/ui/button';

import Link from "next/link"
import{FaGithub,FaLinkedin,FaYoutube,FaTwitter}from 'react-icons/fa'

const socials=[
    {icon:<FaGithub/>,path:'/a'},
    {icon:<FaLinkedin/>,path:'/b'},
    {icon:<FaYoutube/>,path:'/c'},
    {icon:<FaTwitter/>,path:'/d'},

]

const Socials = () => {
  const fileUrl = '/Rafay Saleem cv.pdf';
  const fileName = 'your-document.pdf'; 
  const variant = 'outline';
  const size = 'lg';

  return (
    <div className='flex flex-col md:flex-row items-center gap-2 text-sm md:text-xl my-4 md:my-8' >
        <Link href={fileUrl} download={fileName} className={`${Button} ${buttonVariants({ variant, size })}`}>DOWNLOAD CV <BsDownload/> </Link>
        <div className='flex gap-4'>
        {socials.map((value)=>{
            return <Link href={value.path} key={value.path} className='text-accent  border rounded-full border-accent p-2 hover:text-primary hover:bg-accent'>{value.icon}</Link>
        })}
        </div>
    </div>
  )
}

export default Socials