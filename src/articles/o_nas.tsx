'use client'

import AboutUs_ArtData from "@/data/articles/ArtData_AboutUs";
import Image from "next/image";

export default function AboutUs_Art(){
    return(
        <main>
            <section className="">
                <h2 className="text-3xl text-center font-semibold header-text-blue p-5">{AboutUs_ArtData.title}</h2>
                {AboutUs_ArtData.content.map(cont => (
                    <p key={cont} className="text-justify mx-auto max-w-6xl my-5">{cont}</p>
                ))}
            </section>
            <section>
                <h2 className="text-3xl text-center font-semibold header-text-blue">Zadbaj o swoje zdrowie i bezpieczeństwo - dołącz do nas!</h2>
                <p className="text-xl">Zapraszamy na treningi wszystkich niezależnie od wieku i doświadczenia!</p>
                <Image alt="Logo klubu karate goju-ryu w księżynie z napisem hasu - lotos." className=" mx-auto max-w-full h-auto" src={`/images/logo_karate.webp`} loading="lazy" width={300} height={300}/>
            </section>
        </main>
        
    )
}