import { NewsArticle } from "../types/NewsArticle";

const allNews : NewsArticle[] = [
    {
        id: "intro-2025-08-14",
        title: "Witamy na stronie!",
        date: "2025-08-14",
        headers: [
            "Witaj, świecie!"
        ],
        content: [
            "Białostocki Klub Karate Goju-ryu - Dojo Hasu wita wszystkich tu zgromadzonych! Treningi będą prowadzone na terenie Białegostoku i jego okolic. Pod koniec sierpnia i na początku września zdradzimy Wam więcej szczegółów odnośnie zajęć, także bądźcie czujni! Dziękujemy za cierpliwość!"
        ],
        tags: [
            "Klub Karate Goju-ryu Białystok",
            "Karate w Białymstoku",
            "Karate Białystok",
            "Goju-ryu Białystok",
            "TOGKF Białystok",
            "Samoobrona Białystok",
            "Sztuki walki Białystok",
            "Sporty walki Białystok",
            "Karate traydycjne Białystok",
            "Rekreacyjne sztuki walki Białystok",
            "Rekreacyjne karate Białystok"
        ],
        images: [
            { 
                position: "mid-0", 
                url: "/images/logo_karate.webp",
                alt: "Logo Białostockiego Klubu Karate Goju-ryu w Białymstoku - Dojo Hasu."
            }
        ]
    },
    {
        id: "sala-2025-09-10",
        title: "Zapisy na pierwszy trening ruszyły!",
        date: "2025-09-10",
        headers: [
            "Mamy to!",
            "Gdzie i kiedy?",
            "Jak się zapisać?",
            "Co zabrać na trening?"
        ],
        content: [
            "Zapisy na pierwszy trening karate goju-ryu w Dojo Hasu ruszyły! Serdecznie zachęcamy do spróbowania!",
            "Pierwszy próbny trening odbędzie się w <b>Szkole Podstawowej w Turośni Kościelnej</b> dnia <b>23.09.2025</b> (wtorek) o godzinie <b>18:00</b>! Dokładne informacje  o treningach podamy wkrótce na stronie oraz w mediach społecznościowych.",
            "Aby się zapisać kliknij w zakładkę formularz znajdującą się w menu. Zostaniesz przekierowany do formularza google. Jego wypełnienie skutkuje zapisaniem się na pierwszy darmowy trening próbny karate goju ryu!",
            "Na trening zabierz ze sobą wygodny strój sportowy (np. dres, legginsy, koszulkę) oraz wodę. Nie potrzebujesz nic więcej! Pamiętaj też o dobrym humorze i chęci do nauki!"
        ],
        tags: [
            "Karate Białystok",
            "Karate Turośń Kościelna",
            "Goju-ryu Białystok",
            "TOGKF Białystok",
            "Karate dla dzieci"
        ],
        images: [
            { 
                position: "mid-3", 
                url: "/images/logo_karate.webp",
                alt: "Logo Białostockiego Klubu Karate Goju-ryu w Białymstoku - Dojo Hasu."
            }
        ]

    },
    {
        id: "family-2025-09-13",
        title: "Dlaczego warto uprawiać karate z rodziną?",
        date: "2025-09-13",
        headers: [
            "Karate Familijne - sport, który łączy pokolenia.",
            "Rodzina - razem na macie i razem w życiu.",
            "Karate Familijne - wspólna pasja, wspólne wspomnienia.",
            "Zapraszamy na treningi!"
        ],
        content: [
            "Karate Familijne to wyjątkowa forma treningu, która łączy pokolenia i wzmacnia więzi rodzinne. Wspólne ćwiczenia na macie to nie tylko doskonała okazja do poprawy kondycji fizycznej, ale także sposób na budowanie zaufania i wzajemnego wsparcia w rodzinie.",

            "Rodziny, które trenują razem, często zauważają poprawę komunikacji i zrozumienia między sobą. Wspólne pokonywanie wyzwań na treningu przekłada się na lepsze radzenie sobie z codziennymi problemami. Podczas treningów dzieci uczą się szacunku do rodziców, a rodzice zyskują lepsze zrozumienie potrzeb swoich pociech.",

            "Karate Familijne to także doskonała okazja do tworzenia wspólnych wspomnień i tradycji. Regularne treningi stają się czasem, na który wszyscy członkowie rodziny czekają z niecierpliwością. To momenty, które budują silne więzi i pozostają w pamięci na całe życie. Dzięki nim członkowie rodziny mają więcej tematów do rozmów i wspólnych zainteresowań, wzmaciając tym samym relacje między sobą na lata.",

            "Zapraszamy więc na treningi karate goju-ryu całe rodziny! Niezależnie od wieku czy poziomu zaawansowania, każdy znajdzie coś dla siebie. Dołączcie do nas i przekonajcie się, jak wiele korzyści może przynieść wspólne uprawianie sportu!"
        ],
        tags: [
            "Karate Białystok",
            "Karate Turośń Kościelna",
            "Goju-ryu Białystok",
            "TOGKF Białystok",
            "Karate dla dzieci",
            "Karate dla dorosłych",
            "Karate rodzinne",
        ],
        images: [
            { 
                position: "mid-3", 
                url: "/images/karate_kid.jpg",
                alt: "Dwie dziewczyny w kimonach ćwiczące karate - reprezentacja karate familijnego w Doju Hasu."
            },
            {
                position: "header",
                url: "/images/karate_practice.jpg",
                alt: "Dziewczyna wykonująca tornado-kick."
            }
        ]

    }
]

export default allNews;