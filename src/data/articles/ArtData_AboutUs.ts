import Article from "./Article";
import { Instructor } from "../types/instructor";

class AboutUs extends Article{
    content: string[] = [];
}

const AboutUs_ArtData : AboutUs = {
    title: "Kilka słów o nas...",
    content: [
        "Jesteśmy młodym i rozwijającym się klubem tradycyjnego Karate Goju-ryu na Podlasiu. Wierzymy w kompletność karate jako sztuki walki i dążymy do jej popularyzacji. Nasi instruktorzy wywodzą się z różnych sztuk walki, co sprzyja nam w realizowaniu tego celu. Wiemy czego oczekuje się od treningów sztuk walki i zamierzamy Wam to przekazać. Poza tym na treningu oferujemy dobrą zabawę, solidną dawkę wiedzy oraz, przede wszystkim, rozwój ciała i ducha.Serdecznie zapraszamy na treningi!",

        "Mamy doświadczenie w różnych sztukach walki - m.in w zapasach, karate, judo, boksie, MMA, wing-tsun oraz ju-jitsu. Z każdego stylu wyciągamy wnioski - to, co najlepsze i co działa dodajemy do swojego \"arsenału\". Albowiem wyznajemy zasadę, że najlepsza tradycja to żywa tradycja - dostosowywująca się do warunków współczesnych.",

        "Cały czas rozwijamy się w Karate Goju-ryu - pogłębiamy wiedzę m.in. poprzez seminaria (gasshuku) oraz treningi w dojo oraz w domu. Zawsze jest coś, co można zrobić szybciej, lepiej i dokładniej. Innymi słowy - samodoskonalimy się z każdym dniem."
    ]
}

export default AboutUs_ArtData;