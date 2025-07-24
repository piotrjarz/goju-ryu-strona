import { Kata } from "./kata"

export type KataArticle = {
    kata : Kata,
    header : string,
    description : string[],
    movie? : string,
    movie_bunkai? : string,
}