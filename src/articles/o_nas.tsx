'use client'

import ONasArticle from "@/data/articles/O_NasArticle";

export default function Art_ONas(){
    return(
        <div className="text-center">
            <h2 className="text-2xl">{ONasArticle.title}</h2>
            {ONasArticle.content.map(line => (
                <p key={line}>{line}</p>
            ))}
            <h2 className="text-2xl">Nasi instruktorzy</h2>
            {ONasArticle.instructors.map(instructor => (
                <div key={instructor.name}>
                    <p><b>{instructor.name} {instructor.surname} - {instructor.grade}</b></p>
                    <p>{instructor.summary}</p>
                </div>
            ))}
        </div>
    )
}