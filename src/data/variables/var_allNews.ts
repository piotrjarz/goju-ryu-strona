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
        id: "sala-2025-08-28",
        title: "Zapisy na pierwszy trening ruszyły!",
        date: "2025-08-28",
        headers: [
            "Mamy to!",
            "Gdzie i kiedy?",
            "Jak się zapisać?"
        ],
        content: [
            "Zapisy na pierwszy trening karate goju-ryu w Dojo Hasu ruszyły! Serdecznie zachęcamy do spróbowania!",
            "Pierwszy próbny trening wstępnie odbędzie się w <b>Szkole Podstawowej w Turośni Kościelnej</b> dnia <b>15.09.2025</b> o godzinie <b>18:00</b>! Dokładne informacje  o treningach podamy wkrótce na stronie oraz w mediach społecznościowych.",
            "Aby się zapisać kliknij w zakładkę formularz znajdującą się w menu. Zostaniesz przekierowany do formularza google. Jego wypełnienie skutkuje zapisaniem się na pierwszy darmowy trening próbny karate goju ryu!"
        ],
        tags: [
            "Karate Białystok",
            "Karate Turośń Kościelna",
            "Goju-ryu Białystok",
            "TOGKF Białystok"
        ],
        images: [
            { 
                position: "mid-2", 
                url: "/images/logo_karate.webp",
                alt: "Logo Białostockiego Klubu Karate Goju-ryu w Białymstoku - Dojo Hasu."
            }
        ]

    }
]

export default allNews;