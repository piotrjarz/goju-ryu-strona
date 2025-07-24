'use client'

import AboutUs_ArtData from "@/data/articles/ArtData_AboutUs";

export default function AboutUs_Art(){
    return(
        <main>
            <section className="">
                <h2 className="text-3xl text-center font-semibold header-text-blue p-5">{AboutUs_ArtData.title}</h2>
                {AboutUs_ArtData.content.map(cont => (
                    <p key={cont} className="text-justify mx-auto max-w-6xl my-5">{cont}</p>
                ))}
            </section>
        </main>
        
    )
}