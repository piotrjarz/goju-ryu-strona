'use client'

import ONasArticle from "@/data/articles/O_NasArticle";

export default function Art_ONas(){
    return(
        <div className="text-center">
            <h1 className="text-3xl font-semibold header-text-blue">{ONasArticle.title}</h1>
            {ONasArticle.content.map(line => (
                <p key={line}>{line}</p>
            ))}
            <h1 className="text-3xl font-semibold header-text-blue">Nasi instruktorzy</h1>
            {ONasArticle.instructors.map(instructor => (
                <div key={instructor.name}>
                    <p><b>{instructor.name} {instructor.surname} - {instructor.grade}</b></p>
                    <p>{instructor.summary}</p>
                </div>
            ))}
        </div>
    )
}