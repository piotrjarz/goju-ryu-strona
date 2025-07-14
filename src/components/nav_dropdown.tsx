'use client'

import { DropdownOption } from "@/data/types/dropdown_option"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

type DropDownProps = {
    label: string,
    className? : string,
    options: DropdownOption[]
}

export default function DropDown(
    { 
        label,
        className,
        options

    } : DropDownProps
){
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Closing dropdown when clicked outside
    useEffect(() => {
        function handleClickOutside(event : MouseEvent){
            if(dropdownRef.current && !dropdownRef.current.contains(event.target as Node)){
                setOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return(
        <div ref={dropdownRef} className="relative inline-block text-left m-1">
            <button 
                onClick={() => setOpen(!open)}
                className={`px-4 py-2 rounded transition ${className}`}>
                    {label}
            </button>
           
           {open && (
            <div className="absolute z-10 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg transition ease-out duration-200 transform scale-95 opacity-0 animate-dropdown">
                <ul className="py-1">
                    {options.map(option => (
                        <li 
                        key={option.label}>

                            <Link 
                                href={option.href}
                                prefetch={true}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onClick={() => setOpen(false)}
                            >
                                {option.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
           )}
        </div>
        
    )
}