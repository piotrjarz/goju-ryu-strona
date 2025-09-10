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

    }
]

export default allNews;