import Link from "next/link"

import "@/css/nav.css"

export default function Nav(){
    return(
        <div className="sticky top-1 m-0">
        <nav className="text-center text-2xl bg-amber-50 p-5">
            <Link 
                className="m-3"
                href="/">Strona główna
            </Link>

            <Link 
                className="m-3"
                href="/o-nas">O nas
            </Link>


            <Link 
                className="m-3"
                href="/kontakt">Kontakt
            </Link>


            <Link 
                className="m-3"
                href="/treningi">Treningi
            </Link>            
        </nav>
        <hr className="bg-red-900 h-1"/>
        </div>
    )
}