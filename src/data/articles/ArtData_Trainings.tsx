const training_course : ITrainingCourse = {
    start_header: "Ceremonia otwarcia treningu: ",
    start_commands: [
        {
            command: "Shugo!",
            description: "ustawiamy się twarzą do prowadzącego (sensei) pasami w rzędach w taki sposób, że osoba wyższa stopniem stoi po prawej stronie, np. rząd pasów brązowych z kolejnością od prawej strony: 1 kyu, 2 kyu, 3 kyu."
        },
        {
            command: "Ki o tsuke!",
            description: "stajemy w Musubi dachi, prostujemy się i patrzymy w stronę prowadzącego."
        },
        {
            command: "Seiza!",
            description: "siadamy w Seiza - na kolanach, pięty dotykają pośladków."
        },
        {
            command: "Mokuso!",
            description: "zamykamy oczy i \"medytujemy\", uspokajamy ciało i umysł. Na Okinawie, w Honbu Dojo (siedzibie głównej) recytuje się również przysięge dojo."
        },
        {
            command: "Mokuso yame!",
            description: "otwieramy oczy."
        },
        {
            command: "Shomen/Shinzei ni... rei!",
            description: "wszyscy odpowiadają \"Onegaishimasu\". Po japońsku dosłownie oznacza \"pokłon w przód\". Samo shomen to właśnie przód dojo, gdzie znajduje się portret założyciela stylu."
        },
        {
            command: "Sensei/Senpai ni... rei!",
            description: "wszyscy odpowiadają \"Onegaishimasu\". Jest to pokłon w stronę prowadzącego."
        },
        {
            command: "Kiritsu/Tatte!",
            description: "wstajemy i rozpoczynamy trening."
        }
    ],

    warm_up_header: "Rozgrzewka - junbi undo lub jego elementy",
    warm_up_content: "Junbi undo to tradycyjna okinawska rozgrzewka stosowana w treningach karate. Od zwykłej rozgrzewki wyróżnia się skupieniem na oddechu w niektórych jej ćwiczeniach. Ma za zadanie przygotować ciało do treningu i zapobiec kontuzjom.",

    main_part_header: "Trening - część główna",
    main_part_content: "Część główna treningu. To w niej właśnie ćwiczymy technikę, kata, bunkai oraz sparujemy. Ćwiczymy bloki, uderzenia, kopnięcia, dźwignie, rzuty, obalenia, podcięcia oraz poprawiamy kondycję. Stosujemy techniki w formie kihon bunkai (zastosowania podstawowe) oraz oyo bunkai (zastosowania własne), a także w elementach walki sportowej i samoobrony. Podnosimy swój poziom z każdym treningiem.",
    
    end_header: "Ceremonia zakończenia",
    end_commands: [
        {
            command: "Shugo!",
        },
        {
            command: "Ki o tsuke!"
        },
        {
            command: "Seiza!"
        },
        {
            command: "Mokuso!"
        },
        {
            command: "Mokuso yame!"
        },
        {
            command: "Shomen ni... rei!",
            description: "wszyscy mówią \"Arigato gozaimashita\"; pokłon w stronę shomen."
        },
        {
            command: "Sensei/Senpai ni... rei!",
            description: "wszyscy mówią \"Arigato gozaimashita\"; pokłon w stronę instruktora."
        },
        {
            command: "Otagai ni... rei!",
            description: "obracamy się do kolegów i koleżanek po naszej prawej i lewiej i robimy pokłon. Wszyscy mówią \"Arigato gozaimashita\";"
        },
        {
            command: "Shomen ni!",
            description: "zwracamy się w kierunku shomen. Zauważ, że nie ma polecenia \"rei\" - czyli nie robimy pokłonu."
        },
        {
            command: "Kiritsu/Tatte!",
            description: "wstajemy. Trening się zakończył i możemy wracać do domów :)"
        }
    ]
}

export default training_course;