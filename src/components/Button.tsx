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
                    "bg-amber-300 hover:bg-amber-700 nav-text-white-no-hover font-bold py-2 px-4 rounded-full text-xl"
            }
            onClick={() => action}
            >
                {label ? label : "Button"}
            </button>
        </a>
        
    )
}