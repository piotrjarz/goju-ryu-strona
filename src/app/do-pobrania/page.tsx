export default function FilesToDownload() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section>
        <article>
          <h2 className="text-2xl sm:text-3xl text-center font-semibold header-text-blue mb-6">
            Pliki do pobrania
          </h2>

          <div className="space-y-4">
            {[
              "Regulamin klubu",
              "Deklaracja członkowska",
              "Deklaracja RODO",
              "Standardy ochrony małoletnich",
            ].map((file, idx) => (
              <a
                key={idx}
                href="#"
                className="block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 shadow-sm hover:bg-gray-100 transition"
              >
                {file}
              </a>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
