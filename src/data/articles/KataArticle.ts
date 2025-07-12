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
    description : ["Placeholder"]
}

export const GekisaiDaiNiArticle : KataArticle = {
    kata : kataList[KataIndex.GEKISAI_DAI_NI],
    header : "Gekisai Dai Ni",
    description : ["Placeholder"]
}

export const SaifaArticle : KataArticle = {
    kata : kataList[KataIndex.SAIFA],
    header : "Saifa",
    description : ["Placeholder"]
}


export const SeiyunchinArticle : KataArticle = {
    kata : kataList[KataIndex.SEIYUNCHIN],
    header : "Seiyunchin",
    description : ["Placeholder"]
}

export const ShisochinArticle : KataArticle = {
    kata : kataList[KataIndex.SHISOCHIN],
    header : "Shisochin",
    description : ["Placeholder"]
}

export const SanseruArticle : KataArticle = {
    kata : kataList[KataIndex.SANSERU],
    header : "Sanseru",
    description : ["Placeholder"]
}


export const SepaiArticle : KataArticle = {
    kata : kataList[KataIndex.SEPAI],
    header : "Sepai",
    description : ["Placeholder"]
}


export const KururunfaArticle : KataArticle = {
    kata : kataList[KataIndex.KURURUNFA],
    header : "Kururunfa",
    description : ["Placeholder"]
}

export const SeisanArticle : KataArticle = {
    kata : kataList[KataIndex.SEISAN],
    header : "Seisan",
    description : ["Placeholder"]
}


export const SuparimpeiArticle : KataArticle = {
    kata : kataList[KataIndex.SUPARIMPEI],
    header : "Suparimpei",
    description : ["Placeholder"]
}

export const SanchinArticle : KataArticle = {
    kata : kataList[KataIndex.SANCHIN],
    header : "Sanchin",
    description : ["Placeholder"]
}

export const TenshoArticle : KataArticle = {
    kata : kataList[KataIndex.TENSHO],
    header : "Tensho",
    description : ["Placeholder"]
}