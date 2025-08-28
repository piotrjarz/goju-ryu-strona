import { NewsArticle } from "@/data/types/NewsArticle"

export default function Article(
{
    id,
    title,
    date,
    headers,
    content,
    images,
    tags
} : NewsArticle){
return (
  <article
    key={id}
    className="max-w-4xl mx-auto my-6 px-4 sm:px-6 lg:px-8 py-6 bg-white rounded-xl shadow-md"
  >
    {/* Tytuł */}
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4">{title}</h2>
    <p className="text-gray-500 text-center mb-4 text-sm sm:text-base">Z dnia: {date}</p>

    {/* Zdjęcia pod nagłówkiem */}
    {images
      ?.filter((img) => img.position === "header")
      .map((img, idx) => (
        <img
          key={`header-${idx}`}
          src={img.url}
          alt={title}
          loading="lazy"
          className="w-full h-auto max-w-sm mx-auto rounded-lg mb-6 object-cover"
        />
      ))}

    <hr className="border-gray-300 my-4" />

    {/* Sekcje nagłówków + treści + zdjęcia mid-X */}
    <div className="space-y-6">
      {headers.map((header, index) => (
        <section key={index} className="text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">{header}</h3>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
            <span dangerouslySetInnerHTML={{__html: content[index] || ""}}>
              
            </span>
          </p>

          {/* Zdjęcia mid-X (np. mid-0 po pierwszej sekcji) */}
          {images
            ?.filter((img) => img.position === `mid-${index}`)
            .map((img, idx) => (
              <img
                key={`mid-${index}-${idx}`}
                src={img.url}
                alt={`${header}-${idx}`}
                loading="lazy"
                className="w-full h-auto max-w-sm mx-auto rounded-lg mb-6 object-cover"
              />
            ))}
        </section>
      ))}
    </div>

    <hr className="border-gray-300 my-4" />

    {/* Zdjęcia w stopce */}
    {images
      ?.filter((img) => img.position === "footer")
      .map((img, idx) => (
        <img
          key={`footer-${idx}`}
          src={img.url}
          alt={`footer-${idx}`}
          loading="lazy"
          className="w-full h-auto max-w-sm mx-auto rounded-lg mb-4 object-cover"
        />
      ))}

    {/* Tagi */}
    {tags && (
      <div className="flex flex-wrap items-center gap-2 mt-4 text-sm text-gray-600">
        <span className="font-semibold">Tagi:</span>
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 transition"
          >
            {tag}
          </span>
        ))}
      </div>
    )}
  </article>
);

}