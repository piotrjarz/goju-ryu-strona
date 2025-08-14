import { ArticleImage } from "./ArticleImage"

//@ Type for storing News from api
export type NewsArticle = {
    id : string,
    title: string,
    date : string,      // ISO 8601 "YYYY-MM-DD"
    headers : string[],
    content : string[]
    images? : ArticleImage[],
    links? : string[],
    tags? : string[],
}
