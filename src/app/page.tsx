import ProfilePic from "@/components/ProfilePic";
import Socials from "@/components/Socials";

export default function Home() {
  return (
   
    <div className="container flex portrait:flex-col items-center md:flex-row-reverse justify-around text-center md:text-left">
     <ProfilePic/>
     <div className="md:w-3/4">
     <h2>Software Developer</h2>
   <h1 >Hello I&apos;m <br/><span className="text-accent">Rafay Saleem</span></h1>
   <p>A MERN stack developer with a problem-solving mindset, eager to build scalable and efficient web applications. Exploring React, Next.js, and Firestore to craft seamless user experiences. Looking for opportunities to grow and contribute to dynamic teams.</p>
   <Socials/>
     </div>
   
   </div>
  );
}
