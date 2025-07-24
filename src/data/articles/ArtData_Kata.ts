import { KataArticle } from "../types/kata_article"
import { kataList } from "../variables/var_kata"


// For kataList
enum KataIndex{
    GEKISAI_DAI_ICHI = 0,
    GEKISAI_DAI_NI,
    SAIFA,
    SEIYUNCHIN,
    SHISOCHIN,
    SANSERU,
    SEPAI,
    KURURUNFA,
    SEISAN,
    SUPARIMPEI,
    SANCHIN,
    TENSHO
}

export const GekisaiDaiIchiArticle : KataArticle = {
    kata : kataList[KataIndex.GEKISAI_DAI_ICHI],
    header : "Gekisai Dai Ichi",
    description : ["Placeholder"],
    movie : "https://www.youtube.com/watch?v=My-N4VQY6U0",
    movie_bunkai : "https://www.youtube.com/watch?v=wK5CIgxB2n4"
}

export const GekisaiDaiNiArticle : KataArticle = {
    kata : kataList[KataIndex.GEKISAI_DAI_NI],
    header : "Gekisai Dai Ni",
    description : ["Placeholder"],
    movie : "https://www.youtube.com/watch?v=7ATBdHJcq-g",
    movie_bunkai : "https://www.youtube.com/watch?v=qeG4iJkhC8M"
}

export const SaifaArticle : KataArticle = {
    kata : kataList[KataIndex.SAIFA],
    header : "Saifa",
    description : ["Placeholder"],
    movie : "https://www.youtube.com/watch?v=JJoSqgQ9LPY",
    movie_bunkai : "https://www.youtube.com/watch?v=J_lb5DK-jEk"
}


export const SeiyunchinArticle : KataArticle = {
    kata : kataList[KataIndex.SEIYUNCHIN],
    header : "Seiyunchin",
    description : ["Placeholder"],
    movie : "https://www.youtube.com/watch?v=lmEGhHsovto",
    movie_bunkai : "https://www.youtube.com/watch?v=A7ozAXBHSvw"
}

export const ShisochinArticle : KataArticle = {
    kata : kataList[KataIndex.SHISOCHIN],
    header : "Shisochin",
    description : ["Placeholder"],
    movie : "https://www.youtube.com/watch?v=0j1iT-ceRuw",
    movie_bunkai : "https://www.youtube.com/watch?v=Ns-usmbe_7g"
}

export const SanseruArticle : KataArticle = {
    kata : kataList[KataIndex.SANSERU],
    header : "Sanseru",
    description : ["Placeholder"],
    movie : "https://www.youtube.com/watch?v=tCrXO9MQJyk",
    movie_bunkai : "https://www.youtube.com/watch?v=DBAItFJOrzA"
}


export const SepaiArticle : KataArticle = {
    kata : kataList[KataIndex.SEPAI],
    header : "Sepai",
    description : ["Placeholder"],
    movie : "https://www.youtube.com/watch?v=rBvK4eSHReY",
    movie_bunkai : "https://www.youtube.com/watch?v=ch425QMrgak"
}


export const KururunfaArticle : KataArticle = {
    kata : kataList[KataIndex.KURURUNFA],
    header : "Kururunfa",
    description : ["Placeholder"],
    movie : "https://www.youtube.com/watch?v=3HGX7L6VIcU",
    movie_bunkai : "https://www.youtube.com/watch?v=F6oRPSOeCn4"
}

export const SeisanArticle : KataArticle = {
    kata : kataList[KataIndex.SEISAN],
    header : "Seisan",
    description : ["Placeholder"],
    movie : "https://www.youtube.com/watch?v=3pHRMf9H2jI",
    movie_bunkai : "https://www.youtube.com/watch?v=-2Ck-PZDVpE"
}


export const SuparimpeiArticle : KataArticle = {
    kata : kataList[KataIndex.SUPARIMPEI],
    header : "Suparimpei",
    description : ["Placeholder"],
    movie : "https://www.youtube.com/watch?v=0cTsuE3Sas4",
    movie_bunkai : "https://www.youtube.com/watch?v=z3xzFEDUDV8"
}

export const SanchinArticle : KataArticle = {
    kata : kataList[KataIndex.SANCHIN],
    header : "Sanchin",
    description : ["Placeholder"],
    movie : "https://www.youtube.com/watch?v=PPAEMOnhEJY"
}

export const TenshoArticle : KataArticle = {
    kata : kataList[KataIndex.TENSHO],
    header : "Tensho",
    description : ["Placeholder"],
    movie : "https://www.youtube.com/watch?v=F6h9NxIamxQ"
}

export const all_kata_list = [
    GekisaiDaiIchiArticle,
    GekisaiDaiNiArticle,
    SaifaArticle,
    SeiyunchinArticle,
    ShisochinArticle,
    SanseruArticle,
    SepaiArticle,
    KururunfaArticle,
    SeisanArticle,
    SuparimpeiArticle,
    SanchinArticle,
    TenshoArticle
]