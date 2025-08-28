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
        <header className="nav-bg-dark-blue w-full sticky top-0 m-0 z-40 py-4">
            <div className="mx-auto max-w-7x1 px-4 flex justify-center items-center">
                {/* Hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <span
                        className={`block h-0.5 w-6 bg-neutral-700 dark:bg-neutral-200 transform transition duration-300 ${
                        menuOpen ? "rotate-45 translate-y-1.5" : ""
                        }`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-neutral-700 dark:bg-neutral-200 my-1 transition-all duration-300 ${
                        menuOpen ? "opacity-0" : "opacity-100"
                        }`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-neutral-700 dark:bg-neutral-200 transform transition duration-300 ${
                        menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                        }`}
                    />
                </button>
                <Nav/>
            </div>
        </header>
    )
}