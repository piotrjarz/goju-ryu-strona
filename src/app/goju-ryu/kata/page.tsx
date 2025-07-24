import { all_kata_list } from "@/data/articles/ArtData_Kata"

export default function Kata(){
    let index = 0;
    return(
        <div className="text-black text-center p-5">
            <h1 className="text-3xl header-text-blue font-semibold">Kata stylu Goju-ryu</h1>
            <section>
                <article className="mx-auto max-w-6xl my-3">
                    <h2 className="text-xl font-semibold">W Goju-ryu występuje 12 kata - form - które można wyróżnić na:</h2>
                    <ul className=" list-disc mx-auto text-justify max-w-xl">
                        <li>Heishugata - formy oddechowe - czyli Sanchin i Tensho</li>
                        <li>Kashugata - wszystkie pozostałe formy</li>
                    </ul>
                </article>

                <article className="relative overflow-x-auto my-3">
                    <table className="text-justify w-10/12 mx-auto">
                        <thead>
                            <tr className="text-center border">
                                <th>L.p.</th>
                                <th>Nazwa kata</th>
                                <th>Znaczenie</th>
                                <th>Typ</th>
                                <th>Film - wykonanie</th>
                                <th>Film - zastosowania (bunkai)</th>
                            </tr>
                        </thead>
                        <tbody className="px-3 py-2">
                            {all_kata_list.map( kata => (
                                <tr key={index} className="border-0 my-2">
                                    <td className="font-semibold">{index++}.</td>
                                    <td>{kata.kata.name}</td>
                                    <td>{kata.kata.translation}</td>
                                    <td>{kata.kata.type}</td>
                                    <td><a href={kata.movie} target="_blank" className="header-text-blue">{kata.kata.name}</a></td>
                                    <td>
                                        {(kata.movie_bunkai !== undefined) ? (
                                        <a href={kata.movie_bunkai} target="_blank" className="header-text-blue">{kata.kata.name} - bunkai</a>
                                        ) : (<p className="text-center"> - </p>)}

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </article>

                <article className="my-10">
                    <p>W ramach zastosowań kata występuje także renzoku bunkai dla Gekisai dai ichi: <a href="https://www.youtube.com/watch?v=xTVrHhCXXQU" target="_blank" className="header-text-blue">Renzoku Bunkai</a></p>
                </article>

            </section>
        </div>
    )
}