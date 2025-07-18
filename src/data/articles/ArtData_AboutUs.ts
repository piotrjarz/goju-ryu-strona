import Article from "./Article";
import { Instructor } from "../types/instructor";

class AboutUs extends Article{
    instructors : Instructor[] = []
    content: string = "";
}

const AboutUs_ArtData : AboutUs = {
    title: "Kilka słów o nas...",
    content: "Jesteśmy młodym i rozwijającym się klubem tradycyjnego Karate Goju-ryu na Podlasiu. Wierzymy w kompletność karate jako sztuki walki i dążymy do jej popularyzacji. Nasi instruktorzy wywodzą się z różnych sztuk walki, co sprzyja nam w realizowaniu tego celu. Wiemy czego oczekuje się od treningów sztuk walki i zamierzamy Wam to przekazać. Poza tym na treningu oferujemy dobrą zabawę, solidną dawkę wiedzy oraz, przede wszystkim, rozwój ciała i ducha.Serdecznie zapraszamy na treningi!",
    instructors: [
        {
            name: "Piotr", 
            surname: "Jarzęmbski", 
            grade: "1 dan", 
            summary: "Ze sportem związany jest od 9 roku życia zaczynając od zapasów w stylu klasycznym. Wicemistrz regionu młodzików w stylu klasycznym młodzików, wielokrotny medalista mistrzostw regionu w zapasach w stylu klasycznym i wolnym. Mistrz regionu w Koluchstylu, trzykrotny wicemistrz regionu w Koluchstylu. Karate ćwiczy od blisko 7 lat zaczynając od shotokan, poprzez kyokushin kończąc na goju-ryu, gdzie zdobył stopień shodan."
        },
        {
            name: "Anna",
            surname: "Jarzęmbska",
            grade: "2 kyu",
            summary: "Ze sportem związana od ponad 40 lat"
        },
        {
            name: "Wiesław",
            surname: "Jarzęmbski",
            grade: "3 kyu",
            summary: ""
        }
    ]
}

export default AboutUs_ArtData;