'use client'

import { trainings } from "@/data/variables/var_training"

export default function Treningi(){
    return(
        <div className="bg-white text-black text-center m-5">
            <h1 className="text-3xl">Treningi</h1>
            <ul>
            {trainings.map(training => (
                <li key={training.day}>
                    <p><b>{training.day}: </b> {training.startHour} - {training.endHour}</p>
                </li>
            ))}
            </ul>
        </div>
    )
}