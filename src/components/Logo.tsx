import Image from "next/image"
import Link from "next/link"

export default function Logo(){
    return(
        <section className="flex mx-auto nav-bg-dark-blue justify-center">
            <Link href="/" className="items-center align-middle">
                <Image alt="Logo klubu karate goju-ryu w księżynie z napisem hasu - lotos." className=" mx-auto max-w-full h-auto" src={`/images/logo_karate.webp`} loading="lazy" width={180} height={180}/>
                <h1 className="text-lg md:text-xl nav-text-white-no-hover font-bold">Białostocki Klub Karate Goju-ryu - Dojo "Hasu"</h1>
            </Link>
        </section>
    )
}