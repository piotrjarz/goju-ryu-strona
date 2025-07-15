import Article from "./Article";
import { Instructor } from "../types/instructor";

class AboutUs extends Article{
    instructors : Instructor[] = []
}

const AboutUs_ArtData : AboutUs = {
    title: "Kilka słów o nas...",
    content: [
        "Jesteśmy młodym i dynamicznie rozwijającym się klubem na Podlasiu.",
        "Trenujemy w duchu tradycyjnego okinawskiego karate goju-ryu z ramienia organizacji TOGKF.",
        "Uczymy nie tylko sztuk walki i samooborony, ale także dyscypliny, szacunku, pokory i pewności siebie."
    ],
    instructors: [
        {
            name: "Piotr", 
            surname: "Jarzęmbski", 
            grade: "1 dan", 
            summary: "Ze sportem związany jest od 9 roku życia zaczynając od zapasów w stylu klasycznym. Wicemistrz regionu młodzików w stylu klasycznym młodzików, wielokrotny medalista mistrzostw regionu w zapasach w stylu klasycznym i wolnym. Mistrz regionu w Koluchstylu, trzykrotny wicemistrz regionu w Koluchstylu. Karate ćwiczy od blisko 7 lat zaczynając od shotokan, poprzez kyokushin kończąc na goju-ryu, gdzie zdobył stopień shodan."
        }
    ]
}

export default AboutUs_ArtData;