'use client'

interface IButtonProps{
    className? : string,
    label? : string,
    href? : string,
    action? : () => void
}

export default function Button({
    className,
    label,
    href,
    action,
} : IButtonProps){
    return(
        <a href={href}>
            <button 
            className={
                className ? 
                    className : 
                    "bg-amber-300 hover:bg-amber-700 font-bold py-2 px-4 rounded-full text-xl cursor-pointer text-gray-950 hover:text-white"
            }
            onClick={() => action}
            >
                {label ? label : "Button"}
            </button>
        </a>
        
    )
}