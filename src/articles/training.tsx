import training_course from "@/data/articles/ArtData_Trainings"

export default function Training_Art(){
    return(
        <div className="">
            <section className="p-5">
                <h2 className="text-3xl font-semibold header-text-blue p-5">{training_course.start_header}</h2>
                <ul className="mx-auto text-justify max-w-6xl">
                    {training_course.start_commands.map(command => (
                        <li key={command.command}>
                            <p>
                                <span className="font-semibold">{command.command}</span> - {command.description}
                            </p>
                        </li>
                    ))}
                </ul>
            </section>
            
            <section className="p-5">
                <h2 className="text-3xl font-semibold header-text-blue p-5">{training_course.warm_up_header}</h2>
                <p className="text-justify max-w-6xl mx-auto">{training_course.warm_up_content}</p>
            </section>
            
            <section className="p-5">
                <h2 className="text-3xl font-semibold header-text-blue p-5">{training_course.main_part_header}</h2>
                <p className="text-justify max-w-6xl mx-auto">{training_course.main_part_content}</p>
            </section>
                        
            <section className="p-5">
                <h2 className="text-3xl font-semibold header-text-blue p-5">{training_course.cooldown_header}</h2>
                <p className="text-justify max-w-6xl mx-auto">{training_course.cooldown_content}</p>
            </section>

            <section className="p-5">
                <h2 className="text-3xl font-semibold header-text-blue p-5">{training_course.end_header}</h2>
                <ul className="mx-auto text-justify max-w-6xl">
                    {training_course.end_commands.map(command => (
                        <li key={command.command}>
                            <p>
                                <span className="font-semibold">{command.command}</span> {command.description? `- ${command.description}` : ""}
                            </p>
                        </li>
                    ))}
                </ul>
            </section>
            
        </div>
    )
}