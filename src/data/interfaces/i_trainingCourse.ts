
interface ITrainingCourse{
    // Ceremonia otwarcia
    start_header: string,
    start_commands : CeremonyCommand[],

    // Rozgrzewka
    warm_up_header : string,
    warm_up_content : string,

    // Część główna
    main_part_header : string,
    main_part_content : string,

    // Wyciszenie i rozciąganie
    cooldown_header : string,
    cooldown_content : string,

    // Ceremonia zakończenia
    end_header : string
    end_commands : CeremonyCommand[]
}