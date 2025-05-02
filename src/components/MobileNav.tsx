"use client"

import Nav from "./Nav";
import { Sheet,SheetTrigger,SheetContent,SheetHeader,SheetTitle} from "./ui/sheet"
import { RiMenuFoldLine } from "react-icons/ri";


const MobileNav = () => {
  return (
    <Sheet>
        <SheetTrigger><RiMenuFoldLine className="text-accent text-4xl" />
        </SheetTrigger>
        <SheetContent className="flex flex-col items-center justify-center">
            <SheetHeader><SheetTitle className="mb-8"><span className="text-white text-4xl">Rafay<span className="text-accent">.</span></span></SheetTitle></SheetHeader>
            <Nav/>
        </SheetContent>
        
        
    </Sheet>
  )
}

export default MobileNav
