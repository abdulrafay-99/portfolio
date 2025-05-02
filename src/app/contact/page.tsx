
import { Input} from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
function contact() {
  return (
    <section className="container flex flex-col md:flex-row gap-12">
     <div className="md:w-3/4">
     <h2 className="text-accent">Let&apos;s Work Together</h2>
      <p className="text-white/60">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, dignissimos.</p>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <Input type="text" placeholder="First Name" />
        <Input type="text" placeholder="Last Name" />
        <Input type='email' placeholder="Email" />
        <Input type="tel" placeholder="Phone Number" />
        <Select>
          <SelectTrigger className="md:col-span-2">
            <SelectValue placeholder="Select a Service"/>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Services</SelectLabel>
              <SelectItem value="full-stack">Full Stack</SelectItem>
              <SelectItem value="front-end">Front End Development</SelectItem>
              <SelectItem value="UI/UX-design">UI/UX design</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
          <Textarea className="md:col-span-2" placeholder="Type your Message Here"/>

      </form></div> 
      <div className="md:w-1/4 bg-white">
        info
      </div>
    </section>
  )
}

export default contact