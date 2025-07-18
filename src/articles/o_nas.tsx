'use client'

import AboutUs_ArtData from "@/data/articles/ArtData_AboutUs";

export default function AboutUs_Art(){
    return(
        <main>
            <section className="">
                <h2 className="text-3xl text-center font-semibold header-text-blue p-5">{AboutUs_ArtData.title}</h2>
                <p className="text-justify mx-auto max-w-6xl">{AboutUs_ArtData.content}</p>
            </section>
            <section className="text-center p-5">
                <h2 className="text-3xl font-semibold header-text-blue">Nasi instruktorzy</h2>
                {AboutUs_ArtData.instructors.map(instructor => (
                    <article key={instructor.name} className="flex flex-col md:flex-row items-center justify-center gap-6 py-10 max-w-6xl mx-auto">
                        <img
                            className="p-3 max-w-full h-auto"
                            src="https://placehold.co/300x450"
                            loading="lazy"
                            alt="Karate dojo"
                        />
                        <section>
                            <h4 className="text-2xl text-left">{instructor.name} {instructor.surname} - {instructor.grade}</h4>
                            <p className="text-justify">{instructor.summary}</p>
                        </section>
                    </article>
                ))}
            </section>
        </main>
        
    )
}