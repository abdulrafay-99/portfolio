import {FaHtml5,FaCss3,FaJs,FaReact,FaFigma,FaNodeJs}from "react-icons/fa"
import {SiTailwindcss,SiNextdotjs}from "react-icons/si"
import { Tabs,TabsContent,TabsList,TabsTrigger } from "@/components/ui/tabs"
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area"

const about={
  title:'About me',
  description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, veritatis?',
  info:[{
    fieldName:'Name',
    fieldValue:'Rafay Saleem'
  },{
    fieldName:'Phone',
    fieldValue:'(+92) 323 8814 935'
  },{
    fieldName:'Experience',
    fieldValue:'Fresh'
  },{
    fieldName:'Nationality',
    fieldValue:'Pakistani'
  },{
    fieldName:'Email',
    fieldValue:'rafaysaleem786@gmail.com'
  },{
    fieldName:'Freelance',
    fieldValue:'Available'
  },{
    fieldName:'Languages',
    fieldValue:'English Urdu Punjabi'
  },
]
}

// const experience={
//   icon:'/assets/resume/badge.svg',
//   title: 'My Experience',
//   description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, doloribus.',
//   items:[
//     {
//       company:"Tech Solutions Inc.",
//       position:"Full Stack Developer",
//       duration:"2022-Present"
//     },{
//     company:"Web Design Studio",
//     position:"Front-End-Developer Intern",
//     duration:"Summer 2021"
//   },
//   {
//     company:"Tech Solutions Inc.",
//     position:"Full Stack Developer",
//     duration:"2022-Present"
//   },{
//     company:"Tech Solutions Inc.",
//     position:"Full Stack Developer",
//     duration:"2022-Present"
//   },{
//     company:"Tech Solutions Inc.",
//     position:"Full Stack Developer",
//     duration:"2022-Present"
//   },
// ]

// }

const education={
  icon:'/assets/resume/cap.svg',
  title: 'My Education',
  discription: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, doloribus.',
  items:[
    {
      institution:"Virtual University of Pakistan",
      degree:"Master of Computer Science",
      duration:"2023"
    },
    {
      institution:"University of Engineering and Technology Lahore",
      degree:"B.Sc in Transportation Engineering",
      duration:"2013-2017"
    },
]

}

const skills={
  title: "My Skills",
  description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, ab!',
  skillList:[{
    icon:<FaHtml5 />,
    name: "html 5",
  },{
    icon:<FaCss3 />,
    name: "css 5",
  },{
    icon:<FaJs />,
    name: "javascript",
  },{
    icon:<FaReact />,
    name: "react.js",
  },{
    icon:<SiNextdotjs />,
    name: "next.js",
  },{
    icon:<SiTailwindcss />,
    name: "tailwind.css",
  },{
    icon:<FaNodeJs />,
    name: "node.js",
  },{
    icon:<FaFigma />,
    name: "figma",
  },]
}



function Resume() {
  return (
    <Tabs defaultValue='education' className="container flex flex-col md:flex-row items-start gap-16">
      <TabsList >
      {/* <TabsTrigger value="experience">Experience</TabsTrigger> */}
      <TabsTrigger value="education">Education</TabsTrigger>
      <TabsTrigger value="skills">Skills</TabsTrigger>
      <TabsTrigger value="about">About me</TabsTrigger>
      </TabsList>
      
      {/* <TabsContent value="experience" className="">
        <h2 className="">{experience.title}</h2>
        <p>{experience.description}</p>
          <ScrollArea className="h-[400px]">
        <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {experience.items.map((experience,index)=>{
          return <li key={index} className='w-full aspect-video p-8 justify-around rounded-2xl flex flex-col bg-[#26262c]'>
              <span className="text-accent">{experience.duration}</span>
              <span className="text-xl mb-6">{experience.position}</span>
              <span className="text-white/60"><span className="text-accent text-4xl">.</span>{experience.company}</span>
          </li>
        })}
        </ul>
          </ScrollArea>
      </TabsContent> */}
      
      <TabsContent value="education">
      <h2>{education.title}</h2>
        <p>{education.discription}</p>
          <ScrollArea className="h-[400px]">
        <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {education.items.map((education,index)=>{
          return <li key={index} className='w-full h-full aspect-video p-8 justify-around rounded-2xl flex flex-col bg-[#26262c]'>
              <span className="text-accent">{education.duration}</span>
              <span className="text-xl mb-6">{education.degree}</span>
              <span className="text-white/60"><span className="text-accent text-4xl">.</span>{education.institution}</span>
          </li>
        })}
        </ul>
          </ScrollArea>
      </TabsContent>
      
      <TabsContent value="skills">
      <h2>{skills.title}</h2>
      <p>{skills.description}</p>

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-8">
          {skills.skillList.map((skill,index)=>{
            return <li key={index} className="text-6xl hover:text-accent m-8 flex items-center justify-center">
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger>{skill.icon}</TooltipTrigger>
                  <TooltipContent className="capitalize">{skill.name}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
            </li>
          })}
        </ul>
      </TabsContent>
      
      <TabsContent value="about">
        <h2>{about.title}</h2>
        <p>{about.description}</p>d
        <ul className="grid md:grid-cols-2 gap-12">
          {about.info.map((field,index)=>{
            return <li key={index} className="text-lg">
              <span className="text-white/60 text-base">{field.fieldName}</span> {field.fieldValue}
            </li>
          })}
        </ul>
      </TabsContent>

     

    </Tabs>
  )
}

export default Resume;