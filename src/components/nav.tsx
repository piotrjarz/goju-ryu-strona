import Link from "next/link"
import DropDown from "./nav_dropdown"

import { GojuRyuDropdownOptions } from "@/data/variables/var_dropdown_options"

import "@/css/nav.css"

export default function Nav(){
    return(
        <div>
        <nav className="hidden md:flex space-x-6 text-center text-2xl">
            <Link 
                className="m-3"
                prefetch={true}
                href="/">Strona główna
            </Link>

            <Link 
                className="m-3"
                prefetch={true}
                href="/o-nas">O nas
            </Link>


            <Link 
                className="m-3"
                prefetch={true}
                href="/kontakt">Kontakt
            </Link>


            <Link 
                className="m-3"
                prefetch={true}
                href="/treningi">Treningi
            </Link>

            <DropDown label="Goju-ryu" options={ GojuRyuDropdownOptions }/>            
        </nav>
        </div>
    )
}