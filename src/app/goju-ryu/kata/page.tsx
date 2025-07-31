import { all_kata_list } from "@/data/articles/ArtData_Kata"

export default function Kata(){
    let index = 0;
    return(
        <div className="text-black text-center p-5">
            <h1 className="text-3xl header-text-blue font-semibold">Kata stylu Goju-ryu</h1>
            <section>
                <article className="mx-auto max-w-6xl my-3">
                    <h2 className="text-xl font-semibold">W Goju-ryu występuje 12 kata - form - które dzieli się na:</h2>
                    <ul className=" list-disc mx-auto text-justify max-w-xl">
                        <li>Heishugata - formy oddechowe - czyli Sanchin i Tensho</li>
                        <li>Kashugata - wszystkie pozostałe formy</li>
                    </ul>
                </article>

                <article className="w-full overflow-x-auto mx-auto">
                    {all_kata_list.map(kata => (
                        <article className="block max-w-6xl p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 my-7 mx-auto" key={index}>
                            <h5 className="font-semibold text-xl">{++index}. {kata.header}</h5>
                            <div className="text-justify">
                                <p>Tłumaczy się na - {kata.kata.translation}</p>
                                <p>Typ: {kata.kata.type}</p>
                                <p className="header-text-blue"><a href={kata.movie} target="_blank">Film - wykonanie</a></p>
                                <p className="header-text-blue"><a href={kata.movie_bunkai} target="_blank">Film - zastosowanie</a></p>
                            </div>
                        </article>
                    ))}
                </article>

                <article className="my-10">
                    <p>W ramach zastosowań kata występuje także renzoku bunkai dla Gekisai dai ichi: <a href="https://www.youtube.com/watch?v=xTVrHhCXXQU" target="_blank" className="header-text-blue">Renzoku Bunkai</a></p>
                </article>

            </section>
        </div>
    )
}