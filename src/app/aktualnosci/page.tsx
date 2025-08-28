import allNews from "@/data/variables/var_allNews"
import Article from "@/components/Article"

export default function AllNews(){
    return(
        <main className="p-5">
            <section>
                <article>
                    <h2 className="text-3xl text-center font-semibold header-text-blue">Aktualności</h2>
                    <div className="w-full overflow-x-auto mx-auto my-5">
                        {allNews.reverse().map(news => (
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