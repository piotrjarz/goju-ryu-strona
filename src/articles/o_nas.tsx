'use client'

import AboutUs_ArtData from "@/data/articles/ArtData_AboutUs";

export default function AboutUs_Art(){
    return(
        <div className="text-center">
            <h1 className="text-3xl font-semibold header-text-blue">{AboutUs_ArtData.title}</h1>
            {AboutUs_ArtData.content.map(line => (
                <p key={line}>{line}</p>
            ))}
            <h1 className="text-3xl font-semibold header-text-blue">Nasi instruktorzy</h1>
            {AboutUs_ArtData.instructors.map(instructor => (
                <div key={instructor.name}>
                    <p><b>{instructor.name} {instructor.surname} - {instructor.grade}</b></p>
                    <p>{instructor.summary}</p>
                </div>
            ))}
        </div>
    )
}