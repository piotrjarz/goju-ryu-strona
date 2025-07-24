'use client'

import { useState } from "react"
import Nav from "./nav";
import Link from "next/link";
import { GojuRyuDropdownOptions } from "@/data/variables/var_dropdown_options";
import DropDown from "./nav_dropdown";
import MottoImage from "./MottoImage";

export default function Header(){
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <header className="nav-bg-dark-blue sticky top-0 m-0 z-40">
            <div className="mx-auto max-w-7x1 px-4 flex justify-between items-center">
                <div>
                    <a href="/" className="md:flex items-center align-middle">
                        <img className="max-w-full h-auto" src={`/images/logo_karate.png`} loading="lazy" width={120}/>
                        <h1 className="text-lg md:text-xl nav-text-white-no-hover font-bold">Klub Karate Goju-ryu Księżyno</h1>
                    </a>
                </div>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="white"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {menuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
                <Nav/>
                {menuOpen && (
                    <div className="md:hidden px-4 pb-4">
                        <nav className="flex flex-col space-y-2">
                            <Link className="nav-text-white" href='/' onClick={() => setMenuOpen(false)}>Strona główna</Link>

                            <Link className="nav-text-white" href='/o-nas' onClick={() => setMenuOpen(false)}>O nas</Link>


                            <Link className="nav-text-white" href='/kontakt' onClick={() => setMenuOpen(false)}>Kontakt</Link>


                            <Link className="nav-text-white" href='/treningi' onClick={() => setMenuOpen(false)}>Treningi</Link>

                            <Link className="nav-text-white" href="https://togkf-polska.pl/?page_id=1301" target="_blank" onClick={() => setMenuOpen(false)}>Egzaminy</Link>


                            <DropDown className="nav-text-white" label="Goju-ryu" options={ GojuRyuDropdownOptions }/>  
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}