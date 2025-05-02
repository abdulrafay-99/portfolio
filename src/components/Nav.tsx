'use client'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'


const Links=[
    {name:'Home',path:'/'},
    {name:'Services',path:'/services'},
    {name:'Resume',path:'/resume'},
    {name:'Work',path:'/work'},
    {name:'Contact',path:'/contact'},
  ]


const Nav = () => {
    const pathName=usePathname();
  return (
    <nav className='flex flex-col container md:flex-row items-center'>
        {Links.map((link)=>{
            return<Link href={link.path}  key={link.name}><Button variant='link' className={`${pathName==link.path && 'text-accent underline'}`}>{link.name}</Button></Link>
        })}
    </nav>
  )
}




export default Nav