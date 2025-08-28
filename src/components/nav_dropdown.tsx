'use client'

import { DropdownOption } from "@/data/types/dropdown_option"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

type DropDownProps = {
    label: string,
    className? : string,
    options: DropdownOption[],
    onClick? :  React.MouseEventHandler<HTMLAnchorElement>;
}

export default function DropDown(
    { 
        label,
        className,
        options,
        onClick,

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
        <div ref={dropdownRef} className="relative inline-block text-left">
            <button 
                onClick={() => setOpen(!open)}
                className={`rounded transition ${className}`}>
                    <span className="inline-flex">
                        {label} {open ? (<ChevronUp className="h-5 w-5 m-auto" />) : (<ChevronDown className="h-5 w-5 m-auto" />)}
                    </span>
            </button>
           
           {open && (
            <div className="absolute z-10 mr-4 w-32 sm:w-28 md:32 bg-white border border-gray-200 rounded shadow-lg transition ease-out duration-200 transform scale-95 opacity-0 animate-dropdown">
                <ul className="m-0 p-0 space-y-1">
                {options.map(option => (
                    <li key={option.label}>
                        <Link
                            href={option.href}
                            prefetch={true}
                            target={option.target}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={(e) => {
                                onClick?.(e);
                                setOpen(false);
                            }}
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