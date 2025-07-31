'use client'

import { usePathname } from 'next/navigation'
import pathMap from '@/data/variables/var_pathMap'


import '@/css/motto.css'



interface IMottoImageProps{
    label? : string | null,
    className? : string
    mottoBgClass? : string
}

export default function MottoImage(
    {
        label,
        mottoBgClass
    } : IMottoImageProps
){
    const pathName = usePathname();
    const pathToLabel = pathMap.get(pathName);
    let _label = pathToLabel;

    if (label === null){
        _label = "";
    }

    return(
        <div className={`h-80 flex ${mottoBgClass? mottoBgClass : 'motto-bg'} justify-center items-center align-middle`}>
            <h1 className="text-4xl nav-text-white-no-hover text-center font-bold opacity-100 z-30">{label? label : _label}</h1>
        </div>
    )
}