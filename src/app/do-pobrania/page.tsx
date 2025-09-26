export default function FilesToDownload() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section>
        <article>
          <h2 className="text-2xl sm:text-3xl text-center font-semibold header-text-blue mb-6">
            Pliki do pobrania
          </h2>

          <div className="space-y-4 mt-6">
            <a
              href="https://mmgbgbksvr5lc1zd.public.blob.vercel-storage.com/dokumenty/Reguilamin%20Hasu.pdf"
              target="_blank"
              className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 shadow-sm hover:bg-gray-100 transition"
            >
              Regulamin Klubu
            </a>
          </div>

          <div className="space-y-4 mt-6">
            <a
              href="https://mmgbgbksvr5lc1zd.public.blob.vercel-storage.com/dokumenty/HASU%20umowa%20o%20zaj%C4%99cia.pdf"
              target="_blank"
              className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 shadow-sm hover:bg-gray-100 transition"
            >
              Umowa o zajęcia
            </a>
          </div>

          <div className="space-y-4 mt-6">
            <a
              href="https://mmgbgbksvr5lc1zd.public.blob.vercel-storage.com/dokumenty/Standardy%20Ochrony%20Ma%C5%82oletnich%20w%20Bia%C5%82ostockim%20Klubie%20Karate%20Goju.pdf"
              target="_blank"
              className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 shadow-sm hover:bg-gray-100 transition"
            >
              Standardy ochrony małoletnich
            </a>
          </div>
        </article>
      </section>
    </div>
  );
}
