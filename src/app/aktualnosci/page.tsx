// import allNews from "@/data/variables/var_allNews"
import Article from "@/components/Article"
import { NewsArticle } from "@/data/types/NewsArticle";

    async function loadAllNews() : Promise<NewsArticle[]> {
        try{
            const response = await fetch('https://raw.githubusercontent.com/piotrjarz/goju-news/main/allNews.json', {cache: 'no-store'});

            const text = await response.text();

            const data = JSON.parse(text);
            const news : NewsArticle[] = data.news;
            return news;
        }
        catch(error){
            console.error("Error fetching news data:", error);
            return [];
        }
    }


export default async function AllNews(){
    const newsData : NewsArticle[] = await loadAllNews();
    return(
        <main className="p-5">
            <section>
                <article>
                    <h2 className="text-3xl text-center font-semibold header-text-blue">Aktualności</h2>
                    <div className="w-full overflow-x-auto mx-auto my-5">
                        {newsData.reverse().map(news => (
                                <Article 
                                title={news.title}
                                content={news.content}
                                date={news.date}
                                headers={news.headers}
                                id={news.id}
                                images={news.images}
                                key={news.id}
                                links={news.links}
                                tags={news.tags}
                                />
                        ))}
                    </div>
                </article>
            </section>
        </main>
    )
}