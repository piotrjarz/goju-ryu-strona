'use client'

//import { trainings } from "@/data/variables/var_training"
import Training_Art from "@/articles/training"

export default function Treningi(){
    return(
        <main>
            <div className="text-black text-center p-5 text-lg">
                <h1 className="text-3xl font-semibold header-text-blue p-5">Treningi</h1>
                <p className="mx-auto">Jeszcze nie mamy lokalizacji, prosimy o cierpliwość :)</p>
                {/* <ul className="mx-auto text-justify max-w-6xl">
                {trainings.map(training => (
                    <li key={training.day}>
                        <p><b>{training.day}: </b> {training.startHour} - {training.endHour}</p>
                    </li>
                ))}
                </ul> */}
                <Training_Art/>
            </div>
        </main>
        
    )
}