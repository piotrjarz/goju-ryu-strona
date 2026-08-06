"use client"

import Link from "next/link"
import DropDown from "./nav_dropdown"

import { GojuRyuDropdownOptions, AboutClubDropdownOptions } from "@/data/variables/var_dropdown_options"
import { useState } from "react";

export default function Nav(){
    const [isOpen, setIsOpen] = useState(false);
    return (
    <nav className="nav-bg-dark-blue sticky top-0 w-full bg-green text-xl justify-items-center z-50">
      <div className="flex items-center justify-between px-4 py-3 lg:px-8">

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block h-0.5 w-6 bg-neutral-200 transform transition duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-neutral-200 my-1 transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-neutral-200 transform transition duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>

        {/* Menu Desktop */}
          <ul className="hidden mx-auto my-2 lg:flex gap-8 nav-text-white-no-hover text-2xl">
            <li>
              <Link href="/" className="hover:text-blue-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="https://forms.gle/bhHMvzeCP3Dam4xH6" className="hover:text-blue-400 transition">
                Zapisy
              </Link>
            </li>
            <li>
              <Link href="/aktualnosci" className="hover:text-blue-400 transition">
                Aktualności
              </Link>
            </li>
            <li>
              <DropDown 
              className="hover:text-blue-400 transition"
              label="Klub" options={AboutClubDropdownOptions}/>
            </li>
            <li>
              <Link href="/pytania" className="hover:text-blue-400 transition">
                Pytania
              </Link>
            </li>
            <li>
              <DropDown 
              className="hover:text-blue-400 transition"
              label="Goju-ryu" options={GojuRyuDropdownOptions} />
            </li>
            <li>
              <Link href="/kontakt" className="hover:text-blue-400 transition">
                Kontakt
              </Link>
            </li>
          </ul>
        
      </div>

      {/* Menu Mobile (animowane) */}
      <div
        className={`lg:hidden nav-text-white-no-hover absolute top-full left-0 w-full nav-bg-dark-blue transform origin-top transition-all duration-500 ease-in-out ${
            isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-4 pb-4 nav-text-white-no-hover font-medium">
          <li>
            <Link 
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="https://forms.gle/bhHMvzeCP3Dam4xH6" className="hover:text-blue-400  transition">
                Zapisy
            </Link>
          </li>
          <li>
            <Link
            className="hover:text-blue-400 transition" 
            href="/aktualnosci" onClick={() => setIsOpen(false)}>
              Aktualności
            </Link>
          </li>
          <li>
           <DropDown 
           className="hover:text-blue-400 transition"
           label="Klub" options={AboutClubDropdownOptions}/>
          </li>
          <li>
            <Link
            className="hover:text-blue-400 transition" 
            href="/pytania" onClick={() => setIsOpen(false)}>
              Pytania
            </Link>
          </li>
          <li>
            <DropDown 
            className="hover:text-blue-400 transition"
            label="Goju-ryu" options={GojuRyuDropdownOptions}/>
          </li>
          <li>
            <Link 
            className="hover:text-blue-400 transition"
            href="/kontakt" onClick={() => setIsOpen(false)}>
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}