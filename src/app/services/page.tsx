import Link from "next/link";
import {BsArrowDownRight} from "react-icons/bs";



const services=[
  {
    num:'01', title:'Web Development',description: 'Building dynamic, responsive web applications using React, Next.js, and MERN stack.',href:'/contact'
  },
  {
    num:'02', title:'Front-End Development',description: 'Crafting user-friendly interfaces with modern frameworks and libraries.',href:'/contact'
  },
  {
    num:'03', title:'API Integration',description: 'Connecting applications with third-party APIs and optimizing backend interactions.',href:'/contact'
  },
  
];

function Services() {
  return (
    <div className="container grid md:grid-cols-2 gap-8">{services.map((service,index)=>{
      return <div key={index} className="group border-b-[1px] border-white/50">
        <Link href={service.href} className="text-5xl font-extrabold flex justify-between items-end text-outline group-hover:text-outline-hover text-transparent ">
        {service.num} <BsArrowDownRight className="bg-white p-4 group-hover:bg-accent group-hover:-rotate-45 transition-all duration-500 text-7xl rounded-full text-primary"/>
        </Link>
        <h2>{service.title}</h2>
        <p>{service.description}</p>
      </div>
    })}</div>
  )
}

export default Services