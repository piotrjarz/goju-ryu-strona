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
    }
]

export default allNews;