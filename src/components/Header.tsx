'use client'

import { useState } from "react"
import Nav from "./nav";
import Link from "next/link";
import { AboutClubDropdownOptions, GojuRyuDropdownOptions } from "@/data/variables/var_dropdown_options";
import DropDown from "./nav_dropdown";
import { Menu, X } from "lucide-react";

export default function Header(){
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <header className="nav-bg-dark-blue sticky top-0 m-0 z-40 py-4">
            <div className="mx-auto max-w-7x1 px-4 flex justify-center items-center">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden focus:outline-none"
                    aria-label="Toggle menu"
                >
                {menuOpen ? (
                    <X className="h-7 w-7 my-2 text-white" fill="white"/>
                ) : (
                    <Menu className="h-7 w-7 my-2 text-white" fill="white"/>
                )}
                </button>
                <Nav/>
                
            </div>
            <div>
                {menuOpen && (
                    <div className="md:hidden px-4 pb-4 mx-auto">
                        <nav className="flex flex-col space-y-2 text-left">
                            <Link className="nav-text-white" href='/' onClick={() => setMenuOpen(false)}>Strona główna</Link>

                            <DropDown 
                                label="Klub"
                                options={AboutClubDropdownOptions}
                                className="nav-text-white mx-0 px-0"
                                onClick={()=>setMenuOpen(false)}
                            />

                            <Link
                                className="nav-text-white"
                                prefetch={true}
                                onClick={() => setMenuOpen(false)}
                                href="/pytania">Pytania
                            </Link>

                            <Link className="nav-text-white" href='/treningi' onClick={() => setMenuOpen(false)}>Treningi</Link>

                            <Link className="nav-text-white" href="https://togkf-polska.pl/?page_id=1301" target="_blank" onClick={() => setMenuOpen(false)}>Egzaminy</Link>



                            <DropDown 
                                className="nav-text-white" 
                                label="Goju-ryu" 
                                onClick={()=>setMenuOpen(false)}
                                options={ GojuRyuDropdownOptions }
                            />  

                            <Link className="nav-text-white" href="/kontakt" onClick={() => setMenuOpen(false)}>Kontakt</Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}