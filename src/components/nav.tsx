import Link from "next/link"
import DropDown from "./nav_dropdown"

import { GojuRyuDropdownOptions, AboutClubDropdownOptions } from "@/data/variables/var_dropdown_options"

export default function Nav(){
    return(
        <div>
        <nav className="hidden md:flex space-x-6 text-center text-2xl">
            <Link 
                className="m-3 transition nav-text-white"
                prefetch={true}
                href="/">Strona główna
            </Link>

            <Link
                className="m-3 transition nav-text-white"
                prefetch={true}
                href="/aktualnosci"
            >Aktualności
            </Link>

            <DropDown 
                label="Klub"
                options={AboutClubDropdownOptions}
                className="nav-text-white"
            />

            <Link 
                className="m-3 transition nav-text-white"
                prefetch={true}
                href="/treningi">Treningi
            </Link>

            <Link
                className="m-3 transition nav-text-white"
                prefetch={true}
                href="/pytania">Pytania
            </Link>

            <DropDown className="nav-text-white" label="Goju-ryu" options={ GojuRyuDropdownOptions }/>  

            
            <Link
                className="m-3 transition nav-text-white"
                prefetch={true}
                href="/kontakt/">
                    Kontakt
            </Link>          
        </nav>
        </div>
    )
}